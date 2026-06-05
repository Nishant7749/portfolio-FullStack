const express = require('express');
 const app = express()
const Router = require('./routes/loginRoutes')
const connectDB = require('./config/db')
const cors = require('cors')



app.use(cors())
app.use(express.json())
app.use('/contact', Router)

connectDB()

app.listen(5000, ()=> {
    console.log('[server] http://localhost:5000/contact')
})