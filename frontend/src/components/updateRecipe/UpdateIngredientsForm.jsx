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
          <input
            value={userIngredient.quantity}
            onChange={(e) => handleChange(e, "quantity", index)}
            className={style.textQuantity}
            key={userIngredient.id}
          />

          <select
            value={userIngredient.unit}
            onChange={(e) => handleChange(e, "unit", index)}
          >
            {userIngredients.map((element) => (
              <option key={element.id} value={element.unit}>
                {element.unit}
              </option>
            ))}
          </select>

          <select
            value={userIngredient.name}
            onChange={(e) => handleChange(e, "name", index)}
          >
            {ingredients.map((element) => (
              <option key={element.id} value={element.name}>
                {element.name}
              </option>
            ))}
          </select>
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
};
