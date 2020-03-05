const express = require('express')

const Fountain = require('../models/fountain.js')

// const router = express.Router(); // eslint-disable-line new-cap

// GET /api/thing
// router.get('/', (req, res) => {
//   Thing.find().then(things => {
//     res.send({ things })
//   })
// })

// TODO: Add more routes.


module.exports = (app) => {

// GET all
app.get('/api/all', (req, res) => {
  Fountain.find().then(fountain => {
    res.send(fountain)
  })
})

// GET specific one
app.get('/api/fountain/:id', (req, res) => {
  Fountain.findById(req.params.id, (err, fountain) => {
    res.send(fountain)
  })  
})

// POST one
app.post('/api/fountain/new', (req, res) => {
  Fountain.create(req.body)
    .then((fountain) => {
      res.send(fountain)
    })
})

// PUT/update by ID
app.put('/api/fountain/:id', (req, res) => {
  const filter = { _id: req.params.id }
  const update = req.body 
  Fountain.findOneAndUpdate(filter, update, {
    new: true
  })
  .then(function(fountain) {
    return res.send(fountain)
  })
});

//DELETE by ID
app.delete('/api/fountain/:id', (req, res) => {
  Fountain.findByIdAndRemove(req.params.id)
  .then(function(fountain) {
    return res.send(fountain)
  })
});

};
// module.exports = router;
