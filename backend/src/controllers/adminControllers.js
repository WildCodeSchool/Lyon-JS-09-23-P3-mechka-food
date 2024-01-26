// Import access to database tables
const tables = require("../tables");

const deleteRecipe = async (req, res, next) => {
  // Extract the user data from the request body
  const recipeId = req.params.id;

  try {
    // Insert the user into the database

    const deleteInstruction = await tables.instruction.delete(recipeId);
    res.status(201).json(deleteInstruction);

    const deleteRecipeIngredient = await tables.recipeIngredient.delete(
      recipeId
    );
    res.status(201).json(deleteRecipeIngredient);

    const deleteRecipeTable = await tables.recipe.delete(recipeId);
    res.status(201).json(deleteRecipeTable);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted user
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const updateRecipe = async (req, res, next) => {
  // Extract the user data from the request body
  const recipeId = req.params.id;
  const dataBody = req.body;

  try {
    // Insert the user into the database

    const updateRecipeTable = await tables.recipe.update(dataBody, recipeId);
    res.status(200).json(updateRecipeTable);

    const updateInstruction = await tables.instruction.update(
      dataBody,
      recipeId
    );
    res.status(201).json(updateInstruction);

    const updateRecipeIngredient = await tables.recipeIngredient.update(
      dataBody,
      recipeId
    );
    res.status(201).json(updateRecipeIngredient);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted user
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  deleteRecipe,
  updateRecipe,
};
