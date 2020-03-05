const User = require("../models/user");
const jwt = require('jsonwebtoken');

//Check auth - headers
let checkAuth = (req, res, next) => {
    console.log("Checking authentication");
    
    const authorization = req.headers['authorization']
    console.log(authorization)

  if (typeof authorization === "undefined" || authorization === null) {
    req.user = null;
    next();
  } else {
    const bearer = authorization.split(' ');
    let token = bearer[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
          console.log('Error during authentication: Invalid signature')
          req.user = null;
      } else {
          req.user = decodedToken;
      }
      next();
    })
  }
};

module.exports = checkAuth