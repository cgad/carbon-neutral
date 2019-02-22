const db = require("../models");

module.exports = {
  // get all previously searched (model searched, date searched)
  allSearches: function(req, res) {
    db.Footprint.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  searchesByModel: function(req, res) {
    // to find by specific model searched like auto, diet...
  },
  findById: function(req, res) {
    db.Footprint.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Footprint.create(req.body).then(dbModel =>
      res.json(dbModel).catch(err => res.status(422).json(err))
    );
  },
  remove: function(req, res) {
    db.Footprint.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
