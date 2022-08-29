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
  Radio,
  Switch,
  Paper,
} from "@mui/material";

import SelectField from "./SelectField";

export default function CheckBoxGroup({
  name,
  label,
  setIsValid,
  isValid,
  hasSelect = true,
  items = [],
}) {
  const [disabled, setDisabled] = React.useState(true);
  const [value, setValue] = React.useState("");
  const [componentName, setComponentName] = React.useState(undefined);
  return (
    <Box sx={{ width: "310px", margin: 1 }} component={Paper}>
      {/* <InputLabel id="label"> {label}</InputLabel> */}
      <FormControlLabel
        sx={{ ml: 0 }}
        label={label}
        control={
          <Switch
            defaultValue={false}
            onChange={(e) => {
              if (disabled === true) {
                setDisabled(false);
                setComponentName(name);
              } else {
                setDisabled(true);
                setComponentName(undefined);
              }
            }}
            value={true}
            name={hasSelect ? undefined : name}
          />
        }
      />
      {hasSelect === true ? (
        <SelectField
          name={componentName}
          value={value}
          items={items}
          disabled={disabled}
        />
      ) : (
        <></>
      )}
    </Box>
  );
}
