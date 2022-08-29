import React from "react";
import { Box, TextField, InputLabel } from "@mui/material";

export default function SimpleTextField({
  type,
  name,
  label,
  setIsValid = () => {},
  isValid = true,
  required = true,
  defaultValue = undefined,
  validationFunc = (s) => {
    if (s != "") {
      return true;
    } else return false;
  },
  id = undefined,
}) {
  const [inputValue, setInputValue] = React.useState("");
  const [helperText, setHelperText] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  return (
    <Box sx={{ width: "300px", margin: 1 }}>
      <InputLabel>{label}</InputLabel>
      <TextField
        required={required}
        name={name}
        type={type}
        size={"small"}
        placeholder="*"
        fullWidth
        defaultValue={type == "file" && defaultValue ? undefined : defaultValue}
        id={id}
        error={isError}
        helperText={helperText}
        onInvalid={(e) => {
          e.target.setCustomValidity("Bu yerga xato ma'lumot kiritildi!");
        }}
        // onChangeCapture = {onChange}
        onChange={(e) => {
          if (!validationFunc(e.target.value) && required) {
            e.target.setCustomValidity("Bu yerga xato ma'lumot kiritildi!");
            setHelperText("Bu yerga xato ma'lumot kiritildi!");
            setIsError(true);
          } else {
            e.target.setCustomValidity("");
            setHelperText("");
            setIsError(false);
          }
        }}
      />
    </Box>
  );
}
