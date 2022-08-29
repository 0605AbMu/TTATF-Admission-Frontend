import {
  Step,
  StepContent,
  StepLabel,
  Typography,
  Box,
  Button,
  FilledInput,
} from "@mui/material";
import React from "react";

// Components
import SimpleTextField from "../Components/SimpleTextField";
import SelectField from "../Components/SelectField";
import RadioGroup from "../Components/RadioGroup";
import RegionsField from "../Components/RegionsField";
// Import static Data
import { nations } from "../staticData/nations";

export default function Step2({ index, activeStep, setActiveStep, id = undefined }) {
  const [isValid, setIsValid] = React.useState(true);
  const [completed, setCompleted] = React.useState(false);
  return (
    <Step index={index}>
      <StepLabel>
        <Typography variant="subtitle1"> OTM ma'lumotlari </Typography>
      </StepLabel>
      <StepContent TransitionProps={{ unmountOnExit: false }}>
        <Box
          component={"form"}
          display="flex"
          flexDirection={"row"}
          flexWrap="wrap"
          alignItems={"flex-start"}
          id={id}
        >
          <SimpleTextField
            name={"edu.otmNomi"}
            label="OTM nomi*"
            isValid={isValid}
            setIsValid={setIsValid}
          />
          <SelectField
            name={"edu.talimTuri"}
            label="Ta'lim turi*"
            items={["Kunduzgi", "Kechgi"]}
            isValid={isValid}
            setIsValid={setIsValid}
          />
          <SelectField
            name={"edu.talimShakli"}
            label="Ta'lim shakli*"
            items={["Kunduzgi", "Kechgi"]}
            isValid={isValid}
            setIsValid={setIsValid}
          />
          <SimpleTextField
            name={"edu.shifr"}
            label="Shifr*"
            isValid={isValid}
            setIsValid={setIsValid}
          />
          <SelectField
            name={"edu.mutaxassislik"}
            label="Mutaxassislik*"
            items={["Kunduzgi", "Kechgi"]}
            isValid={isValid}
            setIsValid={setIsValid}
          />
          <SelectField
            name={"edu.talabaToifasi"}
            label="Talaba Toifasi*"
            items={["Kunduzgi", "Kechgi"]}
            isValid={isValid}
            setIsValid={setIsValid}
          />

          <Box sx={{ width: "100%" }}>
            <Button
              variant="contained"
              sx={{ margin: 1 }}
              onClick={(e) => {
                if (e.currentTarget.form.checkValidity()) {
                  setActiveStep(++activeStep);
                  setCompleted(true);
                } else {
                  e.currentTarget.form.reportValidity();
                }
              }}
            >
              Keyingi qadam
            </Button>
            <Button
              disabled={activeStep == 0 ? true : false}
              variant="outlined"
              sx={{ margin: 1 }}
              onClick={(e) => {
                console.log(activeStep);
                setActiveStep(--activeStep);
              }}
            >
              Oldingisi
            </Button>
          </Box>
        </Box>
      </StepContent>
    </Step>
  );
}
