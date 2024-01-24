import { useState, useEffect } from "react";
import AdminCard from "./AdminCard";
import styles from "./AdminPage.module.css";

export default function RecipeContainer() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  });
  return (
    <section>
      <div className={styles.containerTitle}>
        <h2 className={styles.titleRecipeContainer}>Toutes les recettes</h2>
      </div>
      <div className={styles.cardPosition}>
        {recipes.map((recipe) => (
          <AdminCard
            key={recipe.id}
            id={recipe.id}
            image={recipe.image_url}
            title={recipe.title}
            description={recipe.descriptions}
          />
        ))}
      </div>
    </section>
  );
}
