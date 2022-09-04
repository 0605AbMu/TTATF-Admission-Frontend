import { Box, Paper, Typography } from "@mui/material";
import { DoneAll } from "@mui/icons-material";
export default function () {
  return (
    <Box
      display="flex"
      justifyContent={"center"}
      alignItems="center"
      height={"100%"}
      position="absolute"
      width="100%"
    >
      <Paper sx={{ width: "60%", }}>
        <Typography variant="inherit" fontSize={"25px"} textAlign={"center"}>
          {" "}
          <DoneAll color="success" fontSize="inherit" /> Ma'lumotlaringiz muvoffaqiyatli yuborildi!
        </Typography>
      </Paper>
    </Box>
  );
}
