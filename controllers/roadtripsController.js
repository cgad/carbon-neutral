const db = require("../models");
const axios = require("axios");

module.exports = {
  findAllSearches: function(req, res) {
    db.Roadtrip
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Roadtrip
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createTrip: function(req, res) {
    const keyString = "?key=a2d3c6da-4b3a-477c-b8ac-9594c10395b4";

    let model = "automobile_trips.json";
    let origin = "&origin=" + req.body.origin;
    let destination = "&destination=" + req.body.destination;
    let make;

    // the API supports certain airlines and not others
    if (req.body.makle == "other") {
      make = "";
    } else {
      make = "&make=" + req.body.make;
    };

    axios.get("http://impact.brighterplanet.com/" + model + keyString + origin + destination + airline)
    .then(result => {
      // formulate object to send to db here
      var newTrip = {
        origin: req.body.origin,
        destination: req.body.destination,
        make: req.body.make,
        scope: result.data.scope,
        cars_off_road_for_year: result.data.equivalents.cars_off_the_road_for_a_year,
        cars_off_road_for_day: result.data.equivalents.cars_off_the_road_for_a_day,
        vegan_meals: result.data.equivalents.vegan_meals_instead_of_non_vegan_ones,
        years_vegan: result.data.equivalents.years_of_veganism,
        days_vegan: result.data.equivalents.days_of_veganism,
        barrels_petroleum: result.data.equivalents.barrels_of_petroleum,
        canisters_bbq_propane: result.data.equivalents.canisters_of_bbq_propane,
        homes_lowered_therm_2_deg_winter: result.data.equivalents.homes_with_lowered_thermostat_2_degrees_for_a_winter,
        homes_raised_therm_3_deg_summer: result.data.equivalents.homes_with_raised_thermostat_3_degrees_for_a_summer,
        lightbulbs_for_year: result.data.equivalents.lightbulbs_for_a_year,
        lightbulbs_for_day: result.data.equivalents.lightbulbs_for_a_day,
        recycled_bags_trash: result.data.equivalents.recycled_bags_of_trash
      }
      db.Roadtrip.create(newFlight)
        .then(newFlight => {
          console.log(newFlight);
          res.end();
        })
        .catch(err => {console.log(err)});
    });
  },
  updateSearch: function(req, res) {
    db.Roadtrip
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeSearch: function(req, res) {
    db.Roadtrip
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}
