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

export default function Step2({
  index,
  activeStep,
  setActiveStep,
  id = undefined,
}) {
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
            defaultValue="Toshkent Tibbiyot Akademiyasi Termiz filiali"
          />
          <SelectField
            name={"edu.talimTuri"}
            label="Ta'lim turi*"
            items={["Bakalavr", "Magistratura", "Ordinatura", "Qo'shma ta'lim"]}
            isValid={isValid}
            setIsValid={setIsValid}
          />
          <SelectField
            name={"edu.talimShakli"}
            label="Ta'lim shakli*"
            items={["Kunduzgi", "Sirtqi"]}
            isValid={isValid}
            setIsValid={setIsValid}
          />

          <SelectField
            name={"edu.mutaxassislik"}
            label="Mutaxassislik*"
            id={"mutaxassislik"}
            items={[
              "55110100 - Davolash ishi",
              "55110200 - Pediatriya ishi",
              "55111100 - Xalq tabobati",
            ]}
            isValid={isValid}
            setIsValid={setIsValid}
            onChange={(e) => {
              document.getElementById("shifr").value =
                e.target.value.split(" - ")[0];
            }}
          />
          <SimpleTextField
            name="edu.shifr"
            label={"Shifr*"}
            id="shifr"
            placeholder="shifr"
          />
          <SelectField
            name={"edu.talabaToifasi"}
            label="Talaba Toifasi*"
            items={["Oddiy", "Qo'shimcha kvota yoki imtiyoz", "Qo'shma dastur"]}
            isValid={isValid}
            setIsValid={setIsValid}
          />

          <Box sx={{ width: "100%" }}>
            <Button
              variant="contained"
              sx={{ margin: 1 }}
              onClick={(e) => {
                if (e.currentTarget.form.checkValidity()) {
                  // setActiveStep(++activeStep);
                  setActiveStep(3);
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
