require('dotenv').config()
const express = require('express')
const {connect, set} = require('mongoose')

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use('/api/auth', require('./routes/auth.router'))

const start = async () => {
    try {
        set('strictQuery', false)
        await connect(process.env.DB_CONNECTION_URL)
        app.listen(PORT,() => {
            console.log(`Server started.\nPORT: ${PORT}`)
        })
    } catch (e) {
        console.log(`Server error: ${e.message}`)
        process.exit(1)
    }
}

start()