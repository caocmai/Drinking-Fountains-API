const app = require("../server.js");
const mongoose = require('mongoose');
const chai = require('chai'); // eslint-disable-line import/newline-after-import
const chaiHttp = require("chai-http");
const jwt = require('jsonwebtoken')
const assert = chai.assert

const User = require('../models/user')
const Fountain = require('../models/fountain')

chai.config.includeStack = true;
chai.should()

chai.use(chaiHttp);

const sampleFountain = {
  city: 'Houston',
  zip_code: 43243,
  longitude: 23.3432,
  latitude: 89.2332,
  number_of_spouts: 2
}


/**
 * root level hooks
 */
after((done) => {
  // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
  mongoose.models = {};
  mongoose.modelSchemas = {};
  mongoose.connection.close();
  done();
});

// describe('## Index', () => {
//   // TODO: Implement tests.
// });

describe('Queen API endpoints', () => {
  beforeEach((done) => {
    User.create({username: 'sampleuser', password: 'samplepassword'})
    done()
  })

  afterEach((done) => {
    User.findOneAndRemove({username: 'test_user1'}).then(() => {
      Fountain.findOneAndRemove({city: 'Houston'}).then(() => done())
    })
  })

  // Test GET All Queens
  it('should show all fountains', (done) => {
    let fountain = new Fountain(sampleFountain);
    fountain.save().then(() => {
      chai.request(app)
        .get('/api/fountain/all')
        .set('jwtToken', jwt.sign({ username: 'sampleuser' }, process.env.JWT_SECRET))
        .end((err, res) => {
          if (err) {
            return done(err)
          }

          assert.equal(res.status, 200)
          assert.isArray(res.body)
          return done()
        })
    })
  })

  it('should show a specific fountain', (done) => {
    let fountain = new Fountain(sampleFountain);
    fountain.save().then((fountainObj) => {
      chai.request(app)
        .get(`/api/fountain/${fountainObj._id}`)
        .set('authorization', 'Bearer ' + process.env.TOKEN)
        // .set('jwtToken', jwt.sign({ username: 'test_user1' }, process.env.JWT_SECRET))
        .end((err, res) => {
          if (err) return done(err);
          assert.equal(res.status, 200)
          assert.equal(res.body.city, 'Houston')
          assert.equal(res.body.zip_code, 43243)
          return done()
        })
    })
  })



})