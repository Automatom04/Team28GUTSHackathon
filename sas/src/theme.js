import { createTheme } from "@mui/material/styles";

export const neonColors = {
  "Arts / Entertainment": "#ff00ff",
  "Outdoor and Nature": "#00ff99",
  "Creative experiences": "#00ffff",
  "Wellness and relaxation": "#ff9900",
};

// Default neon color
const defaultNeon = "#00ffff";

export const getNeonTheme = (neonColor = defaultNeon) =>
  createTheme({
    palette: {
      mode: "dark",
      primary: { main: neonColor },
      secondary: { main: neonColor },
      background: { default: "#0a0a0a", paper: "rgba(10,10,10,0.8)" },
      text: { primary: "#fff" },
    },
    components: {
      // Buttons
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "10px",
            border: `2px solid ${neonColor}`,
            // color: neonColor,
            textShadow: `0 0 5px ${neonColor}`,
            boxShadow: `0 0 10px ${neonColor}`,
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.1)",
              boxShadow: `0 0 20px ${neonColor}, 0 0 30px ${neonColor} inset`,
            },
          },
        },
      },
      // TextFields / Inputs
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            color: neonColor,
            backgroundColor: "rgba(255,255,255,0.05)",
            borderRadius: "8px",
            "& fieldset": {
              borderColor: neonColor,
              boxShadow: `0 0 10px ${neonColor}`,
            },
            "&:hover fieldset": {
              borderColor: neonColor,
              boxShadow: `0 0 15px ${neonColor}`,
            },
            "&.Mui-focused fieldset": {
              borderColor: neonColor,
              boxShadow: `0 0 20px ${neonColor}`,
            },
          },
        },
      },
      // Sliders
      MuiSlider: {
        styleOverrides: {
          root: {
            color: neonColor,
            "& .MuiSlider-thumb": {
              backgroundColor: neonColor,
              boxShadow: `0 0 12px ${neonColor}`,
            },
            "& .MuiSlider-track": {
              backgroundColor: neonColor,
              boxShadow: `0 0 10px ${neonColor}`,
            },
            "& .MuiSlider-rail": {
              opacity: 0.3,
              backgroundColor: neonColor,
            },
          },
        },
      },
    },
  });
