const mongoose = require('mongoose');
require('dotenv').config()

const connectDB = async()=> {
    try {
        const connect = mongoose.connect(process.env.MONGO_URL)
        console.log('DB Connected!')
    } catch (error) {
        console.error('DB Error: ', error.message)
    }
}

module.exports = connectDB