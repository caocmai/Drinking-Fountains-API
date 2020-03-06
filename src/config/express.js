const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const checkAuth = require('../controllers/auth');
const cors = require('cors');
const allRoutes = require('../controllers/all_routes.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

// Enable CORS - Cross Origin Resource Sharing.
app.use(cors());

app.use(expressValidator());

app.use(checkAuth);

// Mount all routes on /api path.
app.use('/', allRoutes);


// #TODO: Additional non-API routes cgo here.

module.exports = app;
