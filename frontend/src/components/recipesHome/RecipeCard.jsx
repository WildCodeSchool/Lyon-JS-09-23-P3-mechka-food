import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

export default function RecipeCard({ image, id }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Link to={`/recipes/${id}`}>
          <CardMedia
            component="img"
            height="240"
            image={image}
            alt="green iguana"
          />
        </Link>
      </CardActionArea>
    </Card>
  );
}

RecipeCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};
