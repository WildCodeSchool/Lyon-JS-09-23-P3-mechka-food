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
      <section className={styles.recipeBydUpperContainer}>
        <div className={styles.recipeByIdImageContainer}>
          <img src={image} className={styles.recipeImage} alt={title} />
        </div>
        <div className={styles.recipeByIdContainerTop}>
          <h2 className={styles.recipeByIdTitle}>{title}</h2>
          <p>Temps requis: {time}</p>
          <p>Pour {number} personnes</p>

          <h4 className={styles.recipeByIdTitle}>Description: </h4>
          {description}
        </div>
      </section>
      <div className={styles.recipeByIdContainer}>
        <h4 className={styles.recipeByIdTitle}>Instructions: </h4>
        {instructions}
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
