// const mongoose = require('mongoose');
// const util = require('util');

require('dotenv').config();
require('./data/database');

const app = require('./config/express');

const port = process.env.PORT

//Need to add this if using the app.get routing, instead of route.get

// mongoose.Promise = Promise;
// connect to mongo db
// const mongoUri = process.env.MONGO_HOST;
// mongoose.connect(
//   mongoUri,
//   { server: { socketOptions: { keepAlive: 1 } } }
// );
// mongoose.connection.on('error', () => {
//   throw new Error(`unable to connect to database: ${mongoUri}`);
// });

// # TODO: Any additional config changes belong here.

// Routes

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912

if (!module.parent) {
  // listen on port config.port
  app.listen(port, () => {
    console.info(`server started on port http://localhost:${process.env.PORT} (${process.env.NODE_ENV})`); // eslint-disable-line no-console
  });
}

module.exports = app;
