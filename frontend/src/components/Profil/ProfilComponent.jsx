import React, { useState, useEffect } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { Container } from "@mui/material";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import styles from "./ProfilComponent.module.css";
import Sidebar from "../sidebar/Sidebar";

export default function ProfilComponent() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/user")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  });

  return (
    <>
      <Header />
      <Sidebar />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <section className={styles.outline}>
          <img
            className={styles.imageProfil}
            src="https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Profil"
          />
        </section>
        <Card
          orientation="horizontal"
          sx={{
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
            <img
              src="https://images.pexels.com/photos/8093599/pexels-photo-8093599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              srcSet="https://images.pexels.com/photos/8093599/pexels-photo-8093599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          {users.map((user) => (
            <CardContent key={user.id}>
              <Typography fontSize="xl" fontWeight="lg">
                Username: {user.username}
              </Typography>
              <Typography
                level="body-sm"
                fontWeight="lg"
                textColor="text.tertiary"
              >
                Prénom: {user.firstname}
              </Typography>
              <Typography
                level="body-sm"
                fontWeight="lg"
                textColor="text.tertiary"
              >
                Nom: {user.lastname}
              </Typography>
              <Sheet
                sx={{
                  bgcolor: "background.level1",
                  borderRadius: "sm",
                  p: 1.5,
                  my: 1.5,
                  display: "flex",
                  gap: 2,
                  "& > div": { flex: 1 },
                }}
              >
                <div>
                  <Typography level="body-xs" fontWeight="lg">
                    Recipes
                  </Typography>
                  <Typography fontWeight="lg">34</Typography>
                </div>
                <div>
                  <Typography level="body-xs" fontWeight="lg">
                    Comment
                  </Typography>
                  <Typography fontWeight="lg">980</Typography>
                </div>
                <div>
                  <Typography level="body-xs" fontWeight="lg">
                    Rating
                  </Typography>
                  <Typography fontWeight="lg">8.9</Typography>
                </div>
              </Sheet>
            </CardContent>
          ))}
        </Card>
      </Container>
      <Navbar />
    </>
  );
}
