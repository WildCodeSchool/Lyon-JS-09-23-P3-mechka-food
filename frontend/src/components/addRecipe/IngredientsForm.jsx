import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import PropTypes from "prop-types";
import style from "./IngredientsForm.module.css";

export default function IngredientsForm({
  ingredients,
  userIngredients,
  setUserIngredients,
}) {
  // Get values from input et set them into userIngredients
  const handleChange = (e, field, index, ingredientId) => {
    const updatedIngredients = [...userIngredients];
    if (field === "id") {
      updatedIngredients[index][field] = ingredientId;
    } else {
      updatedIngredients[index][field] = e.target.value;
    }
    setUserIngredients(updatedIngredients);
  };

  // Add new inputs to the user when clicked on button +
  const handleAddUserIng = () => {
    setUserIngredients([
      ...userIngredients,
      {
        id: 0,
        quantity: "",
        unit: "",
      },
    ]);
  };

  return (
    <>
      {userIngredients.map((userIngredient, index) => (
        <div className={style.container} key={userIngredient.id}>
          <TextField
            id="outlined-basic"
            label="Quantity"
            variant="outlined"
            key={userIngredient.id}
            className={style.textQuantity}
            onChange={(e) => handleChange(e, "quantity", index)}
            value={userIngredient.quantity}
          />
          <div>
            {Number.isNaN(Number(userIngredient.quantity)) && (
              <p> 🚨 Nombre uniquement.</p>
            )}
            {userIngredient.quantity.length === 19 && (
              <p> 🚨 Maximum 20 caractères.</p>
            )}
          </div>

          <TextField
            id="outlined-basic"
            label="Unit"
            key={userIngredient.ingredien_id}
            className={style.textQuantity}
            onChange={(e) => handleChange(e, "unit", index)}
            value={userIngredient.unit || ""}
            sx={{ width: "10rem" }}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            value={ingredients.find(
              (option) => option.id === userIngredient.id
            )}
            fullWidth
            options={ingredients}
            getOptionLabel={(option) => option.name}
            onChange={(e, newValue) =>
              handleChange(e, "id", index, newValue.id)
            }
            renderInput={(params) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <TextField {...params} label="Ingredient" />
            )}
          />
        </div>
      ))}
      {userIngredients.length === 1 && userIngredients[0].id === null && (
        <p>🚨 Au moins 1 ingrédient requis.</p>
      )}
      <Fab
        onClick={handleAddUserIng}
        color="primary"
        aria-label="add"
        sx={{ background: "#FAE078", color: "black", mt: "1rem", mb: "1.5rem" }}
        size="medium"
      >
        <AddIcon />
      </Fab>
    </>
  );
}

IngredientsForm.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  setUserIngredients: PropTypes.func.isRequired,
  userIngredients: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number }))
    .isRequired,
};
