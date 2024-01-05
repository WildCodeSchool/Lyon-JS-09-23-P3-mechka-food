import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./InstructionByRecipe.module.css";

export default function InstructionByRecipe() {
  const idRecipe = useParams();
  const [instructions, setInstructions] = useState(null);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/recipes/instructions/${
        idRecipe.id
      }`
    )
      .then((response) => response.json())
      .then((data) => setInstructions(data));
  }, []);
  return (
    <div className={styles.apparenceCardInstructions}>
      <h4 className={styles.InstructionCardTitle}>Instructions : </h4>
      <ul className={styles.instructionByRecipeCard}>
        {instructions !== null &&
          instructions.map((instruction) => {
            return <li key={instruction.id}>{instruction.step}</li>;
          })}
      </ul>
    </div>
  );
}
