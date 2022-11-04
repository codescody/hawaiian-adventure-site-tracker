const express = require('express')
const sitesRouter = express.Router()
const Site = require('../models/site.js')

// Index New Delete Update Create Edit Show
sitesRouter.get('/', (req, res) => {
    res.send('hi')
})

module.exports = sitesRouter