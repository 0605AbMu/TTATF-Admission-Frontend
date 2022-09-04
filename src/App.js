import logo from "./logo.svg";
import "./App.css";
import { Box, Paper, Typography } from "@mui/material";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Admission from "./views/Admission";
import Download from "./views/Download";
import NotFound from "./views/NotFound";
import Thanks from "./views/Thanks";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Admission />} />
        <Route path="/download" element={<Download />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
