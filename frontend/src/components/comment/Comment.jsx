import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CommentById from "./CommentById";
import styles from "./Comment.module.css";

const defaultTheme = createTheme();

export default function Comment() {
  const [comment, setComment] = useState("");
  const { id: CommentRecipeId } = useParams();

  // Hook pour la navigation
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  function refreshPage() {
    window.location.reload();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/recipes/${CommentRecipeId}/comment`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ comment, CommentRecipeId }),
        }
      );

      if (response.status === 201) {
        console.info("Comment posted successfully!");
        setComment("");
        refreshPage();
      } else {
        console.error("Failed to post comment:", response);
      }
    } catch (err) {
      console.error("Error posting comment:", err);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square>
        <CssBaseline />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => navigate(-1)}
        >
          Retour
        </Button>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Laissez un commentaire !
          </Typography>
          <TextField
            margin="normal"
            fullWidth
            name="comment"
            label="Commentez"
            type="comment"
            id="comment"
            value={comment}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            variant="contained"
            onClick={handleSubmit}
            sx={{ mt: 3, mb: 2 }}
          >
            Poster
          </Button>
        </Box>
        <section className={styles.main_container}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CommentById />
          </Box>
        </section>
      </Grid>
    </ThemeProvider>
  );
}
