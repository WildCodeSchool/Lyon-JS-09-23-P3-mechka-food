import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
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
