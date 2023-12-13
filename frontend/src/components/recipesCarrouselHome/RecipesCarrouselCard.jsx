import PropTypes from "prop-types";

export default function RecipesCarrouselCard({ title, image }) {
  return (
    <div>
      <p>{title}</p>
      <img src={image} alt={title} />
    </div>
  );
}

RecipesCarrouselCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
