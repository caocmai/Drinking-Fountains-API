const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
const should = chai.should();
chai.use(chaiHttp);

const agent = chai.request.agent(server);

const User = require("../models/user");

describe("User", function() {

  it("should not be able to login if they have not registered", function(done) {
    agent
      .post("/user/login")
      .send({ username: "wrong username", password: "password" })
      .end(function(err, res) {
        res.should.have.status(401);
        agent.should.not.have.cookie("pToken");
        done();
      });
  });

  Signup
  it("should be able to signup", function(done) {
    User.findOneAndRemove({ username: "testone" }, function() {
      agent
        .post("/user/signup")
        .send({ username: "testone", password: "password" })
        .end(function(err, res) {
          res.should.have.status(200);
          agent.should.have.cookie("pToken");
          done();
        });
    });
  });

  // login
  // it("should be able to login", function(done) {
  //   agent
  //     .post("/user/login")
  //     .send({ username: "testone", password: "password" })
  //     .end(function(err, res) {
  //       res.should.have.status(200);
  //       agent.should.have.cookie("pToken");
  //       done();
  //     });
  // });

  // logout
  it("should be able to logut", function(done) {
    agent.get('/user/logout').end(function(err, res) {
      res.should.have.status(200);
      agent.should.not.have.cookie("nToken");
      done();
    })
  })

  after(function () {
    agent.close()
  });
})