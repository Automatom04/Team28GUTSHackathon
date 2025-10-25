import { Slider, TextField } from "@mui/material";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";

function DistanceSlider() {
  const [sliderValue, setSliderValue] = useState(0);
  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const handleTextFieldChange = (event) => {
    const value = event.target.value === "" ? "" : Number(event.target.value);
    if (value >= 0 && value <= 6000) {
      setSliderValue(value);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        padding: "10px",
        flexWrap: "wrap",
      }}
    >
      <TextField
        type="number"
        label="Distance"
        variant="outlined"
        value={sliderValue}
        onChange={handleTextFieldChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <span style={{ color: "#fff" }}>m</span>
            </InputAdornment>
          ),
          inputProps: {
            min: 0,
            max: 6000,
            step: 100,
            style: {
              color: "#fff",
              textAlign: "center",
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: "6px",
            },
          },
        }}
        sx={{
          width: 120,
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#fff" },
            "&:hover fieldset": { borderColor: "#ddd" },
            "&.Mui-focused fieldset": { borderColor: "#fff" },
          },
        }}
      />

      {/* Distance Slider */}
      <Slider
        value={sliderValue}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        min={0}
        max={6000}
        sx={{
          color: "#fff",
          width: 300,
          "& .MuiSlider-thumb": {
            backgroundColor: "#fff",
          },
          "& .MuiSlider-rail": {
            opacity: 0.3,
            backgroundColor: "#fff",
          },
          "& .MuiSlider-track": {
            backgroundColor: "#fff",
          },
        }}
      />
    </div>
  );
}

export default DistanceSlider;
