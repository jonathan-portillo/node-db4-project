exports.seed = function (knex) {
  const instructions = [
    {
      step_number: "1",
      description: "Put all the stuff together and voila sandwich",
      recipe_id: "1",
    },
  ];

  return knex("instruction")
    .insert(instructions)
    .then(() => console.log("\n== Seed data for recipe table added. ==\n"));
};
