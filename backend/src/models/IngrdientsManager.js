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
      `select ${this.table}.name, recipe_ingredient.quantity, recipe_ingredient.unit from recipe
        join recipe_ingredient on recipe.id = recipe_ingredient.recipe_id
        join ${this.table} on ${this.table}.id = recipe_ingredient.ingredient_id
        where recipe.id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows;
  }
}

module.exports = IngredientsManager;

// select ingredient.name, recipe_ingredient.quantity, recipe_ingredient.unit from recipe
// join recipe_ingredient on recipe.id = recipe_ingredient.recipe_id
// join ingredient on ingredient.id = recipe_ingredient.ingredient_id
// where recipe.id = 1;
