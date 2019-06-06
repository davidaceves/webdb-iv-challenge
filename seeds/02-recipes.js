exports.seed = async function(knex) {
  await knex("recipes").insert([
    { id: 1, name: "New York Style", dish_id: 1 },
    { id: 2, name: "Texas Chili", dish_id: 2 }
  ]);
};
