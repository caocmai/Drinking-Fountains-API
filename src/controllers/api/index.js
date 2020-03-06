const router = require('express').Router();
const fountainRouter = require('./fountain');

router.use('/fountain', fountainRouter);


router.use('/*', (req, res) => {
    res.status(400).json({ error: 'No route found. See documentation at: https://caocmai.github.io/drinking-fountains-api/' });
});

module.exports = router;