import {
  Step,
  StepContent,
  StepLabel,
  Typography,
  Box,
  Checkbox,
  Button,
  FilledInput,
  FormControlLabel
} from "@mui/material";
import React from "react";

// Components
import SimpleTextField from "../Components/SimpleTextField";
import SelectField from "../Components/SelectField";
import RadioGroup from "../Components/RadioGroup";
import RegionsField from "../Components/RegionsField";
// Import static Data
import { nations } from "../staticData/nations";

export default function Step2({ index, activeStep, setActiveStep, EndOfForm }) {
  const [isValid, setIsValid] = React.useState(true);
  const [isAggre, setIsAggree] = React.useState(true);

  const handleClickofButton1 = (e) => {
    console.log(e.target.forms);
  };
  return (
    <Step index={index} last={true}  >
      <StepLabel>
        <Typography variant="subtitle1"> Tugatish </Typography>
        <Typography variant="caption">{activeStep === 4 ? "Oxirgi qadam" :null}</Typography>
      </StepLabel>
      <StepContent TransitionProps={{ unmountOnExit: false }}>
        <Box
          component={"form"}
          display="flex"
          flexDirection={"column"}
          flexWrap="wrap"
          alignItems={"flex-start"}
        >
       <FormControlLabel control={<Checkbox onChange={e=>{setIsAggree(!isAggre)}} />} label={<Typography variant="body1">Oferta shartlariga rozimisiz?</Typography>} />
       <Typography variant="subtitle2" >
        Shartlar:<br></br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, vero.
        </Typography>    
        </Box>
        <Box>
          <Button variant="contained" color="primary" disabled={isAggre} sx={{m:1, ml:0}} onClick={EndOfForm}  >Tugatish</Button>
          <Button variant="outlined" sx={{m:1}} onClick={()=>{
            setActiveStep(activeStep!=0?activeStep - 1:activeStep);
          }} >Orqaga qaytish</Button>
        </Box>
      </StepContent>
    </Step>
  );
}
