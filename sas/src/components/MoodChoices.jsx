import Choice from "./Choice";

function MoodChoices() {
  const moods = ["Party Time", "Chill", "High Energy"];

  return (
    <div>
      {moods.map((mood, index) => {
        return <Choice text={mood} key={index} />;
      })}
    </div>
  );
}

export default MoodChoices;
