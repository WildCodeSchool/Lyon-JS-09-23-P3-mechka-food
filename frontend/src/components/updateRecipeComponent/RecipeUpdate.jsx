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
      {recipe.title.length === 0 && <p> 🚨 Ce champ ne peut pas être vide.</p>}
      {recipe.title.length > 0 && recipe.title.length < 49 && (
        <p> ✅ Ce champ est valide.</p>
      )}
      {recipe.title.length >= 49 && (
        <p>⚠️ Le titre ne doit pas dépasser 50 caractères.</p>
      )}

      <TextField
        value={recipe.descriptions}
        onChange={(e) => handleChangeDescription(e)}
        margin="normal"
        required
        fullWidth
        multiline // Permet plusieurs lignes
        rows={4} // Spécifie le nombre initial de lignes
        sx={{ height: 120, marginBottom: 2 }}
        id={`decription-${recipe.id}`}
        name="description"
        label="Description"
        autoFocus
      />
      {recipe.descriptions.length === 0 && (
        <p> 🚨 Ce champ ne peut pas être vide.</p>
      )}
      {recipe.descriptions.length > 0 && recipe.descriptions.length < 249 && (
        <p> ✅ Ce champ est valide.</p>
      )}
      {recipe.descriptions.length >= 249 && (
        <p>⚠️ La description ne doit pas dépasser 255 caractères.</p>
      )}
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
