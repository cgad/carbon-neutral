const axios = require("axios");
const router = require("express").Router();
const db = require("../../models");
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

router.route("/view/:id")
  .get(flightsController.findById)

module.exports = router;
