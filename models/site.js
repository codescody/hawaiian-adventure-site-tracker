const mongoose = require('mongoose')

const siteSchema = new mongoose.Schema({
    name: {type: String, required: true},
    island: {type: String, required: true},
    category: {type: String, required: true},
    completed: Boolean
})

const Site = mongoose.model('site', siteSchema)

module.exports = Site