exports.seed = function (knex) {
  const recipe = [
    {
      recipe_name: "PBJ",
    },
  ];

  return knex("recipes")
    .insert(recipe)
    .then(() => console.log("\n== Seed data for recipe table added. ==\n"));
};
