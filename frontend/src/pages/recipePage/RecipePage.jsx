import Navbar from "../../components/Navbar/Navbar";
import RecipeById from "../../components/recipeById/RecipeById";

export default function RecipePage() {
  return (
    <div>
      {/* <h2>hello</h2> */}
      <RecipeById />
      <Navbar />
    </div>
  );
}
