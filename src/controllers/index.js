const express = require('express');
// const thingRoutes = require('./fountain.js');

const userRoutes = require('./user');
const apiRoutes = require('./api/index');

const router = express.Router(); // eslint-disable-line new-cap

// TODO: Change to your model.

router.use('/user', userRoutes);
router.use('/api', apiRoutes);

// router.get('/', (req, res) => {
   
//     res.redirect('https://caocmai.github.io/drinking-fountains-api/')
// });

router.get('/*', (req, res) => {
    res.status(400).json({ message: 'no route found.' });
});


module.exports = router;
