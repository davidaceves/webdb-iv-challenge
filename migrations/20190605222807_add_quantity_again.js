exports.up = function(knex) {
  return knex.schema.hasTable("recipes_ingredients").then(function(exists) {
    if (exists) {
      return knex.schema.table("recipes_ingredients", function(tbl) {
        tbl.float("quantity");
        tbl.string("unit");
      });
    }
  });
};

exports.down = function(knex) {
  return knex.schema.table("recipes_ingredients", function(tbl) {
    tbl.dropColumn("quantity");
    tbl.dropColumn("unit");
  });
};
