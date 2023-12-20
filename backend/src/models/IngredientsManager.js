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
      `select ${this.table}.name, ri.quantity, ri.unit from recipe as r
        join recipe_ingredient as ri on r.id = ri.recipe_id
        join ${this.table} on ${this.table}.id = ri.ingredient_id
        where r.id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows;
  }
}

module.exports = IngredientsManager;
