const router = require("express").Router();
const flightRoutes = require("./flight");
const petRoutes = require("./pet");
const roadtripRoutes = require("./roadtrip");

router.use("/flight", flightRoutes);
router.use("/pet", petRoutes);
router.use("/roadtrip", roadtripRoutes);

module.exports = router;
