import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import PropTypes from "prop-types";
import style from "../addRecipe/IngredientsForm.module.css";

export default function IngredientsUpdate({
  ingredients,
  setIngredients,
  allIngredients,
}) {
  const handleChangeQuantity = (e, index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = {
      ...updatedIngredients[index],
      quantity: e.target.value,
    };
    setIngredients(updatedIngredients);
  };

  const handleChangeUnit = (e, index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = {
      ...updatedIngredients[index],
      unit: e.target.value,
    };
    setIngredients(updatedIngredients);
  };

  const handleChangeId = (e, index, newValue) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = {
      ...updatedIngredients[index],
      ingredient_id: newValue,
    };
    setIngredients(updatedIngredients);
  };

  return (
    <>
      {ingredients.map((userIngredient, index) => (
        <div key={userIngredient.id}>
          <TextField
            id="outlined-basic"
            label="Quantity"
            key={userIngredient.ingredien_id}
            className={style.textQuantity}
            onChange={(e) => handleChangeQuantity(e, index)}
            value={userIngredient.quantity || ""}
          />

          <TextField
            id="outlined-basic"
            label="Unit"
            key={userIngredient.ingredien_id}
            className={style.textQuantity}
            onChange={(e) => handleChangeUnit(e, index)}
            value={userIngredient.unit || ""}
            sx={{ width: "10rem" }}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={allIngredients}
            getOptionLabel={(option) => option.name}
            defaultValue={allIngredients.find(
              (ingredient) => ingredient.name === userIngredient.name
            )}
            onChange={(e, newValue) => handleChangeId(e, index, newValue.id)}
            renderInput={(params) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <TextField {...params} label="Ingredient" />
            )}
          />
        </div>
      ))}
    </>
  );
}

IngredientsUpdate.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  allIngredients: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setIngredients: PropTypes.func.isRequired,
};
