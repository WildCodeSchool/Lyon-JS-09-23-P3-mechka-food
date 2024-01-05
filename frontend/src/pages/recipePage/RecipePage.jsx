import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import RecipeById from "../../components/recipeById/RecipeById";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./RecipePage.module.css";

export default function RecipePage() {
  return (
    <>
      <Sidebar />
      <div className={styles.recipePageHeader}>
        <Header />
      </div>
      <RecipeById />
      <Navbar />
    </>
  );
}
