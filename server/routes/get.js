const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const config = require('../config/database')

const User = require('../models/user')
const Post = require('../models/blogpost')

router.get('/returnmail/:token', function(req, res){
    console.log(req.params.token);
	User.findOne({resetPasswordToken: req.params.token, resetPasswordExpires: {$gt: Date.now() }}, function(err, user) {
		if(!user) {
			res.json({success: false, message: 'No user was found, Or the token might have expired.'})
		}
        res.json({success: true, token: req.params.token, message: 'Success, User found!'})
	});
});

router.get('/search/:input', (req, res) => {
    Post.find({title: req.params.input}, (err, posts) => {
        if(err) {
            res.json({success: false, message: 'An error occured.'})
        } else {
            if(!posts) {
                res.json({success: false, message: 'No posts found.'})
            } else {
                if(posts) {
                    res.json({success: true, posts: posts})
                }
            }
        }
    })
})

router.get('/allposts', (req, res) => {
    Post.find({}, (err, posts) => {
        if(err) {
            res.json({success: false, message: 'An error occured, Please try again.'})
        } else {
            if(!posts) {
                res.json({success: false, message: 'No posts where found.'})
            } else {
                res.json({success: true, posts: posts})
            }
        }
    })
})

router.get('/singlepost/:id', (req, res) => {
    Post.findOne({_id: req.params.id}, (err, post) => {
        if(err) {
            res.json({success: false, message: 'An error occured.'})
        } else {
            if(!post) {
                res.json({success: false, message: 'There was no post found.'})
            } else {
                res.json({success: true, post: post})
            }
        }
    })
})
router.get('/deletepost/:id', (req, res) => {
    Post.findOneAndRemove({_id: req.params.id}, (err, deleted) => {
        if(err) {
            res.json({success: false, message: 'That post could not be deleted.'})
        } else {
            res.json({success: true, message: 'Post deleted!'})
        }
    })
})
router.get('/findoneuser/:id', (req, res) => {
    User.findOne({_id: req.params.id}, (err, user) => {
        if(err) {
            res.json({success: false, message: 'An error occured.'})
        } else {
            if(!user) {
                res.json({success: false, message: 'No user was found.'})
            } else {
                if(user) {
                  Post.find({_userId: user._id}, (err, posts) => {
                      if(err) {
                          res.json({success: false, message: err})
                      } else {
                         var data = {
                            username: user.username,
                            email: user.email,
                            _id: user._id,
                            bio: user.bio
                            // password: user.password
                            }
                            res.json({success: true, user: data, posts: posts})
                      }
                  })
                }
            }
        }
    })
})

router.get('/loadPost/:id', (req, res) => {
  Post.findOne({_id: req.params.id}, (err, post) => {
    if(err) {
      res.json({success: false, message: 'That post does not exist'})
    } else {
      if(!post) {
        res.json({success: false, message: 'That post could not be loaded'})
      } else {
        res.json({success: true, message: 'Post loaded', post:post})
      }
    }
  })
})

router.use((req, res, next) => {
    const token = req.headers['authorization']
    if(!token) {
        res.json({success: false, message: 'Token was not found'})
    } else {
        jwt.verify(token, config.secret, (err, dec) => {
            if(err) {
                res.json({success: false, message: 'Token expired or Invalid'})
            } else {
                req.dec = dec;
                next();
            }
        })
    }
})
router.get('/profile', (req, res) => {
    User.findOne({_id: req.dec._id}).select('username email bio imageURL').exec((err, user) => {
        if(err) {
            res.json({success: false, message: err})
        } else {
            if(!user) {
                res.json({success: false, message: 'No user was found'})
            } else {
                Post.find({_userId: user._id}, (err, posts) => {
                    if(err) {
                        res.json({success: false, message: 'An error occured, Please try again.'})
                    } else {
                        res.json({success: true, user: user, posts: posts})
                    }
                })
            }
        }
    })
})

module.exports = router