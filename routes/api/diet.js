const axios = require("axios");
const router = require("express").Router();

// post bc receives data
router.post("/calculate", (req, res) => {
  console.log("route triggered");

  const apiKey = "a2d3c6da-4b3a-477c-b8ac-9594c10395b4";
  
  let model = "pets.json";
  let species = req.body.species;
  let breed = req.body.breed;
  let gender = req.body.gender;
  let weight = req.body.weight;
  let origin = req.body.origin; // user input
  let destination = req.body.destination; // user input

  axios.get("http://impact.brighterplanet.com/" + model + "?key=" + apiKey + "&origin_airport=" + origin + "&destination_airport=" + destination)
  .then(response => { console.log(response)})
  .catch(error => { console.log(error)});

  res.end();
});

router.get("/test", (req, res) => {
  res.send("hi");
});

module.exports = router;
