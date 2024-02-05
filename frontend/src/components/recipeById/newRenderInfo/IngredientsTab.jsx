import { CardContent, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export default function IngredientsTab({ ingredients }) {
  return (
    <Container sx={{ overflowY: "auto", height: "30vh", marginBottom: "2rem" }}>
      <ul>
        {ingredients !== null &&
          ingredients.map((ingredient) => {
            return (
              <li key={ingredient.id}>
                <CardContent
                  sx={{
                    display: "flex",
                    gap: 0.5,
                    padding: 0,
                    paddingBottom: 0,
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    {ingredient.quantity}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {ingredient.unit}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {ingredient.name}
                  </Typography>
                </CardContent>
              </li>
            );
          })}
      </ul>
    </Container>
  );
}
IngredientsTab.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
