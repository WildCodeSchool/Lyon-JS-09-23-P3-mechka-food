import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import styles from "./RecipeContainer.module.css";

export default function RecipeContainer() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  });
  return (
    <section>
      <div>
        <h2 className={styles.titleRecipeContainer}>Suggestions</h2>
      </div>
      <div className={styles.cardPosition}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipes={recipe} />
        ))}
      </div>
    </section>
  );
}
