const tables = require("../tables");

const addRecipe = async (req, res, next) => {
  try {
    const {
      title,
      descriptions,
      instructions,
      userIngredients,
      globalTime,
      numberPersons,
      userCategorieId,
      userId,
    } = req.body;

    const dest = req.file.destination.split("public")[1];
    const imageName = req.file.filename;

    // Post data to table recipe
    const recipeId = await tables.recipe.create({
      title,
      descriptions,
      globalTime,
      numberPersons,
      imageUrl: `${dest}/${imageName}`,
      userId,
      userCategorieId,
    }); // => { id: '1', image: ..., description: '', 'title' }

    // Post data into table instructions (one recipe has multiply instructions)
    const instructionDocs = await Promise.all(
      JSON.parse(instructions).map((instruction) =>
        tables.instruction.create(instruction.step, recipeId)
      )
    ); // => [{id: '1', ...}, {id: '2', ...}, {id: '3'}]

    // Post data into table recipeIngredient (one recipe has multiply ingredients)
    const recipeIngredientDocs = await Promise.all(
      JSON.parse(userIngredients).map((ingredient) =>
        tables.recipeIngredient.create(ingredient, recipeId)
      )
    ); // => [{id: '1', ...}, {id: '2', ...}, {id: '3'}]

    const result = {
      recipeId,
      instructionDocs,
      recipeIngredientDocs,
    };
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addRecipe,
};
