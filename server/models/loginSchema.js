const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
    
}, {timestamps: true})

module.exports = mongoose.model('Form', loginSchema)