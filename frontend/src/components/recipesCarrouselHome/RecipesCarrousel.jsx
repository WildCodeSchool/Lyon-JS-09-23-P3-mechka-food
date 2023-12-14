import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import RecipesCarrouselCard from "./RecipesCarrouselCard";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <Carousel>
        {random &&
          random.map((recipe) => (
            <Carousel.Item interval={1000} key={recipe.id}>
              <RecipesCarrouselCard
                key={recipe.id}
                image={recipe.image_url}
                title={recipe.title}
              />
            </Carousel.Item>
          ))}
      </Carousel>
    </section>
  );
}
