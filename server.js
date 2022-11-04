const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')


require('dotenv').config()

const PORT = process.env.PORT

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// Middleware
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))
app.use(express.static('public'))


// Database connection logs
const db = mongoose.connection
db.on("error", (err) => console.log(err.message + " is mongo not running?"))
db.on("connected", () => console.log("mongo connected"))
db.on("disconnected", () => console.log("mongo disconnected"))

app.get("/", (req, res) => {
    res.send('test')
})

app.listen(PORT)