import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "../recipesHome/RecipeCard";

export default function CategoryById() {
  const [category, setCategory] = useState(null);
  const idCategory = useParams();

  useEffect(() => {
    fetch(`http://localhost:3310/api/category/${idCategory.id}`)
      .then((response) => response.json())
      .then((data) => {
        setCategory(data); // Mettre à jour l'état avec les données récupérées
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des données :",
          error
        );
      });
  }, []); // Utilisation de idCategory comme dépendance pour recharger les données lorsque l'ID change

  return (
    <div>
      {category &&
        category.map((categorie) => (
          <RecipeCard
            key={categorie.id}
            id={categorie.id}
            image={categorie.image_url}
            title={categorie.title}
            description={categorie.description}
          />
        ))}
    </div>
  );
}
