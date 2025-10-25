import { Button } from "@mui/material";
import { useState } from "react";

function MoodChoices() {
  const moods = ["Party Time", "Chill", "High Energy Physical"];
  const [selected, setSelected] = useState("");
  return (
    <div>
      {moods.map((mood, index) => {
        return (
          <Button
            variant={selected === mood ? "contained" : "outlined"}
            size="large"
            style={{ margin: "20px" }}
            onClick={() => {
              setSelected(mood);
            }}
          >
            {mood}
          </Button>
        );
      })}
    </div>
  );
}

export default MoodChoices;
