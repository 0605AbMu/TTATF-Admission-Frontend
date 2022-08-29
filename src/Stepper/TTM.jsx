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

export default function Step2({ index, activeStep, setActiveStep, id=undefined }) {
  const [isValid, setIsValid] = React.useState(true);
  const [completed, setCompleted] = React.useState(false);

  const handleClickofButton1 = (e) => {
    console.log(e.target.forms);
  };
  return (
    <Step index={index}>
      <StepLabel>
        <Typography variant="subtitle1"> Tugatgan Ta'lim muassasa </Typography>
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
          <RegionsField
            CountryName={"LatestEduIns.country"}
            CountryLabel="Davlatni tanlang"
            RegionName={"LatestEduIns.region"}
            RegionLabel="Viloyatni tanlang"
            DistrictName={"LatestEduIns.district"}
            DistrictLabel="Tumanni tanlang"
          />
          <SelectField
            name={"LatestEduIns.kind"}
            label={"Ta'lim muassasa turi"}
            items={["O'rta maktab", "Akademik litsey"]}
          />
          <SimpleTextField name={"LatestEduIns.yearOfGraduation"} label="Tamomlagan sanasi*" type="date" />
          <SimpleTextField name={"LatestEduIns.seriaAndNumberOfDiploma"} label = "Hujjat seriya va raqami*" />
          <SimpleTextField name={"LatestEduIns.ballofAttestat"} label = "Attestat bali*" type={"number"} />
          <SimpleTextField name={"LatestEduIns.fileOfAttestat"} label = "Attestat fayl shaklida yuklang*" type={"file"} />

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
