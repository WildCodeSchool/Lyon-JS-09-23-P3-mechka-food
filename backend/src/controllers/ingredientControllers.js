const tables = require("../tables");

const readById = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const ingredients = await tables.ingredient.readById(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (ingredients == null) {
      res.sendStatus(404);
    } else {
      res.json(ingredients);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const items = await tables.ingredient.readAll();

    // Respond with the items in JSON format
    res.json(items);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  readById,
  browse,
};
