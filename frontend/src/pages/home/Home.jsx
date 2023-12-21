import RecipesCarrousel from "../../components/recipesCarrouselHome/RecipesCarrousel";
import RecipeContainer from "../../components/recipesHome/RecipeContainer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <RecipesCarrousel />
      <RecipeContainer />
    </>
  );
}

export default Home;
