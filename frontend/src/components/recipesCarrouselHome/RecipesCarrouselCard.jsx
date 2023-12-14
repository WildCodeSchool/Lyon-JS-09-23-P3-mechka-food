import PropTypes from "prop-types";
import styles from "./RecipesCarrouselCard.module.css";

export default function RecipesCarrouselCard({ title, image }) {
  return (
    <div className={styles.carrouselCardPosition}>
      <img src={image} alt={title} className={styles.imageCarrouselCard} />
      <h3>{title}</h3>
    </div>
  );
}

RecipesCarrouselCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
