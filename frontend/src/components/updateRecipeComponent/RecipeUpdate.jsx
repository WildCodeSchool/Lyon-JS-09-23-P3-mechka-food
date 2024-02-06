import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

export default function RecipeUpdate({ recipe, setRecipe, maxTitle, maxDesc }) {
  const handleChangeTitle = (e) => {
    if (e.target.value.length < maxTitle) {
      setRecipe({ ...recipe, title: e.target.value });
    }
  };

  const handleChangeDescription = (e) => {
    if (e.target.value.length < maxDesc) {
      setRecipe({ ...recipe, descriptions: e.target.value });
    }
  };

  return (
    <>
      <TextField
        value={recipe.title}
        onChange={(e) => handleChangeTitle(e)}
        margin="normal"
        required
        fullWidth
        id={`titreDeLaRecette-${recipe.id}`}
        name="titreDeLaRecette"
        autoFocus
        label="Titre"
      />

      <TextField
        value={recipe.descriptions}
        onChange={(e) => handleChangeDescription(e)}
        margin="normal"
        required
        fullWidth
        multiline // Permet plusieurs lignes
        rows={4} // Spécifie le nombre initial de lignes
        sx={{ height: 120 }}
        id={`decription-${recipe.id}`}
        name="description"
        label="Description"
        autoFocus
      />
    </>
  );
}

RecipeUpdate.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string.isRequired,
    descriptions: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  setRecipe: PropTypes.func.isRequired,
  maxTitle: PropTypes.number.isRequired,
  maxDesc: PropTypes.number.isRequired,
};
