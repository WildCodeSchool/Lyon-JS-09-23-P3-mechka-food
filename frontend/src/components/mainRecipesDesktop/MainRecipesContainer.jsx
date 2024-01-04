import { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Link } from "react-router-dom";
import styles from "./MainRecipesContainer.module.css";

export default function MainRecipesContainer() {
  const [random, setRandom] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/recipes");
        const data = await response.json();

        if (data !== null) {
          const shuffled = [...data].sort(() => 0.5 - Math.random());
          setRandom(shuffled.slice(0, 5));
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  return (
    <section className={styles.positionRecipes}>
      <ImageList
        sx={{ width: 500, height: 450 }}
        variant="woven"
        cols={3}
        gap={8}
      >
        {random &&
          random.map((recipe) => (
            <ImageListItem key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}>
                <img
                  className={styles.imageCardRecipes}
                  srcSet={`${recipe.image_url}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  src={`${recipe.image_url}?w=161&fit=crop&auto=format`}
                  alt={recipe.title}
                  loading="lazy"
                />
                <h2>{recipe.title}</h2>
              </Link>
            </ImageListItem>
          ))}
      </ImageList>
    </section>
  );
}
