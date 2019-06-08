const express = require("express");
const server = express();
const helmet = require("helmet");

const DishRouter = require("./data/dishes/dishRouter.js");
const RecipeRouter = require("./data/recipes/recipeRouter.js");

server.use(express.json());
server.use(helmet());
server.use("/api/dishes", DishRouter);
server.use("/api/recipes", RecipeRouter);

module.exports = server;
