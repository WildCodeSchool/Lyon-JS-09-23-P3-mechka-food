import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "../recipesHome/RecipeCard";
import styles from "./CategoryById.module.css";
import Header from "../Header/Header";
import Sidebar from "../sidebar/Sidebar";

export default function CategoryById() {
  const [category, setCategory] = useState(null);
  const idCategory = useParams();

  useEffect(() => {
    fetch(`http://localhost:3310/api/category/${idCategory.id}`)
      .then((response) => response.json())
      .then((data) => {
        setCategory(data);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des données :",
          error
        );
      });
  }, []);

  return (
    <>
      <Header />
      <Sidebar />
      <div className={styles.CategoryContainer}>
        {category &&
          category.map((categorie) => (
            <RecipeCard
              key={categorie.id}
              id={categorie.id}
              image={categorie.image_url}
              title={categorie.title}
              description={categorie.descriptions}
            />
          ))}
      </div>
    </>
  );
}
