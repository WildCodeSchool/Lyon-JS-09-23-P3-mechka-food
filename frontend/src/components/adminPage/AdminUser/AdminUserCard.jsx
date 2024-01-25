import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function AdminUserCard({
  username,
  firstname,
  lastname,
  email,
  role,
}) {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 5, boxShadow: 5 }}>
      <Button sx={{ margin: 3 }} variant="outlined">
        Supprimer
      </Button>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {firstname}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {lastname}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {role}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

AdminUserCard.propTypes = {
  //   id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};
