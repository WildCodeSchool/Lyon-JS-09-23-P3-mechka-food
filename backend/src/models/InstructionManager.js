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

  async create(instruction, recipeId) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `insert into ${this.table} (step, recipeStep_id) values (?, ?)`,
      [instruction, recipeId]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  async update(instruction, recipeId) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `update ${this.table} set step = ? where id = ? and recipeStep_id = ?`,
      [instruction.step, instruction.id, recipeId]
    );

    // Return the ID of the newly inserted item
    return result;
  }
}

module.exports = InstructionManager;
