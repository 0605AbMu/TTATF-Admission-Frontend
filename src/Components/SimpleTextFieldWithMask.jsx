import React from "react";
import { Box, TextField, InputLabel } from "@mui/material";
import ReactInputMask from "react-input-mask";
export default function SimpleTextFieldWithMask({
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
  mask = "*",
  placeholder = "*",
  alwaysUpper = false,
}) {
  const [inputValue, setInputValue] = React.useState("");
  const [helperText, setHelperText] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  return (
    <Box sx={{ width: "300px", margin: 1 }}>
      <InputLabel>{label}</InputLabel>
      <ReactInputMask
        maskChar={"_"}
        mask={mask}
        formatChars={{
          9: "[0-9]",
          A: "[A-Z]",
          a: "[a-z]",
          L: "[A-Za-z]",
        }}
        contentEditable={false}
        onChange={(e) => {
          if (alwaysUpper) {
            e.currentTarget.value = e.currentTarget.value.toUpperCase();
          }
          if (!validationFunc(e.target.value.replace(/_/g, "")) && required) {
            e.target.setCustomValidity("Bu yerga xato ma'lumot kiritildi!");
            setHelperText("Bu yerga xato ma'lumot kiritildi!");
            setIsError(true);
          } else {
            e.target.setCustomValidity("");
            setHelperText("");
            setIsError(false);
          }
        }}
        defaultValue={type == "file" && defaultValue ? undefined : defaultValue}
      >
        {() => {
          return (
            <TextField
              required={required}
              name={name}
              type={type}
              size={"small"}
              fullWidth
              placeholder={placeholder}
              id={"testEl"}
              error={isError}
              helperText={helperText}
              onInvalid={(e) => {
                e.target.setCustomValidity("Bu yerga xato ma'lumot kiritildi!");
              }}
            />
          );
        }}
      </ReactInputMask>
    </Box>
  );
}
