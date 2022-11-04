const express = require('express')
const sitesRouter = express.Router()
const Site = require('../models/site.js')

// Index 
sitesRouter.get('/', (req, res) => {
    res.send('hi')
})

// New


// Create
sitesRouter.post('/', (req, res) => {
    if (req.body.completed === "on") {
        req.body.completed = true
    } else {
        req.body.completed = false
    }
    Site.create(req.body, (error, createdSite) => {
        res.redirect('/sites')
    })
})

module.exports = sitesRouter