const mongoose = require('mongoose');

const user = new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName: {
        type:string
    }
});

module.exports = User = mongoose.model('user', user);