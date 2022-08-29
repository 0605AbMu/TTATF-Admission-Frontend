import React from "react";
import {
  Box,
  Typography,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

export default function SelectField({
  name,
  label,
  setIsValid,
  isValid,
  items,
  defaultValue,
  willBeEmpty = false,
  onChange,
  id,
  disabled = false
}) {
  return (
    <Box sx={{ width: "300px", margin: 1,  }} 
    // sx={{display: hidden?"none":"block"}}
    
    >
      <InputLabel id="label"> {label}</InputLabel>
      <Select
        name={name}
        sx={{ width: "100%" }}
        size={"small"}
        id={id}
        defaultValue={items && items[0] ? items[0] : ""}
        required
        labelId="label"
        disabled={disabled}
        onChange={onChange}
      >
        {items.map((x) => {
          return (
            <MenuItem key={x} value={x}>
              {x}
            </MenuItem>
          );
        })}
      </Select>
    </Box>
  );
}
