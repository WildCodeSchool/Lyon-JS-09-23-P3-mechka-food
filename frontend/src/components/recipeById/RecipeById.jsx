import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import RecipeInformations from "./informationsRecipe/RecipeInformations";
import IngredientByRecipe from "./ingredients/IngredientByRecipe";
import InstructionByRecipe from "./instructions/InstructionByRecipe";
import styles from "./RecipeById.module.css";

export default function RecipeById() {
  const [recipes, setRecipes] = useState(null);
  // const [favorite, setFavorite] = useState(false);
  const idRecipe = useParams();
  const userId = 1; // 1 pour simuler l'user 1
  const { id: recipeFid } = useParams();

  // useEffect pour aller chercher l'id de la recette et afficher la photo, les informations (titre...)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/recipes/${idRecipe.id}`)
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  // Code pour lier ce qui est des favorites

  function refreshPage() {
    window.location.reload();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/recipes/${recipeFid}/favorite`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId, recipeFid }),
        }
      );
      if (response.status === 201) {
        console.info("AJOUT FAVORIS OK...");
        // setFavorite(true);
        refreshPage();
      } else {
        console.error("FAILED !!!!!!!!!!!!!:", response);
      }
    } catch (err) {
      console.error("Error posting comment:", err);
    }
  };

  return (
    <section className={styles.RecipeByIdContainer}>
      <Button
        onClick={handleSubmit}
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
