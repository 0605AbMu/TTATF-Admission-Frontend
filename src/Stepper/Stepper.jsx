import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import { CircularProgress } from "@mui/material";

import OwnerData from "./OwnerData";
import OTM from "./OTM";
import TTM from "./TTM";
import Relations from "./Relations";
import EndOfSteps from "./EndOfSteps";
import DTM from "./DTM";
import IjtimoiyHolati from "./IjtimoiyHolati";
import axios from "axios";

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(4);
  const [backDropToggle, setBackDropToggle] = React.useState(false);
  const [AllFormData, setAllFormData] = React.useState(new FormData());
  const EndOfForm = () => {
    setActiveStep(6);
    // setBackDropToggle(true);

    let formData1 = new FormData(document.getElementById("ownerData"));
    let formData2 = new FormData(document.getElementById("OTM"));
    let formData3 = new FormData(document.getElementById("TTM"));
    let formData4 = new FormData(document.getElementById("DTM"));
    let formData5 = new FormData(document.getElementById("relations"));
    let formData6 = new FormData(document.getElementById("IH"));

    setAllFormData((x) => {
      formData1.forEach((value, key) => {
        x.append(key, value);
      });
      formData2.forEach((value, key) => {
        x.append(key, value);
      });
      formData3.forEach((value, key) => {
        x.append(key, value);
      });
      formData4.forEach((value, key) => {
        x.append(key, value);
      });
      formData5.forEach((value, key) => {
        x.append(key, value);
      });
      formData6.forEach((value, key) => {
        x.append(key, value);
      });

      return x;
    });

    AllFormData.forEach((value, key) => {
      console.log(key, " ", value);
    });

    // Barcha ma'lumotlar yig'ib bo'lindi
    // Endi ularni backend ga yuborsa bo'ladi
    axios
      .postForm("http://localhost:5000", AllFormData, {
        headers: { "Content-Type": "multipart/form-data" },
        method: "Post",
        responseType: "json",
        onUploadProgress: (e) => {
          console.log("Progress Event, e");
        },
      })
      .then((e) => {
        console.log("Success", e);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  return (
    <Box sx={{ maxWidth: "80%" }} name="MainForm" component="form">
      <Backdrop open={backDropToggle}>
        <CircularProgress color="primary" /> <br></br>
        <Typography variant="h5" color="ButtonFace">
          {" "}
          Iltimos biroz kuting...
        </Typography>
      </Backdrop>

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
          setAllFormData={setAllFormData}
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
