import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import AlertTitle from "@mui/material/AlertTitle";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import styles from "./UpdateRecipeForm.module.css";
import UpdateRecipeForm from "./UpdateRecipeForm";
import UpdateInstructionsForm from "./UpdateInstructionsForm";
import UpdateIngredientsForm from "./UpdateIngredientsForm";
import UpdateCategoriesSelect from "./UpdateCategoriesSelect";

const defaultTheme = createTheme();

export default function UpdateForm() {
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

  const { id: recipeId } = useParams();

  const MaxLengthTitleIngredients = 50;
  const MaxLengthDescriptionInstructions = 250;

  // AXEL Get ALL INGREDIENTS from our database (in order to have completed form)
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

  // AXEL Get RECIPE from our database (in order to have completed form)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/recipes/${recipeId}`
        );
        const data = await response.json();

        setTitle(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  // AXEL Get SPECIFIC RECIPE INSTRUCTIONS from our database (in order to have completed form)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/api/recipes/instructions/${recipeId}`
        );
        const data = await response.json();

        setInstructions(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  // AXEL Get INGREDIENTS INFOS from our database (in order to have completed form)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/api/recipes/ingredients/${recipeId}`
        );
        const data = await response.json();

        setUserIngredients(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  // AXEL Get ALL CATEGORIES from our database
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

  // Request UPDATE from body frontend to back-end
  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/recipes/update/${recipeId}`,
          {
            method: "put",
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
                Modifier la recette
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <UpdateRecipeForm
                  maxTitle={MaxLengthTitleIngredients}
                  maxDescription={MaxLengthDescriptionInstructions}
                  title={title.title}
                  setTitle={setTitle}
                  description={title.descriptions}
                  setDescription={setDescription}
                />

                <UpdateInstructionsForm
                  maxLength={MaxLengthDescriptionInstructions}
                  instructions={instructions}
                  setInstructions={setInstructions}
                />

                <div className={styles.containerIng}>
                  <UpdateIngredientsForm
                    className={styles.ingredientInput}
                    ingredients={allIngredients}
                    setIngredients={setAllIngredients}
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
                  value={title.global_time}
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
                    value={title.number_persons}
                    // label="Nombre de personnes"
                    onChange={handleChange}
                  >
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                  </Select>
                </FormControl>
                <UpdateCategoriesSelect
                  categories={categories}
                  setUserCategoryId={setUserCategoryId}
                  userCategoryId={userCategorieId}
                />
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
