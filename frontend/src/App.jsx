import "./App.css";
import RecipeContainer from "./components/recipesHome/RecipeContainer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <RecipeContainer />
    </div>
  );
}

export default App;
