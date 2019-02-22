const router = require("express").Router();
const flightsController = require("../../controllers/flightsController");

// matches with "/api/flight"
// post search and results data to Flight collection
router
  .route("/")
  .get(flightsController.findAllSearches)
  .post(flightsController.createFlight);

// matches with "/api/flight/:id"
router
  .route("/:id")
  .get(flightsController.findById)
  .put(flightsController.updateSearch)
  .delete(flightsController.removeSearch);

// matches with "/api/flight/view/:id"
router.route("/view/:id").get(flightsController.findById);

module.exports = router;
