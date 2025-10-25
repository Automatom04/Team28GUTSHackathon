import { Container } from "@mui/material";
import MoodChoices from "../components/MoodChoices";
import BudgetSlider from "../components/BudgetSlider";
import DistanceSlider from "../components/DistanceSlider";

function SelectionSection() {
  return (
    <Container>
      <h2> Pick a Mood Choice! </h2>
      <MoodChoices />
      <br />

      <h2> Budget </h2>
      <BudgetSlider />
      <br />

      <h2>Distance from the office: </h2>
      <BudgetSlider />
    </Container>
  );
}
export default SelectionSection;
