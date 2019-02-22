const router = require("express").Router();
const roadtripsController = require("../../controllers/roadtripsController");

// matches with "/api/roadtrip"
// post search and results data to Flight collection
router
  .route("/")
  .get(roadtripsController.findAllSearches)
  .post(roadtripsController.createTrip);

// matches with "/api/roadtrip/:id"
router
  .route("/:id")
  .get(roadtripsController.findById)
  .put(roadtripsController.updateSearch)
  .delete(roadtripsController.removeSearch);

// matches with "/api/roadtrip/view/:id"
router.route("/view/:id").get(roadtripsController.findById);

module.exports = router;
