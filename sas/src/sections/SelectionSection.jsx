import { Container } from "@mui/material";
import MoodChoices from "../components/MoodChoices";
import BudgetSlider from "../components/BudgetSlider";
import DistanceSlider from "../components/DistanceSlider";

function SelectionSection() {
  return (
    <Container>
      <h2 className="selection-header"> Pick a Mood Choice! </h2>
      <MoodChoices />
      <br />

      <h2 className="selection-header"> Budget </h2>
      <BudgetSlider />
      <br />

      <h2 className="selection-header">Distance from the office: </h2>
      <DistanceSlider />
    </Container>
  );
}
export default SelectionSection;
