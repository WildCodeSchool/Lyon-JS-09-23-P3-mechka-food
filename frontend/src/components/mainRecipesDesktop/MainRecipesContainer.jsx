import { useState, useEffect } from "react";
import MainRecipes from "./MainRecipes";
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
    <div className={styles.gridContainer}>
      <section className={styles.positionRecipes}>
        {random &&
          random.map((recipe) => (
            <MainRecipes
              key={recipe.id}
              id={recipe.id}
              image={recipe.image_url}
              title={recipe.title}
            />
          ))}
      </section>
    </div>
  );
}
