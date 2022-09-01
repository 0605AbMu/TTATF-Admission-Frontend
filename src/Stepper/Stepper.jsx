import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import { CircularProgress, Snackbar, Alert, Button } from "@mui/material";

import OwnerData from "./OwnerData";
import OTM from "./OTM";
import TTM from "./TTM";
import Relations from "./Relations";
import EndOfSteps from "./EndOfSteps";
import DTM from "./DTM";
import IjtimoiyHolati from "./IjtimoiyHolati";
import axios from "../staticData/axios";

export default function VerticalLinearStepper({ stepIndex = -1 }) {
  const [activeStep, setActiveStep] = React.useState(-1);
  const [backDropToggle, setBackDropToggle] = React.useState(false);
  const [relationData, setRelationData] = React.useState([]);
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [alertData, setAlertData] = React.useState({
    message: "",
    type: "success",
  });
  // setActiveStep(stepIndex);
  // activeStep = stepIndex;
  // console.log(stepIndex);
  const EndOfForm = () => {
    setActiveStep(7);
    setBackDropToggle(true);
    var formData1 = new FormData(document.getElementById("ownerData"));
    var formData2 = new FormData(document.getElementById("OTM"));
    var formData3 = new FormData(document.getElementById("TTM"));
    var formData4 = new FormData(document.getElementById("DTM"));
    // var formData5 = new FormData(document.getElementById("relations"));
    var formData6 = new FormData(document.getElementById("IH"));

    var allFormData = new FormData();
    formData1.forEach((value, key) => {
      allFormData.append(key, value);
    });

    formData2.forEach((value, key) => {
      allFormData.append(key, value);
    });

    formData3.forEach((value, key) => {
      allFormData.append(key, value);
    });

    formData4.forEach((value, key) => {
      allFormData.append(key, value);
    });

    relationData.forEach((x) => {
      allFormData.append(x.key, x.value);
    });

    // formData5.forEach((value, key) => {
    //   allFormData.append(key, value);
    // });

    formData6.forEach((value, key) => {
      allFormData.append(key, value);
    });

    // Barcha ma'lumotlar yig'ib bo'lindi
    // Endi ularni backend ga yuborsa bo'ladi

    axios
      .postForm("/admission", allFormData, {
        headers: { "Content-Type": "multipart/form-data" },
        method: "Post",
        responseType: "json",
      })
      .then((res) => {
        setAlertData({
          message: "Muvoffaqiyatli ro'yxatdan o'tdingiz.",
          type: "success",
        });
        setTimeout(() => {
          window.location.replace(res.data);
        }, 3000);
      })
      .catch((err) => {
        console.log("Error", err);
        setAlertData({
          message: err.response.data
            ? err.response.data
            : "Noma'lum xatolik yuz berdi",
          type: "error",
        });
        setBackDropToggle(false);
        setActiveStep(6);
      })
      .finally(() => {
        setBackDropToggle(false);
        setSnackOpen(true);
      });
  };

  const handleSnackClose = React.useCallback(() => {
    setSnackOpen(false);
  });

  return (
    <Box
      sx={{
        maxWidth: "95%",
        p: 1,
        left: "50%",
        transform: "translateX(-50%)",
        position: "absolute",
      }}
      name="MainForm"
      component="form"
    >
      <Snackbar
        open={snackOpen}
        autoHideDuration={3000}
        onClose={handleSnackClose}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <Alert color={alertData.type} variant="filled" sx={{ width: "100%" }}>
          {alertData.message}
        </Alert>
      </Snackbar>
      <Backdrop open={backDropToggle}>
        <CircularProgress color="primary" /> <br></br>
        <Typography variant="h5" color="ButtonFace">
          {" "}
          Iltimos biroz kuting...
        </Typography>
      </Backdrop>
      <Button
        sx={{ left: "50%", transform: "translateX(-50%)" }}
        variant="contained"
        onClick={() => {
          setActiveStep(0);
        }}
        hidden={true}
        disabled={activeStep==-1?false:true}
      >
        Ro'yxatdan o'tishni boshlash
      </Button>
      <Stepper activeStep={activeStep} orientation="vertical">
        <OwnerData
          index={0}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          id="ownerData"
        />
        <OTM
          index={1}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          id="OTM"
        />
        <TTM
          index={2}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          id="TTM"
        />
        <DTM
          index={3}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          id="DTM"
        />
        <Relations
          index={4}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          id="relations"
          setParentRelationData={setRelationData}
        />
        <IjtimoiyHolati
          index={5}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          id="IH"
        />
        <EndOfSteps
          index={6}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          EndOfForm={EndOfForm}
        />
      </Stepper>
    </Box>
  );
}
