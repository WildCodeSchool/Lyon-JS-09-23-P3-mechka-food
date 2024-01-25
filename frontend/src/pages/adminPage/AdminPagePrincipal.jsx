import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

function AdminPagePrincipal() {
  return (
    <div className="Home">
      <Header />
      <Sidebar />
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
          <Link to="/admin/recipes">
            <Button variant="contained">Tous les recettes</Button>
          </Link>
        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/admin/users">
            <Button variant="contained">Tous les users</Button>
          </Link>{" "}
        </Box>
      </Container>
      <Navbar />
    </div>
  );
}

export default AdminPagePrincipal;
