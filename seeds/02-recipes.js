
exports.seed = function(knex) {
  await knex('recipes').insert([
    {id: 1, name: 'New York Style', dish_id: 1},
    {id: 2, name: 'Thin Crust', dish_id: 1},
    {id: 3, name: 'Broccoli Casserole', dish_id: 2},
    {id: 4, name: 'Texas Chili', dish_id: 3}
  ])
};
