import { Box, Paper, Typography, Button } from "@mui/material";
import axios from "../staticData/axios";
import { Download as DownloadIcon } from "@mui/icons-material";
export default function Download() {
  const queries = new URLSearchParams(window.location.search);
  //   console.log();
  const fileId = queries.get("f");
  if (!fileId) {
    window.location.replace("/NotFound");
  }
  const apiUrl = axios.defaults.baseURL;
  return (
    <Box
      display="flex"
      justifyContent={"center"}
      alignItems="center"
      width="100%"
      height="100%"
      position={"absolute"}
    >
      <Paper sx={{ width: "60%", p: 5 }}>
        <Typography variant="h4" textAlign={"center"}>
          Ma'lumotlar muvoffaqiyatli qa'bul qilindi. Arizangizni yuklab
          olishingiz mumkin
        </Typography>
        <Typography variant="h2" textAlign={"center"}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              window.location = apiUrl + "/file/" + fileId;
            }}
          >
            <DownloadIcon />
            Arizani yuklab olish
          </Button>
          {/* {apiUrl + "/file/" + fileId} */}
        </Typography>
      </Paper>
    </Box>
  );
}
