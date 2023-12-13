import { useEffect, useState } from "react";
import RecipesCarrouselCard from "./RecipesCarrouselCard";

export default function RecipesCarrousel() {
  const [random, setRandom] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/recipes");
        const data = await response.json();

        if (data !== null) {
          const shuffled = [...data].sort(() => 0.5 - Math.random());
          setRandom(shuffled.slice(0, 3));
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      {random &&
        random.map((recipe) => (
          <RecipesCarrouselCard
            title={recipe.title}
            image={recipe.image_url}
            key={recipe.id}
          />
        ))}
    </section>
  );
}
