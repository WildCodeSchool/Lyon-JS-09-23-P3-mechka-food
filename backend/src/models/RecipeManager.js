const AbstractManager = require("./AbstractManager");

class RecipeManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "recipe" as configuration
    super({ table: "recipe" });
  }

  async readAllRecipes() {
    // Execute the SQL SELECT query to retrieve all items from the "recipe" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of recipes
    return rows;
  }
}

module.exports = RecipeManager;
