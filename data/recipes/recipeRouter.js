const express = require("express");
const router = express.Router();
const knex = require("knex");

const knexConfig = require("../../knexfile.js");
const db = knex(knexConfig.development);

router.get("/", (req, res) => {
  db.select("dishes.name AS dish", "recipes.name AS recipe")
    .from("dishes", "recipes")
    .innerJoin("recipes", "recipes.dish_id", "dishes.id")
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
