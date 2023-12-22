import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import RecipeById from "../../components/recipeById/RecipeById";
import styles from "./RecipePage.module.css";

export default function RecipePage() {
  return (
    <>
      <div className={styles.recipePageHeader}>
        <Header />
      </div>
      <RecipeById />
      <Navbar />
    </>
  );
}
