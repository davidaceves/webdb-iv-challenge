const express = require("express");
const router = express.Router();
const knex = require("knex");

const knexConfig = require("../../knexfile.js");
const db = knex(knexConfig.development);

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

module.exports = router;
