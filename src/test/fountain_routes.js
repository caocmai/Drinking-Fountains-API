// const app = require("../server.js");
// const mongoose = require('mongoose');
// const chai = require('chai'); // eslint-disable-line import/newline-after-import
// const chaiHttp = require("chai-http");
// const expect = chai.expect;
// const jwt = require('jsonwebtoken')
// const assert = chai.assert

// const User = require('../models/user')
// const Fountain = require('../models/fountain')

// chai.config.includeStack = true;

// chai.should()
// chai.use(chaiHttp);


// /**
//  * root level hooks
//  */
// after((done) => {
//   // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
//   mongoose.models = {};
//   mongoose.modelSchemas = {};
//   mongoose.connection.close();
//   done();
// });

// describe('Fountains', () => {
//   // TODO: Implement more tests.

//   it('should load homepage', () => {
//     chai.request(app)
//       .get('/api/fountain/all')
//       .end((err, res) => {
//         if (err) {
//           return done(err);
//         }
//         res.status.should.be.equal(200);
//         return done();
//       })
//   })

//   it('should load have correct error message ', () => {
//     chai.request(app)
//       .get('/api/fountain/')
      
//       .end((err, res) => {
//         if (err) {
//           return done(err);
//         }
//         // res.status.should.be.equal(200);
//         assert.equal(res.body.name, 'None route found.')
//         return done();
//       })
//   });

//   it('should load have correct error message ', () => {
//     chai.request(app)
//       .get('/about/')
//       .end((err, res) => {
//         if (err) {
//           return done(err);
//         }
//         // res.status.should.be.equal(200);
//         assert.equal(res.body.name, 'This is an API to find/add drinking fountains')
//         return done();
//       })
//   });

//   it('returns a list of fountains', function(done) {
//     chai.request(app)
//       .get('/api/fountain/all')
//         // .expect(200)
//         .end(function(err, res) {
//             expect(res.body.champs).to.be.assert(Array);
//             // console.log(res.body)
//             // expect(res.body).should.have.property('champs');
//             done(err);
//         });
//   });

// })