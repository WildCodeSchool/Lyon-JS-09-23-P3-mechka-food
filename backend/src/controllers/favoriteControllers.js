// Import access to database tables
const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const favorites = await tables.favorite.readAllFavorites();

    // Respond with the items in JSON format
    res.json(favorites);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const readById = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const favorites = await tables.favorite.readById(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (favorites.length === 0) {
      res.json([]);
    } else {
      res.json(favorites);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the user data from the request body
  const { userId, recipeId } = req.body;
  try {
    // Insert the user into the database

    const result = await tables.favorite.create(userId, recipeId);
    res.status(201).json(result);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted user
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const deleteFavorite = async (req, res, next) => {
  // Extract the user data from the request body
  const { userId, recipeId } = req.body;

  try {
    // Insert the user into the database

    const result = await tables.favorite.delete(userId, recipeId);
    res.status(201).json(result);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted user
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  add,
  deleteFavorite,
  readById,
};
