import PropTypes from "prop-types";
import styles from "./FoundRecipeCard.module.css";

export default function FoundRecipeCard({ image, title }) {
  return (
    <section className={styles.card}>
      <img src={image} alt={title} className={styles.imageCard} />
      <h3 className={styles.recipeTitle}>{title}</h3>
    </section>
  );
}

FoundRecipeCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
