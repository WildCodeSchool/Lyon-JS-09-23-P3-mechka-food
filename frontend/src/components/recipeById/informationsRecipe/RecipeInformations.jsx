import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CommentIcon from "@mui/icons-material/Comment";
import PropTypes from "prop-types";

export default function RecipeByIdCard({
  image,
  title,
  time,
  number,
  description,
}) {
  const idRecipe = useParams();
  return (
    <section>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: 1,
          p: 0,
          maxWidth: 1000,
        }}
      >
        <Card
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <CardContent
            sx={{
              padding: 0,
              maxWidth: 900,
            }}
          >
            <CardMedia
              component="img"
              image={image}
              alt="recipe"
              sx={{ height: "100%", width: "100%" }}
            />
          </CardContent>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              width: 1,
              padding: 2,
              paddingBottom: 0,
            }}
          >
            <Link to={`/recipes/${idRecipe.id}/comment`}>
              <CommentIcon /> Commentaires
            </Link>
          </CardContent>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              width: 1,
              padding: 4,
              paddingTop: 2,
              gap: 1,
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Temps requis : {time}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Pour {number} personnes
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </section>
  );
}

RecipeByIdCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};
