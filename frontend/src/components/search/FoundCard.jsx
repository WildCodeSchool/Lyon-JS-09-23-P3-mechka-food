import PropTypes from "prop-types";
import styles from "./FoundCard.module.css";

export default function FoundCard({ image, title }) {
  return (
    <section className={styles.card}>
      <h3 className={styles.recipeTitle}>{title}</h3>
      <img src={image} alt={title} className={styles.imageCard} />
    </section>
  );
}

FoundCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
