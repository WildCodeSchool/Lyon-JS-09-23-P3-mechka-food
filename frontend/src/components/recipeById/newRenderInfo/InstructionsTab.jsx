import { CardContent, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export default function InstructionsTab({ instructions }) {
  return (
    <Container sx={{ overflowY: "auto", height: "30vh", marginBottom: "2rem" }}>
      <ul>
        {instructions !== null &&
          instructions.map((instruction) => (
            <li key={instruction.id}>
              <CardContent
                sx={{
                  display: "flex",
                  gap: 1,
                  padding: 0,
                  paddingBottom: 0,
                }}
              >
                <Typography
                  sx={{
                    padding: 0,
                    paddingBottom: 0,
                  }}
                  variant="body2"
                  color="text.secondary"
                >
                  {instruction.step}
                </Typography>
              </CardContent>
            </li>
          ))}
      </ul>
    </Container>
  );
}
InstructionsTab.propTypes = {
  instructions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      step: PropTypes.string.isRequired,
    })
  ).isRequired,
};
