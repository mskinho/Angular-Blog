const express = require('express')
const jwt = require('jsonwebtoken')

const mg = require('nodemailer-mailgun-transport')
const nodemailer = require('nodemailer')
const crypto = require('crypto')
const async = require('async')
const multer  = require('multer')
const path = require('path')

const config = require('../config/database')

const router = express.Router()

const User = require('../models/user')
const Post = require('../models/blogpost')
const Comment = require('../models/comment')

require('dotenv/config');

var storage = multer.diskStorage({
    destination: '../client/src/assets/',
    filename: function (req, file, cb) {
      crypto.pseudoRandomBytes(16, function (err, raw) {
        if (err) return cb(err)
  
        cb(null, raw.toString('hex') + path.extname(file.originalname))
      })
    }
  })
  
var upload = multer({ storage: storage })

router.post('/contact', (req, res) => {
    if(!req.body.message) {
        res.json({success: false, message: 'You must enter a message before sending.'})
    } else {
        var smtpTransport = nodemailer.createTransport({
				service: 'Gmail',
				auth: {
					user: process.env.EMAIL,
					pass: process.env.PASSWORD,
				}
			});
         var mailOptions = {
        to: process.env.EMAIL,
        from: 'Contact | Help',
        subject: 'Contact | Help',
        text: req.body.message
         };
        smtpTransport.sendMail(mailOptions, function(err) {
            if(err) {
                res.json({success: false, message: 'An error occured, Please try again.'})
            } else {
                res.json({success: true, message: 'Thank you for contacting us! we will get back to you as soon as possible.'})
            }
        })
    }
})
router.post('/register', (req, res) => {
    if(!req.body.email || req.body.email === '') {
        res.json({success: false, message: 'You must provide an email!'})
    } else {
       if(!req.body.username || req.body.username === '') {
           res.json({success: false, message: 'You must provide a username!'})
       } else {
           if(!req.body.password || req.body.password === '') {
               res.json({success: false, message: 'You must provide a password!'})
           } else {
              user = new User({
                  email: req.body.email.toLowerCase(),
                  username: req.body.username.toLowerCase(),
                  password: req.body.password
              });
              user.save((err) => {
                  if(err) {
                      res.json({success: false, message: 'Could not save user! Try changing your username or email.', err: err})
                  } else {
                      var smtpTransport = nodemailer.createTransport({
                        service: 'Gmail',
                        auth: {
                        user: process.env.EMAIL,
                        pass: process.env.PASSWORD,
                            }
                        });
                        var mailOptions = {
                        to: process.env.EMAIL,
                        from: 'https://isakgranqvist.com',
                        subject: 'Welcome | Glad to see you!',
                        text: 
                        `Hello! `+ req.body.username+ `, You have recently signed up at https://isakgranqvist.com`
                        +`\n\n`+`Your email is: `+req.body.email
                        +`\n\n`+`Your username is: `+req.body.username
                        +`\n\n` + `Best Regards - https://isakgranqvist.com`    
                        };
                        smtpTransport.sendMail(mailOptions, function(err) {
                        if(err) {
                            res.json({success: false, message: 'An error during registration, Please try again.'})
                        } else {
                            res.json({success: true, message: 'Your account has been registered!'})
                        }
                    })
                  }
              })
           }
       }
    }
})

router.post('/login', (req, res) => {
    if(!req.body.email) {
        res.json({ success: false, message: 'Please enter an email.'})
    } else {
        if(!req.body.password) {
            res.json({ success: false, message: 'Please enter a password.'})
        } else {
            User.findOne({email: req.body.email.toLowerCase()}, (err, user) => {
                if(err) {
                    res.json({ success: false, message: err})
                } else {
                    if(!user) {
                        res.json({ success: false, message: 'Hmm, That did not work. Are you sure you entered the correct information?'})
                    } else {
                        const validPassword = user.comparePassword(req.body.password);
                        if(!validPassword) {
                            res.json({ success: false, message: 'The password you entered is not correct.'})
                        } else {
                           const token = jwt.sign({_id: user._id}, config.secret, {expiresIn: '1h'});
                           res.json({ success: true, message: 'Success, Welcome in!', token: token, user: { _id: user._id, email: user.email, username: user.username, bio: user.bio} })
                        }
                    }
                }
            })
        }
    }
})

router.post('/updatebio/:id', (req, res) => {
    User.findOne({_id: req.params.id}, (err, user) => {
        if(err) {
            res.json({success: false, message: err})
        } else {
            if(!user) {
                res.json({success: false, message: 'An error occured. Please refresh the page or try again.'})
            } else {
                var User = user;
                User.bio = req.body.bio;
                user.update(User, (err) => {
                    if(err) {
                        res.json({success: false, message: 'Bio could not be updated.'})
                    } else {
                        res.json({success: true, message: 'Bio updated!'})
                    }
                })
            }
        }
    })
})

