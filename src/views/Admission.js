import React from "react";
import { Box, Typography } from "@mui/material";
import Stepper from "../Stepper/Stepper";
export default function () {
  return (
    <Box
      position={"absolute"}
      left="50%"
      width={"100%"}
      style={{ transform: "translateX(-50%)" }}
    >
      <Typography
        margin={3}
        textAlign={"center"}
        variant="h4"
        fontWeight={"bold"}
      >
        TTATF Admission for 2022-2023 year.
      </Typography>
      <Stepper />
    </Box>
  );
}
