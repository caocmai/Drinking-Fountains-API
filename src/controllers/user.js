const express = require('express');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const router = express.Router();

// SIGN UP at user/signup
router.post('/signup', (req, res) => {
    const user = new User(req.body)
  
    user.save().then(user => {
      const token = jwt.sign({ 
        _id: user._id 
        }, process.env.JWT_SECRET, { 
          expiresIn: "60 days" 
        });
      // res.cookie("jwtToken", token, { maxAge: 900000, httpOnly: true });
      res.json({'jwtToken': token, 'user': user })
    }).catch(err => {
      console.log(err.message);
      return res.status(400).send({ err: err });
    });
  })

  // LOGIN at user/login
router.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // Find this user name
    User.findOne({ username }, "username password")
    .then(user => {
      if (!user) {
        // User not found
        return res.status(401).send({ message: "Wrong Username or Password" });
      }
      // Check the password
      user.comparePassword(password, (err, isMatch) => {
        if (!isMatch) {
            // Password does not match
            return res.status(401).send({ message: "Wrong Username or password" });
        }
        // Create a token
        const token = jwt.sign({ _id: user._id, username: user.username }, process.env.JWT_SECRET, {
            expiresIn: "60 days"
        });
        // Set a cookie and redirect to root
        // res.cookie("jwtToken", token, { maxAge: 900000, httpOnly: true });
        res.json({'jwtToken': token, 'user': user })
      });
    })
    .catch(err => {
      console.log(err);
      res.send('No credentials passed.')
    });
  })

  // LOGOUT
router.get('/logout', (req, res) => {
    res.clearCookie('pToken');
    return res.send({status: 200, message:"Success: Logged out"});
  })


module.exports = router;