const express = require('express')
const colours = require('colors')
const dovenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000


connectDB()
const app = express()


// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(errorHandler)

app.use('/api/receipt', require('./routes/receiptRoute'));


app.listen(port, () => console.log(`Server port: ${port}`))