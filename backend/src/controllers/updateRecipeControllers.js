const tables = require("../tables");

const updateRecipe = async (req, res, next) => {
  try {
    const {
      title,
      descriptions,
      instruction,
      recipeIngredient,
      globalTime,
      numberPersons,
      imageUrl,
    } = req.body;

    const recipeId = req.params.id;

    // Post data to table recipe
    await tables.recipe.update({
      title,
      descriptions,
      globalTime,
      numberPersons,
      imageUrl,
      recipeId,
    }); // => { id: '1', image: ..., description: '', 'title' } OK

    // Post data into table instructions (one recipe has multiply instructions)
    await Promise.all(
      instruction.map((instructions) =>
        tables.instruction.update(
          instructions.step,
          instructions.INid,
          recipeId
        )
      )
    ); // => [{id: '1', ...}, {id: '2', ...}, {id: '3'}]

    // Post data into table recipeIngredient (one recipe has multiply ingredients)
    await Promise.all(
      recipeIngredient.map((recipeIngredients) =>
        tables.recipeIngredient.update(
          recipeIngredients.quantity,
          recipeIngredients.unit,
          recipeIngredients.RIid
        )
      )
    ); // => [{id: '1', ...}, {id: '2', ...}, {id: '3'}]

    // const result = {
    //   recipe,
    //   instructionUpdate,
    //   recipeIngredientUpdate,
    // };
    res.status(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  updateRecipe,
};
