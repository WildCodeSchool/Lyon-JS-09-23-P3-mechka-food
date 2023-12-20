import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./RecipesCarrouselCard.module.css";

export default function RecipesCarrouselCard({ image, id }) {
  return (
    <div className={styles.carrouselCardPosition}>
      <Link to={`/recipes/${id}`}>
        <img src={image} alt="Recipe" className={styles.imageCarrouselCard} />
      </Link>
    </div>
  );
}

RecipesCarrouselCard.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
