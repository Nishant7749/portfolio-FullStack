const express = require('express');
const router = express.Router()
const {postContact} = require('../controller/loginController')

router.post('/', postContact)


module.exports = router