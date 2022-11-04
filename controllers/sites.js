const express = require('express')
const sitesRouter = express.Router()
const Site = require('../models/site.js')

// Index 
sitesRouter.get("/", (req, res) => {
    Site.find({}, (error, allSites) => {
      res.render("index.ejs", {
        sites: allSites,
      })
    })
  })

// New
sitesRouter.get('/new', (req, res) => {
    res.render('new.ejs')
})

// Update 
sitesRouter.put('/:id', (req, res) => {
    req.body.completed = (req.body.completed === "on") ? true : false;
    Site.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, updatedSite) => {
      res.redirect(`/sites/${req.params.id}`);
    })
  })

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

// Edit
sitesRouter.get('/:id/edit', (req, res) => {
    Site.findById(req.params.id, (error, foundSite) => {
      res.render("edit.ejs", {
        site: foundSite,
        siteId: req.params.id
      })
    })
  })

// Show
sitesRouter.get('/:id', (req, res) => {
    Site.findById(req.params.id, (err, foundSite) => {
      res.render("show.ejs", {
        site: foundSite,
      })
    })
  })

module.exports = sitesRouter