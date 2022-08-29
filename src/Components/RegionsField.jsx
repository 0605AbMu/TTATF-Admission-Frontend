import React from "react";
import {
  Box,
  Typography,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

import { Regions, District, Country } from "../staticData/regions";

export default function RegionsField({
  CountryName,
  RegionName,
  DistrictName,
  CountryLabel,
  RegionLabel,
  DistrictLabel,
  setIsValid,
  isValid,
}) {

    const [CountryData, setCountryData] = React.useState(Country);
    const [RegionsData, setRegionsData] = React.useState(Regions.filter(x=>{return x.country_id === CountryData[0].id}));
    const [DistrictData, setDistrictData] = React.useState(District.filter(x=>{return x.region_id === RegionsData[0].id}))

    const handleCountry = React.useCallback((e)=>{
        const cIndex = CountryData.findIndex(x=> {return x.countryName === e.target.value});
        if(cIndex != -1){
            const regs = Regions.filter(x=>{return x.country_id === CountryData[cIndex].id});
            // setCountryData(regs);
            if (regs.length === 0){
                setRegionsData([{country_id: "", id:"", name_oz:"", name_ru:"", name_uz:""}]);
                setDistrictData([{id:"", name_oz:"", name_ru:"", name_uz:"", region_id:""}]);
            } else {
                setRegionsData(regs);
            }
        }
    });

    const handleRegion = React.useCallback((e)=>{
        const rIndex = RegionsData.findIndex(x=> {return x.name_uz === e.target.value});
        if(rIndex != -1){
            const dists = District.filter(x=>{return x.region_id === RegionsData[rIndex].id});
            if (dists.length === 0){
                setDistrictData([{id:"", name_oz:"", name_ru:"", name_uz:"", region_id:""}]);
            } else {
                setDistrictData(dists);
            }
        }
    })

  return (
    <Box
      sx={{ width: "100%", margin: 1 }}
      display="flex"
      flexDirection={"row"}
      flexWrap="wrap"
    //   justifyContent={"space-between"}
    >
        {/* Bu Davlatlar tanlov oynasi */}
      <Box sx={{ width: "300px", margin: 1, marginLeft: 0 }}>
        <InputLabel>{CountryLabel}</InputLabel>
        <Select sx={{width: "100%"}}  name={CountryName} 
        fullWidth size="small"
        defaultValue={CountryData[0]?CountryData[0].countryName:""}
        onChange={handleCountry}
        >
          {CountryData.map((x) => {
            return <MenuItem key={x.countryName} value={x.countryName}>{x.countryName}</MenuItem>;
          })}
        </Select>
      </Box>


{/* Bu yerda viloyatlar */}
     <Box sx={{ width: "300px", margin: 1, marginLeft: 0 }}>
        <InputLabel>{RegionLabel}</InputLabel>
        <Select style={{maxWidth: "100%"}}  name={RegionName} 
        fullWidth size="small"
        defaultValue={RegionsData[0]?RegionsData[0].name_uz:undefined}
        onChange={handleRegion}
        >
            {RegionsData.map(x=>{
                return (<MenuItem key={x.name_uz} value={x.name_uz} >{x.name_uz}</MenuItem>)
            })}
        </Select>
      </Box>

{/* Bu yerda Tumanlar */}
<Box sx={{ width: "300px", margin: 1, marginLeft: 0 }}>
        <InputLabel>{DistrictLabel}</InputLabel>
        <Select sx={{maxWidth: "100%"}}  name={DistrictName} 
        fullWidth size="small"
        defaultValue={DistrictData[0]?DistrictData[0].name_uz:undefined}
        >
            {DistrictData.map(x=>{
                return (<MenuItem key = {x.name_uz} value={x.name_uz} >{x.name_uz}</MenuItem>)
            })}
        </Select>
      </Box>


    </Box>
  );
}
