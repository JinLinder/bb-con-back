const mongoose = require('mongoose');
const communitySchema = mongoose.Schema({
    postId:{
        type:String
    },
    author: {
        type:String
    },
    title: {
        type:String
    },
    text: {
        type:String
    },
    comments: {
        type:Array
    }, 
    likes: {
        type:Array
    }
})

module.exports = mongoose.model('community', communitySchema)