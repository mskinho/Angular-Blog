const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    body: {type: String, required: true},
    title: {type: String, required: true},
    _userId: {type: String, required: true},
    imageURL: {type: String, default: 'default.png'},
    _username: {type: String, required: true},
    comments: [],
    posted: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Post', userSchema)