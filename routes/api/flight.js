const axios = require("axios");
const router = require("express").Router();

// post bc receives data
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
  .then(res => {console.log('OVER HERE ', res.data)})
  .catch(error => {console.log(error)});

  res.end();
});

router.get("/test", (req, res) => {
  res.send("hi");
});

module.exports = router;
