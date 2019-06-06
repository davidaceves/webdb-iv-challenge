exports.seed = async function(knex) {
  await knex("dishes").insert([
    { id: 1, name: "Pizza" },
    { id: 2, name: "Chili" }
  ]);
};
