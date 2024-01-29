import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import PropTypes from "prop-types";
import style from "./UpdateIngredientsForm.module.css";

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
        quantity: 0,
        unit: "",
      },
    ]);
  };

  return (
    <>
      {userIngredients.map((userIngredient, index) => (
        <div className={style.container}>
          <TextField
            id="outlined-basic"
            label="Quantity"
            variant="outlined"
            key={userIngredient.id}
            className={style.textQuantity}
            onChange={(e) => handleChange(e, "quantity", index)}
            value={userIngredient.quantity}
          />

          <Select
            id="outlined-basic"
            label="Unit"
            variant="outlined"
            className={style.unitSelect}
            onChange={(e) => handleChange(e, "unit", index)}
            value={userIngredient.unit}
          >
            <MenuItem value="gr">Gr</MenuItem>
            <MenuItem value="ml">Ml</MenuItem>
            <MenuItem value="l">Litres</MenuItem>
            <MenuItem value="kg">Kg</MenuItem>
            <MenuItem value="pince">Pincée</MenuItem>
            <MenuItem value="cc">Cuillière à café</MenuItem>
            <MenuItem value="cs">Cuillère à soupe</MenuItem>
          </Select>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
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
      <Fab
        onClick={handleAddUserIng}
        color="primary"
        aria-label="add"
        sx={{ background: "#FAE078", color: "black" }}
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
  userIngredients: PropTypes.arrayOf(PropTypes.number).isRequired,
  setQuantity: PropTypes.func.isRequired,
  setUnit: PropTypes.func.isRequired,
  unit: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
