const recipeMiddleware = async (req, res, next) => {
  try {
    const {
      title,
      descriptions,
      globalTime,
      numberPersons,
      // userId,
      // instructions,
      // userIngredients,
      // userCategorieId,
    } = req.body;

    const errors = [];

    if (title === undefined) {
      errors.push({ field: "title", message: "Ce champ est requis." });
    } else if (title.length > 50) {
      errors.push({
        field: "title",
        message: "Le nombre maximum de caractères est de 50.",
      });
    }

    if (descriptions === undefined) {
      errors.push({ field: "descriptions", message: "Ce champ est requis." });
    } else if (descriptions.length > 255) {
      errors.push({
        field: "descriptions",
        message: "Le nombre maximum de caractères est de 255.",
      });
    }

    if (globalTime === undefined) {
      errors.push({ field: "globalTime", message: "Ce champ est requis." });
    } else if (globalTime.length > 50) {
      errors.push({
        field: "globalTime",
        message: "Le nombre maximum de caractères est de 50.",
      });
    }

    if (numberPersons === undefined) {
      errors.push({ field: "numberPersons", message: "Ce champ est requis." });
    } else if (Number.isNaN(numberPersons)) {
      errors.push({
        field: "numberPersons",
        message: "Merci de sélectionner un nombre.",
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
