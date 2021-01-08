exports.seed = function (knex) {
  const ingredients = [
    {
      ingredient: "sliced bread",
      quantity: "1",
      recipe_id: "1",
    },
    {
      ingredient: "jar of peanut butter",
      quantity: "1",
      recipe_id: "1",
    },
    {
      ingredient: "jar of jelly",
      quantity: "1",
      recipe_id: "1",
    },
  ];

  return knex("ingredients")
    .insert(ingredients)
    .then(() => console.log("\n== Seed data for recipe table added. ==\n"));
};
