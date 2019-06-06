exports.seed = async function(knex) {
  await knex("recipes_ingredients").insert([
    { id: 1, recipe_id: 1, ingredient_id: 1, unit: "cup", quantity: 1 },
    { id: 2, recipe_id: 1, ingredient_id: 2, unit: "cup", quantity: 1 },
    { id: 3, recipe_id: 1, ingredient_id: 3, unit: "tablespoon", quantity: 2 },
    { id: 4, recipe_id: 1, ingredient_id: 4, unit: "teaspoon", quantity: 1 },
    { id: 5, recipe_id: 2, ingredient_id: 4, unit: "teaspoon", quantity: 1 },
    { id: 6, recipe_id: 2, ingredient_id: 5, unit: "pounds", quantity: 2 }
  ]);
};
