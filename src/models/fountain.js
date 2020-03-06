const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// TODO: Replace this with actual model

const FountainSchema = new Schema({
  city: { type: String },
  zip_code: { type: Number },
  longitude: { type: Number },
  latitude: { type: Number },
  number_of_spouts: { type: Number },
  amenities: [{type: Schema.Types.ObjectId, ref: 'Amenity'}],
})

Fountain = mongoose.model('Fountain', FountainSchema);

module.exports = Fountain;