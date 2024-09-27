const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const signUpSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required:true
    },
    password: {
        type: String
    },
    path:String
})

const Users = mongoose.model('Users',signUpSchema);

module.exports=Users;