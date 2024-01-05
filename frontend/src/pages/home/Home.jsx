import RecipesCarrousel from "../../components/recipesCarrouselHome/RecipesCarrousel";
import RecipeContainer from "../../components/recipesHome/RecipeContainer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import MainRecipesContainer from "../../components/mainRecipesDesktop/MainRecipesContainer";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Sidebar />
      <MainRecipesContainer />
      <Navbar />
      <RecipesCarrousel />
      <RecipeContainer />
    </div>
  );
}

export default Home;
