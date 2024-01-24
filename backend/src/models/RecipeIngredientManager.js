const AbstractManager = require("./AbstractManager");

class RecipeIngredientManager extends AbstractManager {
  constructor() {
    super({ table: "recipeIngredient" });
  }

  async create(ingredient, recipeId) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `insert into ${this.table} (quantity, unit, ingredient_id,recipe_id) values (?, ?, ?, ?)`,
      [ingredient.quantity, ingredient.unit, ingredient.id, recipeId]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }
}

module.exports = RecipeIngredientManager;
