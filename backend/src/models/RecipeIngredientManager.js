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
    // console.log(
    //   `UPDATE ${this.table} SET quantity=${recipeIngredient.quantity}, unit=${recipeIngredient.unit}, ingredient_id=${recipeIngredient.id}  WHERE recipeIngredient.id=${recipeIngredient.RID} AND recipe_id=${recipeId}`
    // );

    // const IngredientID = await this.database.query(
    //   "SELECT id FROM ingredient Where name = ?"[ingredientid]
    // );
    await this.database.query(
      `UPDATE ${this.table} SET quantity=?, unit=?, ${this.table}.ingredient_id=? WHERE ${this.table}.id=? AND recipe_id=?`,
      [
        recipeIngredient.quantity,
        recipeIngredient.unit,
        recipeIngredient.id,
        recipeIngredient.RID,
        recipeId,
      ]
    );
  }
}

module.exports = RecipeIngredientManager;
