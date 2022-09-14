const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    babyAge: {
        type: String
    },
    location: {
        type: String
    }
});

module.exports = mongoose.model('user', userSchema)
