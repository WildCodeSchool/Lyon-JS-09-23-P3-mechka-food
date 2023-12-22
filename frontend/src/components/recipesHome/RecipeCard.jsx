import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./RecipeCard.module.css";

export default function RecipeCard({ image, title, id, description }) {
  return (
    <section className={styles.card}>
      <Link to={`/recipes/${id}`}>
        <img src={image} alt={title} className={styles.imageCard} />
      </Link>
      <div className={styles.recipeInfoCard}>
        <h3 className={styles.recipeTitle}>{title}</h3>
        <p className={styles.CardDetails}>{description}</p>
      </div>
    </section>
  );
}

RecipeCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
