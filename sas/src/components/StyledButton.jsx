import { Button } from "@mui/material";

export default function StyledButton({ selected, target, trigger }) {
  return (
    <Button
      style={{
        margin: "10px",
        color: selected === target ? "#fff" : "#222",
        backgroundColor:
          selected === target
            ? "rgba(0, 0, 0, 0.4)"
            : "rgba(255, 255, 255, 0.7)",
        borderColor: "#fff",
        textShadow: "0 1px 2px rgba(0,0,0,0.2)",
      }}
      onClick={trigger}
      variant={selected === target ? "contained" : "outlined"}
      size="large"
    >
      {target}
    </Button>
  );
}
