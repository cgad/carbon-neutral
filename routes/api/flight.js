const axios = require("axios");
const router = require("express").Router();
const db = require("../../models");
const flightController = require("../../controllers/flightsController");

// matches with "/api/flight/calculate"
// post search and results data to Flight collection
router.post("/calculate", (req, res) => {
  console.log(req);
  console.log("route triggered");

  const keyString = "?key=a2d3c6da-4b3a-477c-b8ac-9594c10395b4";

  let model = "flights.json";
  let origin = "&origin_airport=" + req.body.origin;
  let destination = "&destination_airport=" + req.body.destination;
  let airline;

  // the API supports certain airlines and not others
  if (req.body.airline == "other") {
    airline = "";
  } else {
    airline = "&airline=" + req.body.airline;
  };

  console.log("http://impact.brighterplanet.com/" + model + keyString + origin + destination + airline);

  axios.get("http://impact.brighterplanet.com/" + model + keyString + origin + destination + airline)
  .then(result => {
    // formulate object to send to db here
    console.log("ASDFASDFASF ", result.data.decisions.carbon);
    var newFlight = {
      origin: req.body.origin,
      destination: req.body.destination,
      airline: req.body.airline,
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
    db.Flight.create(newFlight)
      .then(newFlight => {
        console.log(newFlight);
        res.end();
      })
      .catch(err => {console.log(err)});

    console.log('OVER HERE ', result.data)
  
  })

  .catch(error => {console.log(error)});
});

// to view most recent (current) flight search
// query flight collection and return the object
router.route("/calculate")
  .get(flightController.findLatest);

module.exports = router;
