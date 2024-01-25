import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";

export default function CategoriesSelect({
  categories,
  setUserCategoryId,
  userCategoryId,
}) {
  const handleChangeCategory = (e) => {
    setUserCategoryId(e.target.value);
  };
  return (
    <FormControl style={{ marginTop: "1rem", marginBottom: "2rem" }} fullWidth>
      <InputLabel id="numberPersons">Category</InputLabel>
      <Select
        labelId="categories"
        id="categories"
        value={userCategoryId}
        label="Category"
        onChange={handleChangeCategory}
      >
        {categories.map((category) => {
          return (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

CategoriesSelect.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setUserCategoryId: PropTypes.func.isRequired,
  userCategoryId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};
