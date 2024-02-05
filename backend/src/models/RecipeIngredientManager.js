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

  async delete(recipeId) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    await this.database.query(`delete from ${this.table} where recipe_id=?`, [
      recipeId,
    ]);
  }

  async update(ingredient, recipeId) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `update  ${this.table} set quantity = ?, unit= ? , ingredient_id= ? WHERE ingredient_id = ? and recipe_id = ?`,
      [
        ingredient.quantity,
        ingredient.unit,
        ingredient.id,
        ingredient.id,
        recipeId,
      ]
    );

    // Return the ID of the newly inserted item
    return result;
  }
}

module.exports = RecipeIngredientManager;
