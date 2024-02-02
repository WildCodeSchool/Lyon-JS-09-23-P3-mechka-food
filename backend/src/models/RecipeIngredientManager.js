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

  async update(recipeIngredient, recipeId) {
    // const ingredientId = await this.database.query(
    //   `SELECT ingredient.id FROM ingredient WHERE ingredient.id=?`,
    //   [ingredient.ingredientId]
    // );
    // console.log(ingredientId);
    // console.log(
    //   `UPDATE ${this.table} SET quantity=${recipeIngredient.quantity}, unit=${recipeIngredient.unit},ingredient_id=${recipeIngredient.ingredientId} WHERE ingredient_id=${recipeIngredient.ingredientId} AND recipe_id=${recipeId}`
    // );
    await this.database.query(
      `UPDATE ${this.table} SET quantity=?, unit=?, ingredient_id=? where ${this.table}.id=?`,
      [
        recipeIngredient.quantity,
        recipeIngredient.unit,
        recipeIngredient.ingredientId,
        recipeId,
      ]
    );

    return true;
  }
}

module.exports = RecipeIngredientManager;
