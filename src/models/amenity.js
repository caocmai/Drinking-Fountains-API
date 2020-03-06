const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AmenitySchema = new Schema ({
    amentity: { type: String },
    quantity: { type: Number },
    more_info: { type: String },
    fountain: { type: mongoose.Schema.Types.ObjectId, ref: "Fountain" }
})

module.exports = mongoose.model("Amenity", AmenitySchema);