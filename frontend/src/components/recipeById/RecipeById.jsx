import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import RecipeInformations from "./informationsRecipe/RecipeInformations";
import IngredientByRecipe from "./ingredients/IngredientByRecipe";
import InstructionByRecipe from "./instructions/InstructionByRecipe";
import styles from "./RecipeById.module.css";

export default function RecipeById() {
  const [recipes, setRecipes] = useState(null);
  const userId = 1; // 1 pour simuler l'user 1
  const { id: recipeId } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleChangeFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  // useEffect pour aller chercher l'id de la recette et afficher la photo, les informations (titre...)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/recipes/${recipeId}`)
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  // Code pour lier ce qui est des favorites

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/recipes/${recipeId}/favorite`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId, recipeId }),
        }
      );
      if (response.status === 201) {
        handleChangeFavorite();
        console.info("AJOUT FAVORIS OK...");
      } else {
        console.error("FAILED add !!!!!!!!!!!!!:", response);
      }
    } catch (err) {
      console.error("Error posting comment:", err);
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/recipes/${recipeId}/deleteFavorite`,
        {
          method: "delete",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId, recipeId }),
        }
      );
      if (response.status === 201) {
        handleChangeFavorite();
        console.info("FAVORIS SUPPRIMÉ !");
      } else {
        console.error("FAILED delete !!!!!!!!!!!!!:", response);
      }
    } catch (err) {
      console.error("Error posting comment:", err);
    }
  };

  return (
    <section className={styles.RecipeByIdContainer}>
      <Button
        onClick={isFavorite === false ? handleSubmit : handleDelete}
        className={styles.likeButton}
        variant="contained"
        color="success"
      >
        J'aime !
      </Button>
      <div>
        {recipes !== null && (
          <RecipeInformations
            image={recipes.image_url}
            title={recipes.title}
            time={recipes.global_time}
            number={recipes.number_persons}
            description={recipes.descriptions}
          />
        )}
      </div>
      <div>
        <IngredientByRecipe />
        <InstructionByRecipe />
      </div>
    </section>
  );
}
