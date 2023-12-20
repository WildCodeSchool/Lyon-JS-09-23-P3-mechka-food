import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeByIdCard from "./RecipeByIdCard";
import IngredientByRecipe from "./IngredientByRecipe";
import styles from "./IngredientByRecipe.module.css";

export default function RecipeById() {
  const [recipes, setRecipes] = useState(null);
  const idRecipe = useParams();
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3310/api/recipes/${idRecipe.id}`)
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3310/api/recipes/ingredients/${idRecipe.id}`)
      .then((response) => response.json())
      .then((data) => setIngredients(data));
  }, []);

  return (
    <section>
      <div>
        {recipes !== null && (
          <RecipeByIdCard
            image={recipes.image_url}
            title={recipes.title}
            time={recipes.global_time}
            number={recipes.number_persons}
            description={recipes.descriptions}
            instructions={recipes.instructions}
          />
        )}
      </div>
      <div className={styles.ingredientByRecipeContainer}>
        <h4 className={styles.IngredientCardTitle}>Ingrédients</h4>
        {ingredients !== null &&
          ingredients.map((ingredient) => {
            return (
              <div className={styles.ingredientByRecipeCard}>
                <div>
                  <IngredientByRecipe
                    key={ingredient.id}
                    quantity={ingredient.quantity}
                    unit={ingredient.unit}
                    name={ingredient.name}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
