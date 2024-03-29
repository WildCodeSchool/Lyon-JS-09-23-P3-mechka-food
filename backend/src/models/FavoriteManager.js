const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "user" as configuration
    super({ table: "favorite" });
  }

  // The C of CRUD - Create operation

  async create(userId, recipeId) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const [result] = await this.database.query(
      `insert into ${this.table} (userFid, recipeFid) values (?, ?)`,
      [userId, recipeId]
    );

    // Return the ID of the newly inserted user
    return result.insertId;
  }

  async readAllFavorites() {
    // Execute the SQL SELECT query to retrieve all items from the "recipe" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of recipes
    return rows;
  }

  async readById(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where recipeFid = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows;
  }

  async delete(userId, recipeId) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const [result] = await this.database.query(
      `delete from ${this.table} where userFid=? and recipeFid=?`,
      [userId, recipeId]
    );

    // Return the ID of the newly inserted user
    return result;
  }
}

module.exports = UserManager;
