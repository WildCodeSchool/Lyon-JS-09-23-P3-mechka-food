const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "recipe" as configuration
    super({ table: "category" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "recipe" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of recipes
    return rows;
  }

  //   async readById(id) {
  //     // Execute the SQL SELECT query to retrieve a specific item by its ID
  //     const [rows] = await this.database.query(
  //       `select * from ${this.table} where id = ?`,
  //       [id]
  //     );

  //     // Return the first row of the result, which represents the item
  //     return rows[0];
  //   }
}

module.exports = CategoryManager;
