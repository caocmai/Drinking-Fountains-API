const express = require('express');
const Fountain = require('../../models/fountain');
const Amenity = require('../../models/amenity');

const router = express.Router(); // eslint-disable-line new-cap

// To get all amenities
router.get('/', (req, res) => {
    Amenity.find().lean().then(result => {
        res.json(result);
    }).catch(err => {
        console.log(err.message);
    });
});

// Get specific amenaity
router.get('/:fountainID', (req, res) => {
    let fountainID = req.params.fountainID
    Fountain.findOne({ fountainID: fountainID }).then(result => {
        res.json(result);
    })
})




module.exports = router;
