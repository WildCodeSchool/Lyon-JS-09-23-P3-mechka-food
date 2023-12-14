import "./App.css";

import RecipesCarrousel from "./components/recipesCarrouselHome/RecipesCarrousel";
import RecipeContainer from "./components/recipesHome/RecipeContainer";


function App() {
  return (
    <div className="App">
      <h1>Mechka Food</h1>
      <RecipesCarrousel />
      <RecipeContainer />
    </div>
  );
}

export default App;
