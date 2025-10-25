import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { getNeonTheme, neonColors } from "./theme";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ActivitySelection from "./pages/ActivitySelection";

function App() {
  const [data, setData] = useState([]);
  const [selectedMood, setSelectedMood] = useState("");

  const currentNeon = neonColors[selectedMood] || "#00ffff";

  const fetchData = async (date) => {
    try {
      const result = await axios(
        `http://localhost:5000/activities?date=${date}`
      );
      setData(result.data);
      console.log(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
    }
  };

  useEffect(() => {
    fetchData("2025/10/23");
  }, []);

  return (
    <ThemeProvider theme={getNeonTheme(currentNeon)}>
      <BrowserRouter>
        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={<Landing setSelectedMood={setSelectedMood} />}
          />
          <Route path="/activity-selection" element={<ActivitySelection />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
