import { Box, Paper, Typography } from "@mui/material";
export default function () {
  return (
    <Box display="flex" justifyContent={"center"} alignItems="center" height={"100%"} position="absolute"  width="100%"  >
      <Paper sx={{ width: "60%" }} >
        <Typography variant="h1" textAlign={"center"} >404</Typography>
        <Typography variant="h1" textAlign={"center"} >Not Found</Typography>
      </Paper>
    </Box>
  );
}
