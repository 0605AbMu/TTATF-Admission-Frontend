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
import dataForMaqsadli from "../staticData/MaqsadliQabulUchunTumanlar";

export default function DTM({
  index,
  activeStep,
  setActiveStep,
  id = undefined,
}) {
  const [isValid, setIsValid] = React.useState(true);
  const [completed, setCompleted] = React.useState(false);
  const [isHiddenMaqsadliTuman, setIsHiddenMaqsadliTuman] =
    React.useState(true);
  const [MaqsadliTuman, setMaqsadliTuman] = React.useState([]);
  const [MaqsadliViloyat, setMaqsadliViloyat] = React.useState([]);
  const [MaqsadliActive, setMaqsadliActive] = React.useState(true);
  const MaqsadliHandleChange = React.useCallback((e) => {
    if (e.target.value === "Yo'q") {
      setMaqsadliViloyat([]);
      setMaqsadliTuman([]);
      return;
    }

    const OTMData = new FormData(document.getElementById("OTM"));
    const shifr = OTMData.get("edu.mutaxassislik").split(" - ")[0];
    if (!shifr || dataForMaqsadli[shifr] === undefined) {
      setMaqsadliViloyat([]);
      setMaqsadliTuman([]);
      return;
    }
    setMaqsadliViloyat((x) => {
      return Object.keys(dataForMaqsadli[shifr]).map((x) => String(x));
    });
  });

  React.useEffect(() => {
    const OTMData = new FormData(document.getElementById("OTM"));
    const shifr = OTMData.get("edu.mutaxassislik").split(" - ")[0];
    if (shifr === "55111100") setMaqsadliActive(false);
    else setMaqsadliActive(true);
  });

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
          <SimpleTextField name="DTM.IdRaqam" label="Qaydnoma ID raqami" />
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
            name={MaqsadliViloyat.length !== 0 ? undefined : "DTM.Maqsadli"}
            label={"Maqsadli qabul*"}
            disabled={!MaqsadliActive}
            items={["Yo'q", "Ha"]}
            onChange={MaqsadliHandleChange}
          />
          <SelectField
            name={
              MaqsadliViloyat && MaqsadliViloyat.length === 0
                ? undefined
                : "DTM.Maqsadli.viloyat"
            }
            label={"Qaysi viloyat?*"}
            items={MaqsadliViloyat}
            onChange={(e) => {
              const OTMData = new FormData(document.getElementById("OTM"));
              const shifr = OTMData.get("edu.mutaxassislik").split(" - ")[0];
              console.log(dataForMaqsadli[shifr][e.target.value]);
              if (
                !e.target.value ||
                !shifr ||
                !dataForMaqsadli[shifr][e.target.value]
              ) {
                console.log("NOne");
                setMaqsadliTuman([]);
                return;
              }
              setMaqsadliTuman(dataForMaqsadli[shifr][e.target.value]);
            }}
            hidden={MaqsadliViloyat.length === 0 ? true : false}
          />
          <SelectField
            hidden={MaqsadliTuman.length === 0 ? true : false}
            name={
              MaqsadliTuman && MaqsadliTuman.length === 0
                ? undefined
                : "DTM.Maqsadli.tuman"
            }
            label={"Qaysi tuman?*"}
            items={MaqsadliTuman}
          />

          <SelectField
            name="DTM.TulovShakli"
            label={"To'lov shakli"}
            items={[
              "Davlat granti",
              "To'lov-shartnoma",
              "Tabaqalashtirilgan to'lov-shartnoma",
            ]}
            defaultValue=""
          />
          <SelectField
            name="DTM.QKDQ"
            label={"Qo'shimcha kvota doirasida qabul"}
            items={[
              "Mavjud emas",
              "Harbiy xizmatchining farzandi",
              "IIV tarkibiga kiruvchi organ xodimi farzandi",
              "Bojxona organlari xodimining farzandi",
              "Besh yil mehnat stajiga ega bo'lgan xotin-qizlar",
              "Nogironligi bo'lgan shaxslar",
              '"Mehribonlik uyi" va Bolalar shaharchasi bitiruvchilari bo\'lgan chin yetimlar',
              "Harbiy qism qo'mondonligi tavsiyanomasiga ega abituriyentlar",
              "Faol va iqtidorli xotin-qizlar",
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
