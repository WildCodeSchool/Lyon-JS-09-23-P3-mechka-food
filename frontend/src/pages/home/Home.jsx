import RecipesCarrousel from "../../components/recipesCarrouselHome/RecipesCarrousel";
import RecipeContainer from "../../components/recipesHome/RecipeContainer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import MainCardHomeContainer from "../../components/componentHome/MainCardHomeContainer";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Sidebar />
      <MainCardHomeContainer />
      <Navbar />
      <RecipesCarrousel />
      <RecipeContainer />
    </div>
  );
}

export default Home;
