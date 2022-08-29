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
import CheckBoxGroup from "../Components/CheckBoxGroup";
// Import static Data
import { nations } from "../staticData/nations";

export default function IjtimoiyHolati({ index, activeStep, setActiveStep, id = undefined }) {
  const [isValid, setIsValid] = React.useState(true);
  const [completed, setCompleted] = React.useState(false);
  return (
    <Step index={index}>
      <StepLabel>
        <Typography variant="subtitle1">Ijtimoiy holati</Typography>
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
          <CheckBoxGroup
            name="Holati.ijtimoiy.daftar"
            label="Daftarga kiritilganmi"
            items={["Temir daftar", "Yoshlar dattari", "Ayollar daftari"]}
          />
          <CheckBoxGroup
            name="Holati.ijtimoiy.qarindoshi"
            label="Oila a'zolaringizda biri Daftarga kirtilganmi"
            items={["Temir daftar", "Yoshlar dattari", "Ayollar daftari"]}
          />
          <CheckBoxGroup
            hasSelect={false}
            name="Holati.ijtimoiy.kamTaminlangan"
            label="Kam ta'minlangan oila farzandlari"
            items={["Temir daftar", "Yoshlar dattari", "Ayollar daftari"]}
          />
          <CheckBoxGroup
            hasSelect={false}
            name="Holati.ijtimoiy.armiya"
            label="Muddatli harbiy xizmatdan qaytganlar"
            items={["Temir daftar", "Yoshlar dattari", "Ayollar daftari"]}
          />
          <CheckBoxGroup
            hasSelect={true}
            name="Holati.ijtimoiy.nogironlik"
            label="Nogironligi mavjud"
            items={["1-guruh", "2-guruh", "3-guruh", "Zaif ko'ruvchi", "...."]}
          />
          <CheckBoxGroup
            hasSelect={true}
            name="Holati.ijtimoiy.yetim"
            label="Yetim talabalar"
            items={["Chin yetim", "Yarim yetim", "Ijtimoiy yetim"]}
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
