import "./App.css";

import RecipesCarrousel from "./components/recipesCarrouselHome/RecipesCarrousel";
import RecipeContainer from "./components/recipesHome/RecipeContainer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <RecipesCarrousel />
      <RecipeContainer />
    </div>
  );
}

export default App;
