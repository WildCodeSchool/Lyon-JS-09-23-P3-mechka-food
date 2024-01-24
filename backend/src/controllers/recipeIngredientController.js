const tables = require("../tables");

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const recipeIng = req.body;

  try {
    // Insert the item into the database
    const insertId = await tables.recipeIngredient.create(recipeIng);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  add,
};
