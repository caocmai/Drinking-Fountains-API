const express = require('express');
const Fountain = require('../../models/fountain');
const Amenity = require('../../models/amenity');

const router = express.Router(); // eslint-disable-line new-cap

// To get all amenities at api/fountain/<fountainID>/amenity
router.get('/', (req, res) => {
    Amenity.find().lean().then(result => {
        res.json(result);
    }).catch(err => {
        console.log(err.message);
    });
});

// Get specific amenity at api/fountain/<fountainID>/amenity/<amenityID>
router.get('/:amenityID', (req, res) => {
    Amenity.findById(req.params.amenityID, (err, amenity) => {
      res.send(amenity)
    })  
  })

// create an amenity at api/fountain/<fountainID>/amenity/new
router.post("/new", (req, res) => {
    let fountainID = req.fountainID;
    if (!req.user) {
        return res.status(401); // UNAUTHORIZED
    } else {
        // INSTANTIATE INSTANCE OF MODEL
        const amenity = new Amenity(req.body);
        
        // SAVE INSTANCE OF Amenity MODEL TO DB
        amenity.save().then(() =>{
            return Fountain.findOne({ _id: fountainID });
        }).then(fountain => {
            fountain.amenities.unshift(amenity)
            fountain.save()
            res.send({amenity})
            // res.redirect(`/`);
        }).catch(err => { console.log(err) });
    // return done()
    }
});

// Update an amenity at at api/fountain/<fountainID>/amenity/<amenityID>/update
router.put("/:amenityID/update", (req, res) => {
    if (!req.user) {
        return res.status(401); // UNAUTHORIZED
    } else {
        Amenity.findOneAndUpdate({ amenityID: req.params.amenityID }).then(amenity => {
            amenity.name = req.body.name;
            amenity.quantity = req.body.quantity;
            amenity.more_info = req.body.more_info;
            amenity.save();
        }).then(fountain => {
            fountain.amenities.pop(amenity);
            fountain.amenities.unshift(amenity);
            res.json((fountain, amenity));
            // res.redirect(`/`);
            return topic.save();
        }).catch(err => {
            console.log(err.message);
        });
    }
});

// Delete specfic amenity at api/fountain/<fountainID>/amenity/<amenityID>/delete
router.delete("/:amenityID/delete", (req, res) => {
    let fountainID = req.fountainID;
    if (!req.user) {
        return res.status(401); // UNAUTHORIZED
    } else {
        // Delete INSTANCE OF Amenity MODEL TO DB
        // amenity = Amenity.findOneAndDelete({ amenityID: req.params.amenityID })
        const amenity = Amenity.deleteOne( {_id: req.params.amenityID} )
            .then(() => {
                return Fountain.findOne({ _id: fountainID });
            })
            .then(fountain => {
                fountain.amenities.pop(amenity);
                res.json(fountain);
                // res.redirect(`/`);
                return fountain.save();
            })
            .catch(err => {
                console.log(err);
            });
    }
});

module.exports = router;
