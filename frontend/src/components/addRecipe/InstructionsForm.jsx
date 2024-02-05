import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import PropTypes from "prop-types";

export default function InstructionsForm({
  instructions,
  setInstructions,
  maxLength,
}) {
  // Instructions

  const handleChangeInstructions = (e, id) => {
    if (e.target.value.length <= maxLength) {
      const updatedInstructions = instructions.map((instruction) =>
        instruction.id === id
          ? { ...instruction, step: e.target.value }
          : instruction
      );
      setInstructions(updatedInstructions);
    }
  };

  const handleSubmitInstructions = (e) => {
    e.preventDefault();
    setInstructions([...instructions, { id: instructions.length, step: "" }]);
  };

  return (
    <>
      {instructions !== null &&
        instructions.map((instruction) => (
          <TextField
            key={instruction.id}
            value={instruction.step}
            onChange={(e) => handleChangeInstructions(e, instruction.id)}
            margin="normal"
            fullWidth
            id={`Nouvelle instruction ${instruction.id}`}
            label="Nouvelle instruction"
            name={`Nouvelle instruction ${instruction.id}`}
            autoFocus
          />
        ))}
      <Fab
        onClick={handleSubmitInstructions}
        color="primary"
        aria-label="add"
        sx={{ background: "#FAE078", color: "black", mt: "1rem", mb: "1.5rem" }}
      >
        <AddIcon />
      </Fab>
    </>
  );
}

InstructionsForm.propTypes = {
  maxLength: PropTypes.number.isRequired,
  instructions: PropTypes.arrayOf(
    PropTypes.shape({
      step: PropTypes.string.isRequired,
    })
  ).isRequired,
  setInstructions: PropTypes.func.isRequired,
};
