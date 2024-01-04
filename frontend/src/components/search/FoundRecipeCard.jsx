import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./FoundRecipeCard.module.css";

export default function FoundRecipeCard({ image, title, id }) {
  return (
    <section className={styles.card}>
      <Link className={styles.card} to={`/recipes/${id}`}>
        <img src={image} alt={title} className={styles.imageCard} />
        <h3 className={styles.recipeTitle}>{title}</h3>
      </Link>
    </section>
  );
}

FoundRecipeCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
