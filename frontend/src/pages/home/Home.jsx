import RecipesCarrousel from "../../components/recipesCarrouselHome/RecipesCarrousel";
import RecipeContainer from "../../components/recipesHome/RecipeContainer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import CategoryById from "../../components/category/CategoryById";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Sidebar />
      <Navbar />
      <RecipesCarrousel />
      <CategoryById />
      <RecipeContainer />
    </div>
  );
}

export default Home;
