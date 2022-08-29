import React from "react";
import {
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "@mui/material";
import { Add, Edit, Cancel } from "@mui/icons-material";
import SimpleTextField from "./SimpleTextField";
import SelectField from "./SelectField";
import { ButtonGroup } from "@mui/material";

export default function RelationAddDialog({
  defaultData = {},
  setDefaultData = () => {},
  setData = () => {},
  allData = [],
  isOpen = false,
  setIsOpen = () => {},
  editable = false,
  setEditable = () => {},
}) {
  const [relationsType, setRelationTypes] = React.useState(["Otasi", "Onasi"]);
  const [componentType, setComponentType] = React.useState("form");
  const handleAdd = React.useCallback((id = undefined) => {
    const form = document.getElementById("relationAddDialog");
    if (form.reportValidity()) {
      const relationFormData = new FormData(form);
      setData((x) => {
        x.push({
          id: id != undefined ? id : allData.length,
          type: relationFormData.get("relationType"),
          name: relationFormData.get("relationName"),
          birthDate: relationFormData.get("relationBirthDate"),
          work: relationFormData.get("relationWork"),
          liveLocation: relationFormData.get("relationLiveLocation"),
          filePasport: relationFormData.get("relationFilePasport"),
        });
        return x;
      });
      form.reset();
      setIsOpen(false);
    } else {
      return;
    }
    setComponentType("div");
    setDefaultData({});
    setEditable(false);
  });

  const handleEdit = React.useCallback((e) => {
    const form = document.getElementById("relationAddDialog");
    if (defaultData && form.reportValidity()) {
      setData((x) => {
        x.splice(
          x.findIndex((o) => {
            return o.id == defaultData.id;
          }),
          1
        );
        return x;
      });
      handleAdd(defaultData.id);
      setEditable(false);
    }
  });

  const handleCancel = React.useCallback((e) => {
    const form = document.getElementById("relationAddDialog");
    form.reset();
    setComponentType("div");
    setDefaultData();
    setEditable(false);
    setIsOpen(false);
  });

  return (
    <Dialog key={defaultData.id} open={isOpen} keepMounted>
      <DialogTitle>Qarindoshlari bo'limiga qo'shish</DialogTitle>
      <DialogContent>
        <Box
          display={"flex"}
          width="100%"
          flexDirection="row"
          flexWrap={"wrap"}
          component={"form"}
          id="relationAddDialog"
        >
          <SelectField
            label="Kim?"
            defaultValue={defaultData.type}
            items={relationsType}
            name={"relationType"}
          />
          <SimpleTextField
            label={"F.I.SH*"}
            defaultValue={defaultData.name}
            name="relationName"
          />
          <SimpleTextField
            label={"Tug'ilgan kuni*"}
            type="date"
            defaultValue={defaultData.birthDate}
            name={"relationBirthDate"}
          />
          <SimpleTextField
            label={"Ish joyi/lavozimi"}
            defaultValue={defaultData.work}
            name={"relationWork"}
          />
          <SimpleTextField
            label={"Yashash manzili"}
            defaultValue={defaultData.liveLocation}
            name={"relationLiveLocation"}
          />
          <SimpleTextField
            label={"Pasport kopiyasini yuklang*"}
            type="file"
            defaultValue={defaultData.filePasport}
            name="relationFilePasport"
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <ButtonGroup>
          <Button
            variant="contained"
            onClick={editable ? handleEdit : handleAdd}
          >
            {editable ? <Edit/> : <Add/>}
          </Button>
          <Button variant="contained" onClick={handleCancel} color="error">
            <Cancel  />
          </Button>
        </ButtonGroup>
      </DialogActions>
    </Dialog>
  );
}
