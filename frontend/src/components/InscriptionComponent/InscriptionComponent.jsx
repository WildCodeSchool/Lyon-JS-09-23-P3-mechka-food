import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

export default function InscriptionComponent() {
  // Règles de mot de passe valide et verification des conditions
  const validationRules = [
    {
      condition: /[A-Z]/,
      message: "Doit contenir au moins une lettre majuscule.",
    },
    {
      condition: /\d/,
      message: "Doit contenir au moins un chiffre.",
    },
    {
      condition: /[!@#$%^&*(),.?":{}|<>]/,
      message: "Doit contenir au moins un caractère spécial.",
    },
    {
      condition: (value) => value.length >= 8,
      message: "Doit avoir une longueur d'au moins 8 caractères.",
    },
  ];
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");

  const [isValid, setIsValid] = useState(validationRules.map(() => false));

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    // Mise à jour de l'état de validation pour chaque règles lors de la création du mot de passe en effectuant un test
    setIsValid(
      validationRules.map((rule) =>
        rule.condition.test !== undefined
          ? rule.condition.test(newPassword)
          : rule.condition(newPassword)
      )
    );
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };
  const matchingPassword = password === confirmPassword;
  const handleSubmit = (event) => {
    event.preventDefault();

    // Ajoutez le code pour la soumission du formulaire ici
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://images.pexels.com/photos/5638527/pexels-photo-5638527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h2" variant="h5">
              Inscription
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="nom"
                label="Nom"
                name="nom"
                autoComplete="nom"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="prénom"
                label="Prénom"
                name="prénom"
                autoComplete="prénom"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="pseudo"
                label="Pseudo"
                name="pseudo"
                autoComplete="pseudo"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email "
                name="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                value={password}
                // autoComplete="current-password"
                onChange={handlePasswordChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirmez mot de passe"
                type="password"
                id="confirmPassword"
                onChange={handleConfirmPassword}
                value={confirmPassword}
                // autoComplete="current-password"
              />
              <ul>
                {validationRules.map((rule, index) => (
                  <li
                    key={rule.message}
                    style={{
                      color: isValid[index] === true ? "green" : "red",
                    }}
                  >
                    {rule.message}
                  </li>
                ))}
              </ul>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
                disabled={null || !matchingPassword}
              >
                S'inscrire
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
