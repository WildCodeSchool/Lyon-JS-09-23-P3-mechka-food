const AbstractManager = require("./AbstractManager");

class CommentManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "user" as configuration
    super({ table: "comment" });
  }

  // The C of CRUD - Create operation
  async readCommentsByRecipeId(id) {
    // Execute the SQL SELECT query to retrieve all items from the "comment" table
    const [rows] = await this.database.query(
      `select comment.id as id, comment from ${this.table} join recipe on CommentRecipeId = recipe.id
    where recipe.id = ? `,
      [id]
    );

    return rows;
  }

  async create(comment) {
    // Execute the SQL INSERT query to add a new comment to the "comment" table
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (comment, commentUserId, CommentRecipeId) VALUES (?, ?, ?)`,
      [comment.comment, comment.commentUserId, comment.CommentRecipeId]
    );

    // Return the ID of the newly inserted comment
    return result.insertId;
  }
}

module.exports = CommentManager;
