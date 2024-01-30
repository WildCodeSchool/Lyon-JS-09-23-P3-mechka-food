import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RecipeInformations from "./informationsRecipe/RecipeInformations";
import IngredientByRecipe from "./ingredients/IngredientByRecipe";
import InstructionByRecipe from "./instructions/InstructionByRecipe";
import styles from "./RecipeById.module.css";
// import ConnectionVerification from "../modal/ConnectionVerification";
import { useUserContext } from "../../context/userContext";

export default function RecipeById() {
  const [recipes, setRecipes] = useState(null);
  const { id: recipeId } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const { userData, logout } = useUserContext();
  const [allFav, setAllFav] = useState([]);

  const navigate = useNavigate();

  const handleChangeFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const logoutFromSession = () => {
    logout();
    navigate("/login");
  };

  // useEffect pour aller chercher l'id de la recette et afficher la photo, les informations (titre...)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/recipes/${recipeId}`)
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api//favorites/${recipeId}`)
      .then((response) => response.json())
      .then((data) => setAllFav(data));
  }, []);

  // Code pour lier ce qui est des favorites

  useEffect(() => {
    if (allFav.length === 0) {
      setIsFavorite(false);
    } else {
      setIsFavorite(true);
    }
  }, [allFav]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (userData !== "null") {
        const response = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/api/recipes/${recipeId}/favorite`,
          {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId: userData.user.id, recipeId }),
          }
        );
        if (response.status === 201) {
          handleChangeFavorite();
        } else {
          console.error(`failed add to favorite, status ${response.status}`);
        }
      }
    } catch (err) {
      console.error("Error posting favorite:", err);
    }
  };
  const handleDelete = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/recipes/${recipeId}/deleteFavorite`,
        {
          method: "delete",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: userData.user.id, recipeId }),
        }
      );
      if (response.status === 201) {
        handleChangeFavorite();
      } else {
        console.error(`failed delete to favorite, status ${response.status}`);
      }
    } catch (err) {
      console.error("Error posting favorite:", err);
    }
  };

  return (
    <section className={styles.RecipeByIdContainer}>
      <div className={styles.containerGlobal}>
        {/* {userData === "null" ? (
          <button type="button">test</button>
        ) : (
          <ConnectionVerification />
        )} */}
        {!isFavorite ? (
          <svg
            onClick={isFavorite === false ? handleSubmit : handleDelete}
            className={styles.svgCoeur}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="#000000"
              d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
            />
          </svg>
        ) : (
          <svg
            onClick={isFavorite === false ? handleSubmit : handleDelete}
            className={styles.svgCoeur}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="#f50000"
              d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
            />
          </svg>
        )}

        {recipes !== null && (
          <RecipeInformations
            image={recipes.image_url}
            title={recipes.title}
            time={recipes.global_time}
            number={recipes.number_persons}
            description={recipes.descriptions}
          />
        )}
      </div>
      <button type="button" onClick={logoutFromSession}>
        deco
      </button>
      <div>
        <IngredientByRecipe />
        <InstructionByRecipe />
      </div>
    </section>
  );
}
