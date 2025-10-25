import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import ActivityRandomiser from "./pages/ActivitySelection";
import ActivitySelection from "./pages/ActivitySelection";

function App() {
  const [data, setData] = useState([]);

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
    <BrowserRouter>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/activity-selection" element={<ActivitySelection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
