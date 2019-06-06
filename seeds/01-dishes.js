
exports.seed = function(knex) {
  await knex('dishes').insert([
    {id: 1, name:'Pizza'},
    {id: 2, name: 'Casserole'},
    {id: 3, name: 'Chili' }
  ])
};
