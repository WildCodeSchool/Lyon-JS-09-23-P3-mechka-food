import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";

export default function IngredientByRecipe() {
  const idRecipe = useParams();
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/recipes/ingredients/${
        idRecipe.id
      }`
    )
      .then((response) => response.json())
      .then((data) => setIngredients(data));
  }, []);

  return (
    <section>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: 1,
          padding: 3,
          paddingTop: 0,
          maxWidth: 1000,
        }}
      >
        <Card
          sx={{
            width: 1,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <CardActionArea
            sx={{
              padding: 3,
              paddingBottom: 0,
            }}
          >
            <ul>
              <Typography gutterBottom variant="h5" component="div">
                Ingrédients :
              </Typography>
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
          </CardActionArea>
        </Card>
      </Box>
    </section>
  );
}
