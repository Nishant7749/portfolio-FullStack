const express = require('express');
 const app = express()
const Router = require('./routes/loginRoutes')
const connectDB = require('./config/db')
const cors = require('cors')



app.use(cors())
app.use(express.json())
app.use('/contact', Router)

connectDB()

app.get('/', (req, res)=> {
    res.send('API running...')
})

app.listen(process.env.PORT, ()=> {
    console.log('[server] http://localhost:5000/contact')
})