const mongoose = require('mongoose');
const activitySchema = mongoose.Schema({
    username: {
        type:String
    },
    actId: {
        type:String
    },
    title: {
        type:String
    },
    community: {
        type:String
    },
    adress: {
        type:String
    },
    time:{
        type:Date
    },
    info: {
        type:String
    },
    participants: {
        type:Array
    }
})

module.exports = mongoose.model('activity', activitySchema)