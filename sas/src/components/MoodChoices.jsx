import { useState, useEffect } from "react";
import StyledButton from "./StyledButton";

function MoodChoices({ setSelectedMood }) {
  const moods = [
    "Arts / Entertainment",
    "Outdoor and Nature",
    "Creative experiences",
    "Wellness and relaxation",
  ];
  const [selected, setSelected] = useState("");

  const handleSelect = (mood) => {
    setSelected(mood);
    setSelectedMood(mood); // update global theme too
  };

  const moodBackgrounds = {
    "Arts / Entertainment":
      "url('https://images.unsplash.com/photo-1518972559570-7cc1309f3229?auto=format&fit=crop&w=1920&q=80')",
    "Outdoor and Nature":
      "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80')",
    "Creative experiences":
      "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80')",
    "Wellness and relaxation":
      "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')",
  };

  // lord help it took ages to do this
  useEffect(() => {
    document.body.style.transition = "background-image 1s ease-in-out";
    document.body.style.backgroundImage = selected
      ? moodBackgrounds[selected]
      : "none";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
  }, [selected]);

  return (
    <div>
      {moods.map((mood, index) => {
        return (
          <StyledButton
            key={mood}
            selected={selected}
            target={mood}
            trigger={() => handleSelect(mood)}
          />
        );
      })}
    </div>
  );
}

export default MoodChoices;
