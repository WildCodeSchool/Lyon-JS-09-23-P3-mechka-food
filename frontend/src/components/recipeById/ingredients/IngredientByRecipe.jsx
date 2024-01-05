import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./IngredientByRecipe.module.css";

export default function IngredientByRecipe() {
  const idRecipe = useParams();
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/recipes/ingredients/${
        idRecipe.id
      }`
    )
      .then((response) => response.json())
      .then((data) => setIngredients(data));
  }, []);

  return (
    <div className={styles.apparenceCard}>
      <h4 className={styles.cardTitle}>Ingrédients : </h4>
      <ul className={styles.listCard}>
        {ingredients !== null &&
          ingredients.map((ingredient) => {
            return (
              <li key={ingredient.id}>
                {ingredient.quantity} {ingredient.unit} {ingredient.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
