import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import InstructionsTab from "./InstructionsTab";
import IngredientsTab from "./IngredientsTab";
import TabPanel from "./TabPanel";
import styles from "../RecipeById.module.css";

export default function GeneralTab() {
  const idRecipe = useParams();

  // État pour gérer l'onglet actif
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // États pour les ingrédients et les instructions
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  // Fetch des données d'ingrédients et d'instructions
  useEffect(() => {
    const fetchData = async () => {
      const resonse = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/recipes/ingredients/${
          idRecipe.id
        }`
      );
      const data = await resonse.json();

      setIngredients(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const resonse = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/recipes/instructions/${
          idRecipe.id
        }`
      );
      const data = await resonse.json();

      setInstructions(data);
    };

    fetchData();
  }, []);

  return (
    <Container
      sx={{
        m: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "100%" }} className={styles.positionGenTab}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          {/* Onglets pour Ingrédients et Instructions */}
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Ingrédients" />
            <Tab label="Instructions" />
          </Tabs>
        </Box>
        {/* Contenu des onglets */}
        <TabPanel value={value} index={0}>
          <IngredientsTab ingredients={ingredients} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <InstructionsTab instructions={instructions} />
        </TabPanel>
      </Box>
    </Container>
  );
}
