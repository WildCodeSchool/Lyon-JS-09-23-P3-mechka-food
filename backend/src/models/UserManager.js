const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "user" as configuration
    super({ table: "user" });
  }

  // The C of CRUD - Create operation

  async create(user) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const [result] = await this.database.query(
      `insert into ${this.table} (username, firstname, lastname, email, hashedPassword) values (?, ?, ?, ?, ?)`,
      [
        user.username,
        user.firstname,
        user.lastname,
        user.email,
        user.hashedPassword,
      ]
    );

    // Return the ID of the newly inserted user
    return result.insertId;
  }

  async readByEmailWithPassword(email) {
    // Execute the SQL SELECT query to retrieve a specific user by its email
    const [rows] = await this.database.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }

  async readByEmail(email) {
    // Execute the SQL SELECT query to retrieve a specific user by its email
    const [rows] = await this.database.query(
      `select email from ${this.table} where email = ?`,
      [email]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }
}

module.exports = UserManager;
