import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styles from "./Category.module.css";

const categories = [
  {
    id: 1,
    name: "Entrée",
    image: "https://ideogram.ai/api/images/direct/WOreRJGDQYuQD3Bd7HWXIg.jpg",
    description:
      "Découvrez l'art des débuts gastronomiques avec nos entrées délicieusement créatives. Des saveurs fraîches et des combinaisons audacieuses vous attendent, préparant le terrain pour un repas mémorable. Laissez-vous séduire par ces préludes culinaires exquis.",
  },
  {
    id: 2,
    name: "Plat",
    image: "https://ideogram.ai/api/images/direct/-o4CWzygTuWWqNfhMm84bg.jpg",
    description:
      "Explorez l'essence même d'un repas exceptionnel avec nos plats principaux. Des créations culinaires riches en saveurs et en textures, conçues pour satisfaire les palais les plus exigeants. Laissez-vous emporter par une symphonie de délices, où chaque plat principal est une invitation à l'expérience gastronomique par excellence.",
  },
  {
    id: 3,
    name: "Dessert",
    image: "https://ideogram.ai/api/images/direct/VQxSmIp3RkCEWcN9ZXMV2w.jpg",
    description:
      "Plongez dans l'ultime délice sucré avec nos desserts exquis. Chaque création est une œuvre d'art sucrée, combinant saveurs divines et textures délicates. Terminez votre repas en beauté avec nos desserts, une symphonie sucrée pour émerveiller vos papilles.",
  },
];

export default function Category() {
  return (
    <section className={styles.globalContainer}>
      {categories &&
        categories.map((categorie) => (
          <Card key={categorie.id}>
            <CardActionArea className={styles.categoryCard}>
              <CardMedia
                component="img"
                image={categorie.image}
                alt="categorie"
                className={styles.categoryImage}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className={styles.categoryTitle}
                >
                  {categorie.name}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                  {categorie.description}
                </Typography> */}
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
    </section>
  );
}
