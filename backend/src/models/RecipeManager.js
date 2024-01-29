const AbstractManager = require("./AbstractManager");

class RecipeManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "recipe" as configuration
    super({ table: "recipe" });
  }

  // The C of CRUD - Create operation
  async create(recipe) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, descriptions, global_time, number_persons, image_url, category_id) values (?, ?, ?, ?, ?, ?)`,
      [
        recipe.title,
        recipe.descriptions,
        recipe.globalTime,
        recipe.numberPersons,
        recipe.imageUrl,
        recipe.userCategorieId,
      ]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  async readAllRecipes() {
    // Execute the SQL SELECT query to retrieve all items from the "recipe" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of recipes
    return rows;
  }

  async readById(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }
}

module.exports = RecipeManager;
