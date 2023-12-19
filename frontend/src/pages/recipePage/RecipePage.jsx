import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import RecipeById from "../../components/recipeById/RecipeById";

export default function RecipePage() {
  return (
    <div>
      <Header />
      <RecipeById />
      <Navbar />
    </div>
  );
}
