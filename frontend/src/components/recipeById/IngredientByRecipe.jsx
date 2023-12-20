import PropTypes from "prop-types";

export default function IngredientByRecipe({ quantity, unit, name }) {
  return (
    <section>
      <p>{`${quantity} ${unit} ${name}`}</p>
    </section>
  );
}

IngredientByRecipe.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};