router.post('/upload/:id',upload.single('avatar'), (req, res) => {
  User.findOne({_id: req.params.id}, (err, user) => {
     if(err) {
      res.json({success: false, message: 'Something went wrong..'})
     } else {
       if(!user) {
        res.json({success: false, message: 'That user does not exist'})
       } else {
          var newUser = user;
          newUser.imageURL = req.file.filename;
          user.update(newUser, (err) => {
            if(err) {
              res.json({success: false, message: 'Your image could not be uploaded'})
            } else {
              res.json({success: false, message: 'Image uploaded'})
            }
          })
       }
     }
  })
})

router.post('/blogpost', (req, res) => {
    if(!req.body.body) {
        res.json({success: false, message: 'Please enter a message before posting!'})
    } else {
      if(!req.body.title) {
        res.json({success: false, message: 'Please enter a title and try again!'})
      } else {
        if(!req.body.id) {
            res.json({success: false, message: 'An error occured, Please try again.'})
        } else {
          if(!req.body.imageURL) {
            res.json({success: false, message: 'You must choose a file!'})
          } else {
             let post = new Post({
                title: req.body.title,
                imageURL: req.body.imageURL,
                body: req.body.body,
                _username: req.body.username,
                _userId: req.body.id
            })
            post.save((err) => {
                if(err) {
                    res.json({success: false, message: err})
                } else {
                    res.json({success: true, message: 'Blog post saved!'})
                }
            })
          } 
        }
      }
    }
})

router.post('/updatepost/:id', (req, res) => {
    Post.findOne({_id: req.params.id}, (err, post) => {
        if(err) {
            res.json({success: false, message: 'An error occured.'})
        } else {
            var newPost = post;
            newPost.body = req.body.body;
            post.update(newPost, (err) => {
                if(err) {
                    res.json({success: false, message: err})
                } else {
                    res.json({success: true, message: 'Post updated!'})
                }
            })
        }
    })
})

router.post('/postcomment/:id', (req, res) => {
    Post.findOne({_id: req.params.id}, (err, post) => {
        if(err) {
            res.json({success: false, message: err})
        } else {
            if(!post) {
                res.json({success: false, message: 'No post was found.'})
            } else {
              console.log(req.body);
               var newPost = post;
               var comment = new Comment({
                   comment: req.body.comment,
                   commentor: req.body.username,
                   imageURL: req.body.imageURL
               })
                newPost.comments.push(comment);
                post.save(newPost, (err) => {
                    if(err) {
                        res.json({success: false, message: err})
                    } else {
                        res.json({success: true, message: 'Comment saved!'})
                    }
                })
            }
        }
    })
})

router.post('/resetpassword', function(req, res) {
	async.waterfall([
		function(done) {
			crypto.randomBytes(20, function(err, buf) {
				var token = buf.toString('hex');
				done(err, token);
			})
		},
		function(token, done) {
			User.findOne({email: req.body.email}, function(err, user) {
				if(!user) {
					res.json({success: false, message: 'No user was found.'})
				}
				user.resetPasswordToken = token;
				user.resetPasswordExpires = Date.now() + 3600000;
				user.save(function(err) {
					done(err, token, user);
				})
			})
		},
		function(token, user, done) {
			var smtpTransport = nodemailer.createTransport({
				service: 'Gmail',
				auth: {
					user: process.env.EMAIL,
					pass: process.env.PASSWORD,
				}
			});
			var mailOptions = {
				to: user.email,
				from: process.env.EMAIL,
				subject: 'Password Reset | https://isakgranqvist.com',
				text: 'This email was sent because you (or someone else) requested a password reset at https://isakgranqvist.com/resetpassword' + '\n\n'+' Please press the link below in order to reset your password.' + 'http://'+ req.headers.host+'/returnmail/'+token+'\n\n'+'If you do not wish to change your password please ignore this email.' +'\n\n' + 'Best Regards - https://isakgranqvist.com'
			};
			smtpTransport.sendMail(mailOptions, function(err) {
				res.json({success: true, message: 'An email with instructions on how to reset password has been sent to: ' + req.body.email})
				done(err, 'done');
			})
		}
	], function(err) {
		if(err) {
			res.json({success: false, message: err})
		}
		res.json({success: true, message: 'Mail sent!'})
	})
})

router.post('/returnmail/:token', function(req, res) {
  async.waterfall([
    function(done) {
      User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        if (!user) {
          res.json({success: false, message: 'No user was found, Please try again.'})
        }
		
		user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

        user.save(function(err) {
            if(err) {
                res.json({success: false, message: 'Password could not be updated'})
            } else {
                res.json({success: true, message: 'Password updated!'})
            }
        });
      });
    },
    function(user, done) {
      var smtpTransport = nodemailer.createTransport( {
        service: 'Gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'https://isakgranqvist.com',
        subject: 'Your password has been changed',
        text: 'Hello,\n\n' +
          'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        res.json({success: false, message: 'Mail could not be sent.'})
        done(err);
      });
    }
  ], function(err) {
    res.json({success: false, message: 'An error occured at last stage.'})
  });
});

module.exports = router
