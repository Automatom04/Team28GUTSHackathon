import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import "../styles/landing.css";
import { Container } from "@mui/material";
import MoodChoices from "../components/MoodChoices";
import BudgetSlider from "../components/BudgetSlider";
import DistanceSlider from "../components/DistanceSlider";
import DateSelector from "../components/DateSelector";
import "../styles/selectionSection.css";
import { useNavigate } from "react-router-dom";

function Landing({ setSelectedMood, selectedMood}) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [date, setDate] = useState([]);

  const fetchData = async (date, mood) => {
    try {
      console.log(date);
      const result = await axios(
        `http://localhost:5000/activities?date=${date}&mood=${mood}`
      );
      setData(result.data);
      console.log(result.data);
      console.log("navigating...");
      navigate("/activity-selection", { state: result.data });
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
    }
  };

  return (
    <div className="selection-section-container">
      <Header />

      <Container className="selection-container">
        <div className="choice">
          <h2 className="selection-header"> Pick a Mood </h2>
          <MoodChoices setSelectedMood={setSelectedMood} />
          <br />
        </div>
        <div className="choice">
          <h2 className="selection-header">Night-out Date </h2>
          <DateSelector onDateChange={setDate} />
          <br />
        </div>
        <div className="choice">
          <h2 className="selection-header"> Budget </h2>
          <BudgetSlider />
          <br />
        </div>
        <div className="choice">
          <h2 className="selection-header">Distance from the office </h2>
          <DistanceSlider />
          <br />
        </div>
        <Button
          variant="contained"
          className="submit"
          style={{ marginBottom: "10px;" }}
          onClick={() => {
            fetchData(date, selectedMood);
          }}
        >
          Submit
        </Button>
      </Container>
    </div>
  );
}

export default Landing;
