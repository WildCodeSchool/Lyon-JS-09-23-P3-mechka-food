import PropTypes from "prop-types";
import styles from "./RecipeByIdCard.module.css";

export default function RecipeByIdCard({
  image,
  title,
  time,
  number,
  description,
  instructions,
}) {
  return (
    <section className={styles.recipeByIdCard}>
      <div className={styles.recipeBydUpperContainer}>
        <div className={styles.recipeByIdImageContainer}>
          <img src={image} className={styles.recipeImage} alt={title} />
        </div>
        <div className={styles.recipeByIdContainerTop}>
          <h2 className={styles.recipeByIdTitle}>{title}</h2>
          <h5>Temps requis: {time}</h5>
          <h5>Pour {number} personnes</h5>
          <h4>
            <p className={styles.recipeByIdTitle}>Description: </p>
            {description}
          </h4>
        </div>
      </div>
      <div className={styles.recipeByIdContainer}>
        <h4>
          <p className={styles.recipeByIdTitle}>Instructions: </p>
          {instructions}
        </h4>
      </div>
    </section>
  );
}

RecipeByIdCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
};
