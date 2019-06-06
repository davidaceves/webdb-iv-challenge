exports.up = function(knex) {
  return knex.schema.hasTable("ingredients").then(function(exists) {
    if (exists) {
      return knex.schema.table("ingredients", function(tbl) {
        tbl.float("quantity");
      });
    }
  });
};

exports.down = function(knex) {
  return knex.schema.table("ingredients", function(tbl) {
    tbl.dropColumn("quantity");
  });
};
