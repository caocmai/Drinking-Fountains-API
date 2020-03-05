const express = require('express');
// const thingRoutes = require('./fountain.js');

const userRoutes = require('./user');
const apiRoutes = require('./api/index');

const router = express.Router(); // eslint-disable-line new-cap

// TODO: Change to your model.

router.use('/', userRoutes);
router.use('/api', apiRoutes);

router.get('/', (req, res) => {
   
    res.redirect('https://google.com')
});


module.exports = router;
