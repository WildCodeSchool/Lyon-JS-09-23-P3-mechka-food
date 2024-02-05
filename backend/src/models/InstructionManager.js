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
    const [result] = await this.database.query(
      `insert into ${this.table} (step, recipeStep_id) values (?, ?)`,
      [instruction, recipeId]
    );

    return result.insertId;
  }

  async delete(recipeId) {
    await this.database.query(
      `delete from ${this.table} where recipeStep_id=?`,
      [recipeId]
    );
  }

  async update(instruction, recipeId) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET step=? WHERE id=? and recipeStep_id=?`,
      [instruction.step, instruction.id, recipeId]
    );

    return result;
  }
}

module.exports = InstructionManager;
