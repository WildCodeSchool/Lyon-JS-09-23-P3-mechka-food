const AbstractManager = require("./AbstractManager");

class RecipeIngredientManager extends AbstractManager {
  constructor() {
    super({ table: "recipeIngredient" });
  }

  async read(recipeId) {
    const [rows] = await this.database.query(
      `
    SELECT ri.id, ri.quantity, ri.unit, ri.ingredient_id, ri.recipe_id, ing.name FROM ${this.table} AS ri
    INNER JOIN ingredient AS ing ON ing.id = ri.ingredient_id 
    WHERE ri.recipe_id = ?`,
      [recipeId]
    );
    return rows;
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
      `update  ${this.table} set quantity = ?, unit= ? , ingredient_id= ? WHERE id = ? and recipe_id = ?`,
      [
        ingredient.quantity,
        ingredient.unit,
        ingredient.ingredient_id,
        ingredient.id,
        recipeId,
      ]
    );

    // Return the ID of the newly inserted item
    return result;
  }
}

module.exports = RecipeIngredientManager;
