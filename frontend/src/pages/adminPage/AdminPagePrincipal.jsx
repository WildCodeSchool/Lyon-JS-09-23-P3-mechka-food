import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import AdminUserPage from "../../components/adminPage/AdminUser/AdminUserPage";
import AdminPage from "../../components/adminPage/AdminPage";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  marginBottom: "2rem",
  color: theme.palette.text.secondary,
}));

function AdminPagePrincipal() {
  const [selectedSection, setSelectedSection] = useState("recipes");

  return (
    <div className="Home">
      <Header />
      <Sidebar />
      <Grid item xs={8}>
        <Item>Administrateur</Item>
      </Grid>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#fae078",
              ":hover": { backgroundColor: "#ffc107" },
            }}
            variant="contained"
            onClick={() => setSelectedSection("recipes")}
          >
            Tous les recettes
          </Button>
        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#fae078",
              ":hover": { backgroundColor: "#ffc107" },
            }}
            variant="contained"
            onClick={() => setSelectedSection("users")}
          >
            Tous les users
          </Button>
        </Box>
      </Container>
      {selectedSection === "recipes" && <AdminPage />}
      {selectedSection === "users" && <AdminUserPage />}
      <Navbar />
    </div>
  );
}

export default AdminPagePrincipal;
