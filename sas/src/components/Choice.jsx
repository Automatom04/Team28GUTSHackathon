import { Button } from "@mui/material";
import { useState } from "react";

function Choice({ text }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Button
      variant={isSelected ? "contained" : "outlined"}
      size="large"
      style={{ margin: "10px" }}
      onClick={() => (isSelected ? setIsSelected(false) : setIsSelected(true))}
      //   onClick={setIsSelected(true)}
    >
      {text}
    </Button>
  );
}
export default Choice;
