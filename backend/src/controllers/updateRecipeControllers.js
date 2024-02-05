const tables = require("../tables");

const updateRecipe = async (req, res, next) => {
  try {
    const {
      title,
      descriptions,
      instructions,
      userIngredients,
      globalTime,
      numberPersons,
    } = req.body;
    const recipeId = req.params.id;

    // uPDATE data to table recipe
    await tables.recipe.update({
      title,
      descriptions,
      globalTime,
      numberPersons,
      recipeId,
    }); // => { id: '1', image: ..., description: '', 'title' } OK

    // uPDATE data into table instructions (one recipe has multiply instructions)
    await Promise.all(
      instructions.map((element) =>
        tables.instruction.update(element, recipeId)
      )
    ); // => [{id: '1', ...}, {id: '2', ...}, {id: '3'}]

    // uPDATE data into table recipeIngredient (one recipe has multiply ingredients)
    await Promise.all(
      userIngredients.map((ingredient) =>
        tables.recipeIngredient.update(ingredient, recipeId)
      )
    );
    // => [{id: '1', ...}, {id: '2', ...}, {id: '3'}]

    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  updateRecipe,
};
