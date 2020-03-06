const express = require('express')

const Fountain = require('../../models/fountain.js')
const amenitiesRoutes = require('../api/amenities')
const router = express.Router(); // eslint-disable-line new-cap

// GET all at api/fountain/all
router.get('/all', (req, res) => {
  Fountain.find().then(fountain => {
    res.send(fountain)
  })
})

// GET specific one at api/fountain/:id
router.get('/:id', (req, res) => {
  Fountain.findById(req.params.id, (err, fountain) => {
    res.send(fountain)
  })  
})

// POST one at api/fountain/new
router.post('/new', (req, res) => {
  if (!req.user) {
    res.send({ error: "Must be logged in to post" })
  } else {
    const fountain = new Fountain(req.body)
    fountain.save().then(result => {
      res.send(result)
    })
  }
})

// PUT/update by ID at api/fountain/<fountainID>/update
router.put('/:id/update', (req, res) => {

  if (!req.user) {
    res.status(401)
    res.send({ error: "Must be logged in to update"})
  } else {
    const filter = { _id: req.params.id }
    const update = req.body 
    Fountain.findOneAndUpdate(filter, update, {
      new: true
    })
    .then(function(fountain) {
      return res.send(fountain)
    })
  }
});

//DELETE by ID at api/fountain/<fountainID>/delete
router.delete('/:id/delete', (req, res) => {
  if (req.user){
    Fountain.findByIdAndRemove(req.params.id)
    .then(function(fountain) {
    res.send(fountain)
  })
  } else {
    res.status(401)
  } 
});


// Middleware nested route for the amenity
router.use('/:fountainID/amenity', function (req, res, next) {
  req.fountainID = req.params.fountainID;
  next()
}, amenitiesRoutes);

module.exports = router;
