const router = require("express").Router();
const flightsController = require("../../controllers/flightsController");

// matches with "/api/flight/calculate"
// post search and results data to Flight collection
router.route("/calculate")
  .get(flightsController.findAllSearches)
  .post(flightsController.createFlight);

// matches with "/api/flight/calculate/:id"
router.route("/calculate/:id")
  .get(flightsController.findById)
  .put(flightsController.updateSearch)
  .delete(flightsController.removeSearch);

module.exports = router;
