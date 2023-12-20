import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./RecipeCard.module.css";

export default function RecipeCard({ image, title, id }) {
  return (
    <section className={styles.card}>
      <h3 className={styles.recipeTitle}>{title}</h3>
      <Link to={`/recipes/${id}`}>
        <img src={image} alt={title} className={styles.imageCard} />
      </Link>
    </section>
  );
}

RecipeCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
