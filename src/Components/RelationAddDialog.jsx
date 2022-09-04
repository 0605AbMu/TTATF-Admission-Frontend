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
import SimpleTextFieldWithMask from "./SimpleTextFieldWithMask";

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
  const [relationsType, setRelationTypes] = React.useState([
    "Otasi",
    "Onasi",
    "Akasi",
    "Ukasi",
    "Opasi",
    "Singlisi",
    "Turmush o'rtog'i",
    "Farzandi",
  ]);
  const [componentType, setComponentType] = React.useState("form");
  const handleAdd = React.useCallback((id = undefined) => {
    const form = document.getElementById("relationAddDialog");
    if (form.reportValidity()) {
      const relationFormData = new FormData(form);
      setData((x) => {
        x.push({
          id: id != undefined ? id : allData.length,
          type: relationFormData.get("relationType"),
          name1: relationFormData.get("relationName1"),
          name2: relationFormData.get("relationName2"),
          name3: relationFormData.get("relationName3"),
          birthDate: relationFormData.get("relationBirthDate"),
          workLocation: relationFormData.get("relationWorkLocation"),
          workPosition: relationFormData.get("relationWorkPosition"),
          phone1: relationFormData.get("relationPhone1"),
          phone2: relationFormData.get("relationPhone2"),
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
            label={"Familiya*"}
            defaultValue={defaultData.name2}
            name="relationName2"
          />
          <SimpleTextField
            label={"Ism*"}
            defaultValue={defaultData.name1}
            name="relationName1"
          />
          <SimpleTextField
            label={"Sharifi*"}
            defaultValue={defaultData.name3}
            name="relationName3"
          />
          <SimpleTextField
            label={"Tug'ilgan kuni*"}
            type="date"
            defaultValue={defaultData.birthDate}
            name={"relationBirthDate"}
          />
          <SimpleTextField
            label={"Ish joyi"}
            defaultValue={defaultData.workLocation}
            name={"relationWorkLocation"}
          />
          <SimpleTextField
            label={"Ish lavozimi"}
            defaultValue={defaultData.workPosition}
            name={"relationWorkPosition"}
          />
          <SimpleTextField
            label={"Yashash manzili"}
            defaultValue={defaultData.liveLocation}
            name={"relationLiveLocation"}
          />
          <SimpleTextFieldWithMask
            name={"relationPhone1"}
            label={"Telefon raqami - 1*"}
            mask={"+(\\9\\98)\\-99-999-99-99"}
            type="text"
            placeholder="*"
            validationFunc={(value) => {
              if (value.length !== 19) return false;
              return true;
            }}
            defaultValue={defaultData.phone1}
          />
          <SimpleTextFieldWithMask
            name={"relationPhone1"}
            label={"Telefon raqami - 2*"}
            mask={"+(\\9\\98)\\-99-999-99-99"}
            type="text"
            placeholder="*"
            required={false}
            validationFunc={(value) => {
              if (value.length !== 19) return false;
              return true;
            }}
            defaultValue={defaultData.phone2}
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
            {editable ? <Edit /> : <Add />}
          </Button>
          <Button variant="contained" onClick={handleCancel} color="error">
            <Cancel />
          </Button>
        </ButtonGroup>
      </DialogActions>
    </Dialog>
  );
}
