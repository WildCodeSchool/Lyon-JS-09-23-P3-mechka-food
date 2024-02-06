const recipeMiddleware = async (req, res, next) => {
  try {
    const { recipe, recipeInstructions, recipeIngredients } = req.body;

    // console.log(recipeIngredients);
    const errors = [];
    // FOR TITLE
    if (recipe.title === undefined) {
      errors.push({ field: "title", message: "Ce champ est requis." });
    } else if (recipe.title.length > 50) {
      errors.push({
        field: "title",
        message: "Le nombre maximum de caractères est de 50.",
      });
    }
    // FOR DESCRIPTIONS
    if (recipe.descriptions === undefined) {
      errors.push({ field: "descriptions", message: "Ce champ est requis." });
    } else if (recipe.descriptions.length > 255) {
      errors.push({
        field: "descriptions",
        message: "Le nombre maximum de caractères est de 255.",
      });
    }
    // FOR INSTRUCTIONS
    recipeInstructions.map((instruction) => {
      if (instruction.step === undefined) {
        errors.push({ field: "title", message: "Ce champ est requis." });
      } else if (instruction.step.length > 255) {
        errors.push({
          field: "instructions",
          message: "Le nombre maximum de caractères est de 255.",
        });
      } else if (instruction.step.length < 5) {
        errors.push({
          field: "instructions",
          message: "Le nombre minimum de caractères est de 5.",
        });
      }
      return true;
    });

    // FOR INGREDIENTS
    if (recipeIngredients.length === 0) {
      errors.push({
        field: "recipeIngredients",
        message: "Il faut au moins 1 ingrédient.",
      });
      recipeIngredients.map((ingredient) => {
        if (ingredient.unit === undefined) {
          errors.push({ field: "title", message: "Ce champ est requis." });
        } else if (ingredient.unit.length > 25) {
          errors.push({
            field: "ingredients",
            message: "Le nombre maximum de caractères est de 25.",
          });
          if (Number.isNaN(ingredient.quantity)) {
            errors.push({
              field: "quantity",
              message: "Il doit s'agir d'un nombre.",
            });
          }
        }
        return true;
      });
    }

    if (errors.length) {
      res.status(422).json({ validationErrors: errors });
    } else {
      next();
    }
  } catch (err) {
    console.error(err);
  }
};
module.exports = recipeMiddleware;
