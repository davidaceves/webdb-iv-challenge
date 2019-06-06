const express = require("express");
const router = express.Router();
const knex = require("knex");

const knexConfig = require("../../knexfile.js");
const db = knex(knexConfig.development);

// Get dishes
router.get("/", (req, res) => {
  db("dishes")
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Add Dish

router.post("/", (req, res) => {
  db.insert(req.body, ["id"])
    .into("dishes")
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
