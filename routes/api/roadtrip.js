const axios = require("axios");
const router = require("express").Router();
const db = require("../../models");
const roadtripsController = require("../../controllers/roadtripsController");

// matches with "/api/roadtrip"
// post search and results data to Flight collection
router.route("/")
  .get()
  .post();

// matches with "/api/roadtrip/:id"
router.route("/:id")
  .get()
  .put()
  .delete();

// matches with "/api/roadtrip/view/:id"
router.route("/view/:id")
  .get()

module.exports = router;
