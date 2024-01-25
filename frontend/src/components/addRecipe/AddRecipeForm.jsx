import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import AlertTitle from "@mui/material/AlertTitle";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import styles from "./AddRecipeForm.module.css";
import RecipeForm from "./RecipeForm";
import InstructionsForm from "./InstructionsForm";
import IngredientsForm from "./IngredientsForm";
import CategoriesSelect from "./CategoriesSelect";

const defaultTheme = createTheme();

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function AddRecipeForm() {
  const [persons, setPersons] = useState("");
  const [instructions, setInstructions] = useState([{ id: 0, step: "" }]);
  const [title, setTitle] = useState("");
  const [descriptions, setDescription] = useState("");
  const [allIngredients, setAllIngredients] = useState([]);
  const [userIngredients, setUserIngredients] = useState([
    {
      id: null,
      quantity: 0,
      unit: "",
    },
  ]);
  const [timeCook, settimeCook] = useState("");
  const [isSuccess, setIsSucces] = useState(false);
  const [categories, setCategories] = useState([]);
  const [userCategorieId, setUserCategoryId] = useState("");

  const MaxLengthTitleIngredients = 50;
  const MaxLengthDescriptionInstructions = 250;

  // Get all ingredients from our database (need for autocomlete)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/recipes/ingredients`
        );
        const data = await response.json();

        setAllIngredients(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  // Get all categories from our database
  useEffect(() => {
    const fetchDataCategories = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/category`
        );
        const data = await response.json();

        setCategories(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchDataCategories();
  }, []);

  // Request POST from body frontend to back-end
  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/recipes/add`,
          {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              title,
              descriptions,
              globalTime: timeCook,
              numberPersons: persons,
              instructions,
              userIngredients,
              userCategorieId,
            }),
          }
        );
        if (response.status === 201) {
          setIsSucces(true);
        } else {
          console.info(response);
        }
      } catch (err) {
        console.error(err);
      }
    };

    postData();
  };
  // Temps de préparation

  const handleChangeCookTime = (e) => {
    if (e.target.value.length <= MaxLengthTitleIngredients) {
      settimeCook(e.target.value);
    }
  };

  const handleChange = (event) => {
    setPersons(event.target.value);
  };

  return (
    <>
      {isSuccess === true && (
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          Your recipe has been added successfully!
        </Alert>
      )}
      <section className={styles.section}>
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="70">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Nouvelle Recette
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <RecipeForm
                  maxTitle={MaxLengthTitleIngredients}
                  maxDescription={MaxLengthDescriptionInstructions}
                  title={title}
                  setTitle={setTitle}
                  description={descriptions}
                  setDescription={setDescription}
                />

                <InstructionsForm
                  maxLength={MaxLengthDescriptionInstructions}
                  instructions={instructions}
                  setInstructions={setInstructions}
                />

                <div className={styles.containerIng}>
                  <IngredientsForm
                    className={styles.ingredientInput}
                    ingredients={allIngredients}
                    userIngredients={userIngredients}
                    setUserIngredients={setUserIngredients}
                  />
                </div>
                <TextField
                  style={{ marginTop: "2rem" }}
                  margin="normal"
                  required
                  fullWidth
                  id="Temps de préparation"
                  label="Temps de préparation"
                  name="Temps de préparation"
                  autoComplete="Temps de préparation"
                  onChange={handleChangeCookTime}
                  value={timeCook}
                  autoFocus
                />
                <FormControl
                  style={{ marginTop: "2rem", marginBottom: "2rem" }}
                  fullWidth
                >
                  <InputLabel id="numberPersons">
                    Nombre de personnes
                  </InputLabel>
                  <Select
                    labelId="numberPersons"
                    id="numberPersons"
                    value={persons}
                    label="Nombre de personnes"
                    onChange={handleChange}
                  >
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                  </Select>
                </FormControl>
                <CategoriesSelect
                  categories={categories}
                  setUserCategoryId={setUserCategoryId}
                  userCategoryId={userCategorieId}
                />
                <Button
                  sx={{ background: "#FAE078", color: "black" }}
                  component="label"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                >
                  Upload file
                  <VisuallyHiddenInput type="file" />
                </Button>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 5, mb: 2, background: "#FAE078", color: "black" }}
                >
                  Ajouter !
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </section>
    </>
  );
}
