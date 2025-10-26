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
import {Riple} from "react-loading-indicators";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Landing({ setSelectedMood, selectedMood }) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [date, setDate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");

  const loadingTextOptions = ["F.I.O.N.A is deeply contemplating your night out", "F.I.O.N.A wishes she could join you!", "F.I.O.N.A is with you in spirit!"]

  const fetchData = async (date, mood) => {
    try {
      const text = loadingTextOptions[getRandomInt(loadingTextOptions.length)];
      console.log("HELLOOOOOOO")
      console.log(text);
      setLoadingText(text);
      setIsLoading(true);
      console.log(date);
      const result = await axios(
        `http://localhost:5000/activities?date=${date}&mood=${mood}`
      );
      setData(result.data);
      console.log(result.data);
      console.log("navigating...");
      setIsLoading(false);
      navigate("/activity-selection", { state: result.data });
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
    }
  };

  return (
    <div className="selection-section-container">
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
        {isLoading &&
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
            <p class="loading-text">{loadingText}</p>
            <Riple class="loader" color="#32cd32" size="large" text="" textColor=""/>
          </div>
         }
        
      </Container>
    </div>
  );
}

export default Landing;
