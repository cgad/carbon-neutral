const axios = require("axios");
const router = require("express").Router();

// for flight only, to start
// "/calulate" instead?
// post bc receives data
router.post("/flight/calculate", (req, res) => {
  console.log("route triggered");
  
  const apiKey = "a2d3c6da-4b3a-477c-b8ac-9594c10395b4";
  let model = "flights.json";
  let origin = "FLL"; // user input... how can i get state here?
  let destination = "DEN"; // ditto

  axios.get("http://impact.brighterplanet.com/" + model + "?key=" + apiKey + "&origin_airport=" + origin + "&destination_airport=" + destination)
  .then(response => { console.log(response)})
  .catch(error => { console.log(error)});

  res.end();
});

router.get("/test", (req, res) => {
  res.send("hi");
});

module.exports = router;
