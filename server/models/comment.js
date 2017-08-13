const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: {type: String, required: true},
    commentor: {type: String, required: true},
    posted: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Comment', commentSchema)