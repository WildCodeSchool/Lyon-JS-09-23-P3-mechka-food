import PropTypes from "prop-types";

export default function IngredientByRecipe({ quantity, unit, name }) {
  return <li>{`${quantity} ${unit} ${name}`}</li>;
}

IngredientByRecipe.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};
