const db = require("./data/db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

function getRecipes() {
  return db("recipes").select("id", "recipe_name").orderBy("id");
}

function getShoppingList(id) {
  return db("ingredients as i")
    .join("recipes as r ", "r.id", "i.recipe_id")
    .where({ "i.recipe_id": id })
    .select("i.id", "i.ingredient_name", "r.recipe_name", "i.recipe_id");
}

function getInstructions(id) {
  return db("instructions as i")
    .joing("recipes as r", "r.id", "i.recipe_id")
    .where({ "id.recipe_id": id })
    .select("r.recipes_id", "r.recipe_name", "i.step_number", "i.description");
}
