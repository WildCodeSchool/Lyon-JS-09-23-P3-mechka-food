const AbstractManager = require("./AbstractManager");

class InstructionManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "recipe" as configuration
    super({ table: "instruction" });
  }

  async readById(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `SELECT instruction.id, step FROM ${this.table}
        join recipe on recipe.id = ${this.table}.recipeStep_id
        where recipe.id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows;
  }
}

module.exports = InstructionManager;
