import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

export default function CommentsByIdRecipe() {
  const [comments, setComments] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/recipes/${id}/comment`)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, [id]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square>
        <CssBaseline />
        <section>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {comments !== null &&
              comments.map((comment) => (
                <div key={comment.id}>
                  <p>{comment.username}</p>
                  <p>{comment.comment}</p>
                </div>
              ))}
          </Box>
        </section>
      </Grid>
    </ThemeProvider>
  );
}
