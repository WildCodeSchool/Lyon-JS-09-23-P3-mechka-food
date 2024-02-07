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
    if (e.target.value.length < 20) {
      const updatedIngredients = [...ingredients];
      updatedIngredients[index] = {
        ...updatedIngredients[index],
        quantity: e.target.value,
      };
      setIngredients(updatedIngredients);
    }
  };

  const handleChangeUnit = (e, index) => {
    if (e.target.value.length < 20) {
      const updatedIngredients = [...ingredients];
      updatedIngredients[index] = {
        ...updatedIngredients[index],
        unit: e.target.value,
      };
      setIngredients(updatedIngredients);
    }
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
        <div className={style.globalContainer} key={userIngredient.id}>
          <div className={style.quantity}>
            <TextField
              id="outlined-basic"
              label="Quantity"
              key={userIngredient.ingredien_id}
              className={style.textQuantity}
              onChange={(e) => handleChangeQuantity(e, index)}
              value={userIngredient.quantity || ""}
              sx={{ width: "auto" }}
            />
            <div>
              {userIngredient.quantity.length === 0 && <p> 🚨 Champ requis.</p>}
              {Number.isNaN(Number(userIngredient.quantity)) && (
                <p> 🚨 Nombre uniquement.</p>
              )}
              {userIngredient.quantity.length === 19 && (
                <p> 🚨 Maximum 20 caractères.</p>
              )}
            </div>
          </div>

          <div className={style.unit}>
            <TextField
              id="outlined-basic"
              label="Unit"
              key={userIngredient.ingredien_id}
              className={style.textQuantity}
              onChange={(e) => handleChangeUnit(e, index)}
              value={userIngredient.unit || ""}
              sx={{ width: "8rem" }}
            />
            <div>
              {userIngredient.unit.length === 19 && (
                <p> 🚨 Maximum 20 caractères.</p>
              )}
            </div>
          </div>
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
