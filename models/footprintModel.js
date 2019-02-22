const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const footprintSchema = new Schema({
  // impact model chosen from API
  // http://impact.brighterplanet.com/models
  model: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Footprint = mongoose.model("Footprint", footprintSchema);

module.exports = Footprint;
