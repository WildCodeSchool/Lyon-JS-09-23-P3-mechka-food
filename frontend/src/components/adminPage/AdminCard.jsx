import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function AdminCard({ image, title, id, description }) {
  const handleDelete = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/recipes/${id}/delete`,
        {
          method: "delete",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        }
      );
      if (response.status === 201) {
        console.info("Recipe deleted.");
      } else {
        console.error(`failed deleting instruction, status ${response.status}`);
      }
    } catch (err) {
      console.error("Error posting instruction:", err);
    }
  };

  return (
    <Card sx={{ maxWidth: 345, marginBottom: 5, boxShadow: 5 }}>
      <Link to={`/recipes/update/${id}`}>
        <Button sx={{ margin: 3 }} variant="outlined">
          Modifier
        </Button>
      </Link>
      <Button sx={{ margin: 3 }} variant="outlined" onClick={handleDelete}>
        Supprimer
      </Button>
      <CardActionArea>
        <Link to={`/recipes/${id}`}>
          <CardMedia
            component="img"
            height="240"
            image={image}
            alt="green iguana"
          />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

AdminCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
