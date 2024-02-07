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
        <>
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
          <div>
            {instruction.step.length === 0 && (
              <p> 🚨 Ce champ ne peut pas être vide.</p>
            )}
            {instruction.step.length > 0 && instruction.step.length < 249 && (
              <p> ✅ Ce champ est valide.</p>
            )}
            {instruction.step.length >= 249 && (
              <p>⚠️ La description ne doit pas dépasser 255 caractères.</p>
            )}
          </div>
        </>
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
