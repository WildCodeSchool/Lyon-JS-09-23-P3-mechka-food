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
      />
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
