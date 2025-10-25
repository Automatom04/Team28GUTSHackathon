import Header from "../components/Header";
import SelectionSection from "../sections/SelectionSection";
import ActivitySelection from "../sections/ActivitySelection";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";

function Landing() {
  const [data, setData] = useState([]);

  const fetchData = async (date) => {
    try {
      const result = await axios(`http://localhost:5000/activities?date=${date}`);
      setData(result.data);
      console.log(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
    }
  };

  const submitChoices = () => {
    fetchData("2025/10/23");
    <Route path="/activity-selection" element={<ActivitySelection />} />
  };

  return (
    <div>
      <Header />
      <SelectionSection />
      <h1>Hi!</h1>
      <Button 
            size="large"
            style={{ margin: "20px" }}
            onClick={() => submitChoices()}>
        Submit</Button>
    </div>
  );
}

export default Landing;
