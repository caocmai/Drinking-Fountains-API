const express = require('express');
const thingRoutes = require('./fountain.js');
const authRoutes = require('./auth.js');

const router = express.Router(); // eslint-disable-line new-cap

// TODO: Change to your model.

router.use('/thing', thingRoutes);

// router.use('/auth', authRoutes);

module.exports = router;
