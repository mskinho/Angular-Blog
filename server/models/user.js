const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {type: String, required: true, unique: true, lowercase: true},
    bio: {type: String, required: true, default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel gravida metus, non ultrices sapien. Morbi odio metus, dapibus non nibh id amet.'},
    username: {type: String, required: true, unique: true, lowercase: true},
    password: {type: String, required: true },
    resetPasswordToken: String,
	resetPasswordExpires: Date
})

userSchema.pre('save', function(next) {                                                                                                                                        
    if(!this.isModified('password'))
        return next()
    bcrypt.hash(this.password, null, null, (err, hash) => {
        if(err) {
            return next(err)
        }  else {
            this.password = hash;
            next();
        }
    })                                                                                                                                                                   
})   

userSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password)
}
module.exports = mongoose.model('User', userSchema)