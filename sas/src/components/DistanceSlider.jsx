import { Slider, TextField } from "@mui/material";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";

function DistanceSlider() {
  const [sliderValue, setSliderValue] = useState(0);
  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const handleTextFieldChange = (event) => {
    setSliderValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  return (
    <div>
      <TextField
        slotProps={{
          type: "number",
          input: {
            endAdornment: <InputAdornment position="end">m</InputAdornment>,
          },
        }}
        value={sliderValue}
        onChange={handleTextFieldChange}
      />
      <Slider
        valueLabelDisplay="auto"
        onChange={handleSliderChange}
        value={sliderValue}
        max={6000}
      />
    </div>
  );
}

export default DistanceSlider;
