// const chai = require("chai");
// const chaiHttp = require("chai-http");
// const app = require("../server");
// const should = chai.should();
// chai.use(chaiHttp);

// const agent = chai.request.agent(app);
// const assert = chai.assert;

// const User = require("../models/user");

// sampleUser = {
//   username: 'testuser1',
//   password: 'somepassword'
// }

// describe("User", function() {

//   it("should not be able to login if they are not registered", function(done) {
//     agent
//       .post("/user/login")
//       .send({ username: "wrong username", password: "password" })
//       .end(function(err, res) {
//         res.should.have.status(401);
//         agent.should.not.have.cookie("pToken");
//         done();
//       });
//   });

//   // Signup
//   it('should be able to sign up', (done) => {
//     chai.request(app)
//       .post('/user/signup')
//       .send(sampleUser)
//       .then(res => {
//         assert.equal(res.status, 200)
//         assert.exists(res.body.jwtToken)

//         User.find({username: 'testuser1'}).then(result => {
//           assert.equal(result.length, 1)
//         })
//         return done()
//       }).catch(err => {
//         return done(err)
//       })
//   })

//   // Login 
//   it('should be able to log in', (done) => {
//     let user = new User(sampleUser)
//     user.save().then(savedUser => {
//       chai.request(app)
//         .post('/user/login')
//         .send(sampleUser)
//         .then(res => {
//           console.log(res.body)
//           assert.equal(res.status, 200)
//           assert.exists(res.body.jwtToken)
//           return done()
//         }).catch(err => {
//           console.log(err)
//           return done(err)
//         })
//     })
//   })

//   // Logout
//   it("should be able to logut", function(done) {
//     agent.get('/user/logout').end(function(err, res) {
//       res.should.have.status(200);
//       agent.should.not.have.cookie("nToken");
//       done();
//     })
//   })

//   after(function () {
//     agent.close()
//   });
// })