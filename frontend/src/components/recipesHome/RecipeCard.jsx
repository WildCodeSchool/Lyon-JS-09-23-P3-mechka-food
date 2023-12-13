import PropTypes from "prop-types";
import styles from "./RecipeCard.module.css";

export default function RecipeCard({ recipes }) {
  return (
    <section className={styles.card}>
      <h3 className={styles.recipeTitle}>{recipes.title}</h3>
      <img
        src={recipes.image_url}
        alt={recipes.title}
        className={styles.imageCard}
      />
    </section>
  );
}

RecipeCard.propTypes = {
  recipes: PropTypes.string.isRequired,
};
