import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";

export default function InstructionByRecipe() {
  const idRecipe = useParams();
  const [instructions, setInstructions] = useState(null);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/recipes/instructions/${
        idRecipe.id
      }`
    )
      .then((response) => response.json())
      .then((data) => setInstructions(data));
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
                Instructions :
              </Typography>
              {instructions !== null &&
                instructions.map((instruction) => {
                  return (
                    <li key={instruction.id}>
                      <CardContent
                        sx={{
                          display: "flex",
                          gap: 1,
                          padding: 0,
                          paddingBottom: 0,
                        }}
                      >
                        <Typography
                          sx={{
                            padding: 0,
                            paddingBottom: 0,
                          }}
                          variant="body2"
                          color="text.secondary"
                        >
                          {instruction.step}
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
