import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "../recipesHome/RecipeCard";

export default function RecipeById() {
  const [recipes, setRecipes] = useState([]);
  //   const [ingredients, setIngredients] = useState([]);
  const idRecipe = useParams();

  useEffect(() => {
    const urlRecipe = `http://localhost:3310/api/recipes/${idRecipe.id}`;

    fetch(urlRecipe)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Error");
        }
        return response.json();
      })
      .then((data) => {
        setRecipes(Object.values(data));
      })
      .catch((error) => {
        console.error("Something bad happened!", error);
      });
  }, []);

  return (
    <section>
      <div>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            image={recipe.image_url}
            title={recipe.title}
            time={recipe.global_time}
            number={recipe.number_persons}
            description={recipe.descriptions}
            instructions={recipe.instructions}
          />
        ))}
      </div>
    </section>
  );
}
