import RecipesCarrousel from "../../components/recipesCarrouselHome/RecipesCarrousel";
import RecipeContainer from "../../components/recipesHome/RecipeContainer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

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
