import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeByIdCard from "./RecipeByIdCard";

export default function RecipeById() {
  const [recipes, setRecipes] = useState(null);
  const idRecipe = useParams();

  useEffect(() => {
    fetch(`http://localhost:3310/api/recipes/${idRecipe.id}`)
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  });

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
    </section>
  );
}
