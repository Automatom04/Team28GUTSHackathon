import { Container } from "@mui/material";
import MoodChoices from "../components/MoodChoices";
import BudgetSlider from "../components/BudgetSlider";
import DistanceSlider from "../components/DistanceSlider";
import DateSelector from "../components/DateSelector";
import "../styles/selectionSection.css";

function SelectionSection() {
  return (
    <Container className="selection-container">
      <div className="choice">
        <h2 className="selection-header"> Pick a Mood </h2>
        <MoodChoices />
        <br />
      </div>
      <div className="choice">
        <h2 className="selection-header">Night-out Date </h2>
        <DateSelector />
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
    </Container>
  );
}
export default SelectionSection;
