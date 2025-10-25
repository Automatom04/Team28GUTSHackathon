import { Slider, TextField } from "@mui/material";
import { useState } from "react";

function BudgetSlider() {
  const [sliderValue, setSliderValue] = useState(0);
  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <div>
      <TextField
        slotProps={{ type: "number" }}
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <Slider
        valueLabelDisplay="auto"
        onChange={handleSliderChange}
        value={sliderValue}
      />
    </div>
  );
}

export default BudgetSlider;
