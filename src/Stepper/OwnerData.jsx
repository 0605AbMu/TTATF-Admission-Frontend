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

// Import static Data
import { nations } from "../staticData/nations";
import RegionsField from "../Components/RegionsField";

export default function OwnerData({ index, activeStep, setActiveStep, id=undefined }) {
  const [isValid, setIsValid] = React.useState(true);
  const [completed, setCompleted] = React.useState(false);
  const handleClickofButton1 = (e) => {
    console.log(e.target.forms);
  };

  function jshirValidation(s) {
    if (s.length !== 14) return false;
    else return true;
  }

  return (
    <Step index={index}>
      <StepLabel>
        <Typography variant="subtitle1"> Shaxsiy ma'lumotlar </Typography>
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
            name={"name1"}
            label="Ism*"
            isValid={isValid}
            setIsValid={setIsValid}
          />
          <SimpleTextField
            name={"name2"}
            label="Familiya*"
            isValid={isValid}
            setIsValid={setIsValid}
          />
          <SimpleTextField
            name={"name3"}
            label="Sharif*"
            isValid={isValid}
            setIsValid={setIsValid}
          />
          <RegionsField
            CountryLabel={"Tug'ulgan Davlatingiz*"}
            CountryName="birthLocation.Country"
            RegionLabel={"Viloyat*"}
            RegionName={"birthLocation.Region"}
            DistrictLabel={"Tuman*"}
            DistrictName="birthLocation.District"
          />
          <SimpleTextField
            type="date"
            name="birthDate"
            label={"Tug'ulgan sanasi"}
            isValid={isValid}
            setIsValid={setIsValid}
          />
          <SelectField
            name="nation"
            label="Millati*"
            items={nations}
            isValid={isValid}
            setIsValid={setIsValid}
          />
          <SelectField
            name="citizenship"
            label="Fuqarolik*"
            items={nations}
            isValid={isValid}
            setIsValid={setIsValid}
          />
          <SelectField
            name="gender"
            label="Jinsi*"
            items={["Erkak", "Ayol"]}
            isValid={isValid}
            setIsValid={setIsValid}
          />

          <SimpleTextField
            name="pasport"
            label={"Passportingiz seriya va raqami*"}
            isValid={isValid}
            setIsValid={setIsValid}
          />
          <SimpleTextField
            name={"jshir"}
            label="JSHSHIR-kod*"
            type="number"
            validationFunc={jshirValidation}
          />
          <SimpleTextField
            name={"whenIssuedBy"}
            label="Pasport berilgan sana*"
            type="date"
          />
          <SimpleTextField
            type="file"
            name="filePassport"
            label={"Passportingiz rasmini yuklang*"}
            isValid={isValid}
            setIsValid={setIsValid}
          />
          <SimpleTextField
            type="file"
            name="file3x4"
            label={"3x4 shaklidagi rasmingizni yuklang*"}
            isValid={isValid}
            setIsValid={setIsValid}
          />
          <RegionsField
            CountryLabel={"Hozirda yashayotgan davlatingiz*"}
            CountryName="DYM.Country"
            RegionLabel={"Viloyat*"}
            RegionName="DYM.Region"
            DistrictLabel={"Tuman*"}
            DistrictName="DYM.District"
          />
          <SimpleTextField name={"DYM.manzil"} label="Manzilni kiriting*" />

          <SimpleTextField
            name={"phone"}
            label="Telefon raqamingiz*"
            type={"tel"}
          />
          <SimpleTextField
            name={"email"}
            label="E - mail"
            type={"email"}
            required={false}
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
