import TextField from "@mui/material/TextField";
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
