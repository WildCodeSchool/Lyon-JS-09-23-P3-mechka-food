import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import RecipeById from "../../components/recipeById/RecipeById";
import Sidebar from "../../components/sidebar/Sidebar";

export default function RecipePage() {
  return (
    <>
      <Header />
      <Sidebar />
      <RecipeById />
      <Navbar />
    </>
  );
}
