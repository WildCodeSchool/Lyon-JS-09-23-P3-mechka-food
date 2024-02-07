import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RecipeUpdate from "./RecipeUpdate";
import InstructionsUpdate from "./InstructionsUpdate";
import IngredientsUpdate from "./IngredientsUpdate";
import styles from "./UpdateRecipe.module.css";

const defaultTheme = createTheme();

export default function UpdateRecipe() {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    title: "",
    descriptions: "",
    id: 0,
    global_time: "",
    number_persons: 0,
    image_url: "",
    user_id: 0,
    category_id: 0,
  });
  const [recipeInstructions, setRecipeInstructions] = useState([]);
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const MaxLengthTitleIngredients = 50;
  const MaxLengthDescriptionInstructions = 250;
  const { id } = useParams();

  // Get infos for this recipe
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/recipes/${id}`
        );
        const data = await response.json();

        setRecipe(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  // Get instructions for this recipe
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api//recipes/instructions/${id}`
        );
        const data = await response.json();

        setRecipeInstructions(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  // Get ingredients for this recipe
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/api/recipes/recipeIngredient/${id}`
        );
        const data = await response.json();

        setRecipeIngredients(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  // Get all ingredients of our database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/recipes/ingredients`
        );
        const data = await response.json();

        setIngredients(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const update = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/recipes/${id}/update`,
          {
            method: "put",
            headers: {
              "Content-Type": "application/json", // Ajoutez l'en-tête Content-Type
            },
            body: JSON.stringify({
              recipe,
              recipeInstructions,
              recipeIngredients,
            }),
            credentials: "include",
          }
        );

        if (response.status === 200) {
          navigate("/");
          console.info("ok");
        } else {
          console.info(response);
        }
      } catch (err) {
        console.error(err);
      }
    };

    update();
  };

  return (
    <section className={styles.globalContainer}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "50rem",
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", color: "black" }}
            component="h1"
            variant="h5"
          >
            Modifier Votre Recette
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
            encType="multipart/form-data"
          >
            <RecipeUpdate
              recipe={recipe}
              setRecipe={setRecipe}
              maxTitle={MaxLengthTitleIngredients}
              maxDesc={MaxLengthDescriptionInstructions}
            />
            <InstructionsUpdate
              instructions={recipeInstructions}
              setInstructions={setRecipeInstructions}
              maxLength={MaxLengthDescriptionInstructions}
            />
            <IngredientsUpdate
              ingredients={recipeIngredients}
              allIngredients={ingredients}
              setIngredients={setRecipeIngredients}
            />
          </Box>
        </Box>
      </ThemeProvider>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          margin: 0,
          background: "#FAE078",
          color: "black",
          height: "4rem",
          fontSize: "1.5rem",
        }}
        onClick={handleSubmit}
      >
        METTRE À JOUR
      </Button>
    </section>
  );
}
