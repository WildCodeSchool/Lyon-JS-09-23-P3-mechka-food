import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import PropTypes from "prop-types";

export default function InstructionsUpdate({
  instructions,
  setInstructions,
  maxLength,
}) {
  const handleChangeInstruction = (e, index) => {
    if (e.target.value.length <= maxLength) {
      const upadatedInstructions = [...instructions];
      upadatedInstructions[index] = {
        ...upadatedInstructions[index],
        step: e.target.value,
      };
      setInstructions(upadatedInstructions);
    }
  };

  const handleSubmitInstructions = (e) => {
    e.preventDefault();
    setInstructions([...instructions, { step: "" }]);
  };

  return (
    <>
      {instructions.map((instruction, index) => (
        <TextField
          key={instruction.id}
          value={instruction.step}
          onChange={(e) => handleChangeInstruction(e, index)}
          margin="normal"
          required
          fullWidth
          id={`instruction-${instruction.id}`}
          name="instructio,"
          autoFocus
          label={`Instruction ${index + 1}`}
        />
      ))}
      <Fab
        onClick={handleSubmitInstructions}
        color="primary"
        aria-label="add"
        sx={{ background: "#FAE078", color: "black" }}
      >
        <AddIcon />
      </Fab>
    </>
  );
}

InstructionsUpdate.propTypes = {
  maxLength: PropTypes.number.isRequired,
  instructions: PropTypes.arrayOf(
    PropTypes.shape({
      step: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  setInstructions: PropTypes.func.isRequired,
};
