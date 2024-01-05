import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeInformations from "./informationsRecipe/RecipeInformations";
import IngredientByRecipe from "./ingredients/IngredientByRecipe";
import InstructionByRecipe from "./instructions/InstructionByRecipe";
import styles from "./RecipeById.module.css";

export default function RecipeById() {
  const [recipes, setRecipes] = useState(null);
  const idRecipe = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/recipes/${idRecipe.id}`)
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <section className={styles.RecipeByIdContainer}>
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
