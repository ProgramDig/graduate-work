require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/index')

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use('/auth', router)

const start = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.DB_CONNECTION_URL)
        app.listen(PORT,() => {
            console.log(`Server started.\nPORT: ${PORT}`)
        })
    } catch (e) {
        console.log(`Server error: ${e}`)
    }
}

start()