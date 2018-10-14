const router = require("express").Router();
const flightController = require("../../controllers/flightsController");

// matches with "/api/flight/calculate"
// post search and results data to Flight collection
router.route("/calculate")
  .get(flightController.findAllSearches)
  .post(flightController.createFlight);

module.exports = router;
