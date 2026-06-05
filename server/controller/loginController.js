const Contact = require('../models/loginSchema')

exports.postContact = async(req,res)=> {

    try {
        const {firstname, lastname, email, subject, message} = req.body

     await Contact.create({
        firstname, lastname, email, subject, message
    })

    

    res.status(201).json({message: "Message Sent!", data: req.body})

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}