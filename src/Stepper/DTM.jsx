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

export default function DTM({ index, activeStep, setActiveStep, id=undefined }) {
  const [isValid, setIsValid] = React.useState(true);
  const [completed, setCompleted] = React.useState(false);
  const [isHiddenMaqsadliTuman, setIsHiddenMaqsadliTuman] =
    React.useState(true);
  return (
    <Step index={index}>
      <StepLabel>
        <Typography variant="subtitle1"> DTM ma'lumotlari </Typography>
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
          <SimpleTextField name="DTM.IdRaqam" label="Qaynoma ID raqami" />
          <SimpleTextField
            name="DTM.JVRRaqami"
            label="Javoblar varaqasi raqami"
          />
          <SelectField
            name="DTM.TalimTili"
            label={"Ta'lim Tili"}
            items={["O'zbekcha", "Ruscha"]}
          />
          <SimpleTextField
            name="DTM.Ball.Umumiy"
            label={"To'plagan ball"}
            type={"number"}
          />
          <SimpleTextField
            name="DTM.Ball.OnaTili"
            label={"Ona tili fanidan to'plagan ball"}
            type={"number"}
          />
          <SimpleTextField
            name="DTM.Ball.Matematika"
            label={"Matematika fanidan to'plagan ball"}
            type={"number"}
          />
          <SimpleTextField
            name="DTM.Ball.Tarix"
            label={"O'zbekiston tarixi fanidan to'plagan ball"}
            type={"number"}
          />
          <SimpleTextField
            name="DTM.Ball.Kimyo"
            label={"Kimyo fanidan to'plagan ball"}
            type={"number"}
          />
          <SimpleTextField
            name="DTM.Ball.Biologiya"
            label={"Biologiya fanidan to'plagan ball"}
            type={"number"}
          />
          <SimpleTextField
            name="DTM.Ball.MFBall"
            label={"Milliy test/Fan olimpiada bali"}
            type={"number"}
          />
          <SimpleTextField
            name="DTM.Ball.IELTS"
            label={"Chet tili sertifikat bali"}
            type={"number"}
          />
          <SimpleTextField
            name="DTM.Ball.Imtiyoz"
            label={"Imtiyoz bali"}
            type={"number"}
          />
          <SelectField
            name="DTM.Maqsadli"
            label={"Maqsadli qa'bul"}
            items={["Yo'q", "Ha"]}
            defaultValue={""}
            onChange={(e) => {
              if (e.target.value === "Ha") {
                setIsHiddenMaqsadliTuman(false);
              } else setIsHiddenMaqsadliTuman(true);
            }}
          />
          <SelectField
            name="DTM.MaqsadliTuman"
            disabled={isHiddenMaqsadliTuman}
            label={"Qayer uchun?"}
            items={["G'uzor tumani", "Dehqonobod tumani"]}
            defaultValue=""
          />

          <SelectField
            name="DTM.TulovShakli"
            label={"To'lov shakli"}
            items={["Grant", "To'lov-kontrakt"]}
            defaultValue=""
          />
          <SelectField
            name="DTM.QKDQ"
            label={"Qo'shimcha kvota doirasida qabul"}
            items={[
              "Harbiy xizmatchining farzandi",
              "IIV tarkibiga kiruvchi xodimi farzandi",
            ]}
            defaultValue=""
          />
          <SimpleTextField
            name={"fileRuxsatnoma"}
            label="DTM Ruxsatnomasini yuklang"
            type="file"
          />
          <SimpleTextField
            name={"fileJavoblarVaraqasi"}
            label="DTM javoblar varaqasini yuklang"
            type="file"
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
