import { Button } from "@mui/material";

function Choice({ text }) {
  return (
    <Button variant="contained" size="large" style={{ margin: "10px" }}>
      {text}
    </Button>
  );
}
export default Choice;
