exports.seed = async function(knex) {
  await knex("ingredients").insert([
    { id: 1, name: "Flour" },
    { id: 2, name: "Tomato Sauce" },
    { id: 3, name: "Olive Oil" },
    { id: 4, name: "Salt" },
    { id: 5, name: "Ground Beef" }
  ]);
};
