const router = require('express').Router();
const fountainRouter = require('./fountain');

// api/fountain route
router.use('/fountain', fountainRouter);

// api/whatever routes
router.use('/*', (req, res) => {
    res.status(400).json({ error: 'No route found. See documentation at: https://caocmai.github.io/drinking-fountains-api/' });
});

module.exports = router;