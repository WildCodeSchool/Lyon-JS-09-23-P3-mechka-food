import React from "react";
import { Box, Container } from "@mui/material";
import PropTypes from "prop-types";

export default function TabPanel({ children, value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Container>{children}</Container>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
