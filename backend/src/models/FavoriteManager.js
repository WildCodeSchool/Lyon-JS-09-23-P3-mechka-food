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

  async delete(userId, recipeId) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const [result] = await this.database.query(
      `delete from ${this.table} where userFId=? and recipeFid=?`,
      [userId, recipeId]
    );

    // Return the ID of the newly inserted user
    return result.insertId;
  }
}

module.exports = UserManager;
