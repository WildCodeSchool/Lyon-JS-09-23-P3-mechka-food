import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./MainRecipes.module.css";

export default function MainRecipes({ image, title, id }) {
  return (
    <div className={styles.mainRecipes}>
      <Link to={`/recipes/${id}`}>
        <img src={image} alt={title} className={styles.imageCardRecipes} />
      </Link>
      <div className={styles.recipeInfoCard}>
        <h3 className={styles.recipeTitle}>{title}</h3>
      </div>
    </div>
  );
}

MainRecipes.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
