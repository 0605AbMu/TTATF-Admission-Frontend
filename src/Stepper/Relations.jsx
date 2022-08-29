import {
  Step,
  StepContent,
  StepLabel,
  Typography,
  Box,
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Paper,
} from "@mui/material";
import React from "react";
import { Edit, Delete, Add } from "@mui/icons-material";
// Components
import SimpleTextField from "../Components/SimpleTextField";
import SelectField from "../Components/SelectField";
import RadioGroup from "../Components/RadioGroup";
import RegionsField from "../Components/RegionsField";
import RelationAddDialog from "../Components/RelationAddDialog";

// Import static Data
import { nations } from "../staticData/nations";
import { borderColor } from "@mui/system";

export default function Relations({
  index,
  activeStep,
  setActiveStep,
  id = undefined,
  setAllFormData = () => {},
}) {
  const [isValid, setIsValid] = React.useState(true);
  const [completed, setCompleted] = React.useState(false);
  const [defaultData, setDefaultData] = React.useState({});
  const [editable, setEditable] = React.useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(true);
  const [relationsData, setRelationsData] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleNext = (e) => {
    setAllFormData((x) => {
      x.forEach((value, key) => {
        if (key.indexOf("Relations") != -1) x.delete(key);
      });

      relationsData.forEach((o) => {
        x.delete(`Relations.${o.type}`);
        x.append(`Relations.${o.type}.name`, o.name);
        x.append(`Relations.${o.type}.birthDate`, o.birthDate);
        x.append(`Relations.${o.type}.liveLocation`, o.liveLocation);
        x.append(`Relations.${o.type}.work`, o.work);
        x.append(`Relations.${o.type}.filePasport`, o.filePasport);
      });
      console.log(relationsData);
      x.forEach((value, key) => {
        console.log(key, " ", value);
      });
      return x;
    });
  };

  const handleEdit = React.useCallback((data) => {
    setDefaultData(data);
    setEditable(true);
    setIsOpen(true);
  });

  const handleDelete = React.useCallback((data) => {
    const resultIndex = relationsData.findIndex((x) => {
      return x.id === data.id;
    });
    if (resultIndex != -1) {
      relationsData.splice(resultIndex, 1);
    }
    setDeleteDialogOpen(false);
  });

  return (
    <Step index={index}>
      <StepLabel>
        <Typography variant="subtitle1">
          {" "}
          Yaqin qarindoshlari haqida{" "}
        </Typography>
      </StepLabel>
      <StepContent TransitionProps={{ unmountOnExit: false }}>
        <Box
          component={"form"}
          display="flex"
          flexDirection={"column"}
          flexWrap="wrap"
          alignItems={"flex-start"}
          id={id}
        >
          <RelationAddDialog
            allData={relationsData}
            isOpen={isOpen}
            setData={setRelationsData}
            setIsOpen={setIsOpen}
            defaultData={defaultData}
            setDefaultData={setDefaultData}
            editable={editable}
            setEditable={setEditable}
          />

          <List
            sx={{ width: "100%" }}
            component={Paper}
            subheader={
              <ListSubheader sx={{ fontSize: "20px" }}>
                Qarindoshlari
              </ListSubheader>
            }
          >
            {/* <Divider /> */}
            {relationsData.map((x, i) => {
              return (
                <ListItem
                  divider={true}
                  key={i}
                  secondaryAction={
                    <ButtonGroup>
                      <Button
                        variant="contained"
                        onClick={handleEdit.bind(this, x)}
                      >
                        <Edit />
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={handleDelete.bind(this, x)}
                      >
                        <Delete />
                      </Button>
                    </ButtonGroup>
                  }
                >
                  <ListItemText primary={x.name} secondary={x.type} />
                </ListItem>
              );
            })}
            {/* <Divider /> */}
            <Button
              variant="contained"
              color="success"
              sx={{ m: 1 }}
              onClick={(e) => {
                setIsOpen(true);
              }}
            >
              <Add />
            </Button>
          </List>
          <Box sx={{ width: "100%" }} component="div">
            <Button
              variant="contained"
              sx={{ margin: 1 }}
              onClick={(e) => {
                if (e.currentTarget.form.checkValidity()) {
                  handleNext();
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
