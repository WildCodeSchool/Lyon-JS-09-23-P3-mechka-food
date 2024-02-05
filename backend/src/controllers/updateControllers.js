const tables = require("../tables");

const edit = async (req, res, next) => {
  try {
    const recipeId = req.params.id;

    const { recipe, recipeInstructions, recipeIngredients } = req.body;

    // Update data to table recipe
    await tables.recipe.update(recipe);

    await Promise.all(
      recipeInstructions.map((instruction) =>
        tables.instruction.update(instruction, recipeId)
      )
    );

    await Promise.all(
      recipeIngredients.map((ingredient) =>
        tables.recipeIngredient.update(ingredient, recipeId)
      )
    );

    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  edit,
};
