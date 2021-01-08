exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("recipe_name", 128).notNullable().unique();
    })
    .createTable("instructions", (tbl) => {
      tbl.increments("id");
      tbl.string("step_number", 20).notNullable();
      tbl.string("description", 500).notNullable();
      tbl
        .integer("recipe_id")
        .references("recipes.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.string("ingredient_name", 128).notNullable();
      tbl.string("quantity", 128).notNullable();
      tbl
        .integer("recipe_id")
        .references("recipes.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("ingredients")
    .dropTableIfExists("instructions")
    .dropTableIfExists("recipes");
};
