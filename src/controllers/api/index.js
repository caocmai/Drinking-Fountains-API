const router = require('express').Router();
const fountainRouter = require('./fountain');

router.use('/fountain', fountainRouter);


router.use('/*', (req, res) => {
    res.status(400).json({ error: 'No route found.' });
});

module.exports = router;