import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

export default function RecipeForm({
  maxTitle,
  maxDescription,
  title,
  setTitle,
  description,
  setDescription,
}) {
  // Title

  const handleChangeTitle = (e) => {
    if (e.target.value.length <= maxTitle) {
      setTitle(e.target.value);
    }
  };

  // Description

  const handleChangeDescription = (e) => {
    if (e.target.value.length <= maxDescription) {
      setDescription(e.target.value);
    }
  };

  return (
    <>
      <TextField
        value={title}
        onChange={handleChangeTitle}
        margin="normal"
        required
        fullWidth
        id="Titre de la recette"
        label="Titre de la recette"
        name="Titre de la recette"
        autoComplete="Titre de la recette"
        autoFocus
        sx={{ mt: "2rem" }}
      />
      <div>
        {title.length === 0 && <p> 🚨 Ce champ ne peut pas être vide.</p>}
        {title.length > 0 && title.length < 49 && (
          <p> ✅ Ce champ est valide.</p>
        )}
        {title.length >= 49 && (
          <p>⚠️ La description ne doit pas dépasser 50 caractères.</p>
        )}
      </div>
      <TextField
        value={description}
        onChange={handleChangeDescription}
        margin="normal"
        required
        fullWidth
        id="Description"
        label="Description"
        name="Description"
        autoComplete="Description"
        multiline
        rows={5}
      />
      <div>
        {description.length === 0 && <p> 🚨 Ce champ ne peut pas être vide.</p>}
        {description.length > 0 && description.length < 249 && (
          <p> ✅ Ce champ est valide.</p>
        )}
        {description.length >= 249 && (
          <p>⚠️ La description ne doit pas dépasser 255 caractères.</p>
        )}
      </div>
    </>
  );
}

RecipeForm.propTypes = {
  maxTitle: PropTypes.number.isRequired,
  maxDescription: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  setDescription: PropTypes.func.isRequired,
};
