require('dotenv').config()
const express = require('express')
const {connect, set} = require('mongoose')

const PORT = process.env.PORT || 5000
const app = express({extended: true})

app.use(express.json())

app.use('/api/auth', require('./routes/auth.router'))
app.use('/api/admin', require('./routes/admin.router'))
app.use('/api/activate', require('./routes/activate.router'))

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