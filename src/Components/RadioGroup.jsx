import React from "react";
import {
  Box,
  Typography,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@mui/material";

export default function SimpleTextField({
  name,
  label,
  setIsValid,
  isValid,
  items,
}) {
  return (
    <Box sx={{ width: "300px", margin:1}}>
      <InputLabel id="label"> {label}</InputLabel>
      <RadioGroup name={name} required aria-required="true"  >
        <FormControlLabel label="Ha" control={<Radio/>} value="Ha" />
        <FormControlLabel label="Yo'q" control={<Radio/>} value="Yo'q" />
      </RadioGroup>
    </Box>
  );
}
