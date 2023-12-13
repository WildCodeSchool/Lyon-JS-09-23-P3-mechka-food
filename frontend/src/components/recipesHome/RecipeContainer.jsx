import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeContainer() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  });
  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipes={recipe} />
      ))}
    </div>
  );
}
