import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function RecipeById() {
  const [recipes, setRecipes] = useState([]);
  const idRecipe = useParams();

  useEffect(() => {
    fetch(`http://localhost:3310/api/recipes/${idRecipe.id}`)
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  });

  return (
    <section>
      <div>
        <img src={recipes.image_url} alt="recipe" />
        <h2>{recipes.title}</h2>
        <h4>{recipes.global_time}</h4>
        <h4>{recipes.number_persons}</h4>
        <p>{recipes.descriptions}</p>
        <p>{recipes.instructions}</p>
      </div>
    </section>
  );
}
