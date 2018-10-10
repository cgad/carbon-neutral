const axios = require("axios");
const router = require("express").Router();
const footprintsController = require("../../controllers/footprintsController");

// Matches with "/api/searched"
router.route("/")
  .get(footprintsController.allSearches)
  .post(footprintsController.create);

// Matches with "/api/searched/:id"
router
  .route("/search/:id")
  .get(footprintsController.findById)
  .delete(footprintsController.remove);

// for flight only, to start
// "/calulate" instead?
// post bc receives data
router.post("/calculate", (req, res) => {
  console.log("route triggered");
  const apiKey = "a2d3c6da-4b3a-477c-b8ac-9594c10395b4";
  let model = "flights.json"; // eventually will be user input
  let origin = "FLL"; // user input
  let destination = "DEN"; // user input

  axios.get("http://impact.brighterplanet.com/" + model + "?key=" + apiKey + "&origin_airport=" + origin + "&destination_airport=" + destination)
  // null don't filter anything, indent 2
  .then(response => { console.log(response)})
  .catch(error => { console.log(error)});

  res.end();
});

router.get("/test", (req, res) => {
  res.send("hi");
});

module.exports = router;
