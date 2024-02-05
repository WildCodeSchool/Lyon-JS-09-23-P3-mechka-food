const AbstractManager = require("./AbstractManager");

class IngredientsManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "recipe" as configuration
    super({ table: "ingredient" });
  }

  async readById(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select recipeIngredient.id as RID, ${this.table}.name, recipeIngredient.quantity, recipeIngredient.unit, ingredient.id from recipe
        join recipeIngredient on recipe.id = recipeIngredient.recipe_id
        join ${this.table} on ${this.table}.id = recipeIngredient.ingredient_id
        where recipe.id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }
}

module.exports = IngredientsManager;
