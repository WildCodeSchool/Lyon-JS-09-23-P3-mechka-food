import PropTypes from "prop-types";
import styles from "./RecipesCarrouselCard.module.css";

export default function RecipesCarrouselCard({ image }) {
  return (
    <div className={styles.carrouselCardPosition}>
      <img src={image} alt="Recipe" className={styles.imageCarrouselCard} />
    </div>
  );
}

RecipesCarrouselCard.propTypes = {
  image: PropTypes.string.isRequired,
};
