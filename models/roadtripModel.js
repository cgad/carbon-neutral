const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roadtripSchema = new Schema({
    date: { type: Date, default: Date.now },
    origin: { type: String, required: true },
    destination: { type: String, required: true },
    year: Number,
    make: String,
    model: String,
    cars_off_road_for_year: mongoose.Types.Decimal128,
    cars_off_road_for_day: mongoose.Types.Decimal128,
    vegan_meals: mongoose.Types.Decimal128,
    years_vegan: mongoose.Types.Decimal128,
    days_vegan: mongoose.Types.Decimal128,
    barrels_petroleum: mongoose.Types.Decimal128,
    canisters_bbq_propane: mongoose.Types.Decimal128,
    homes_lowered_therm_2_deg_winter: mongoose.Types.Decimal128,
    homes_raised_therm_3_deg_summer: mongoose.Types.Decimal128,
    lightbulbs_for_year: mongoose.Types.Decimal128,
    lightbulbs_for_day: mongoose.Types.Decimal128,
    recycled_bags_trash: mongoose.Types.Decimal128
});

const Roadtrip = mongoose.model("Roadtrip", roadtripSchema);

module.exports = Roadtrip;
