import Header from "../components/Header";
import ActivityRandomiser from "../components/ActivityRandomiser";
import "../styles/activity-selection.css";
import { Casino } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
import RunPlaceData from "../RunPlaceData";

function ActivitySelection() {
  const location = useLocation();
  const activityData = location.state;
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  // console.log("recieved data for date:", activityData);

  const [isRolling, setIsRolling] = useState(false);

  const [permLocked1, setPermLocked1] = useState(false);
  const [permLocked2, setPermLocked2] = useState(true);
  const [permLocked3, setPermLocked3] = useState(true);

  const [initialLocked1] = useState(false);
  const [initialLocked2] = useState(true);
  const [initialLocked3] = useState(true);

  const [toggled1, setToggled1] = useState(false);
  const [toggled2, setToggled2] = useState(false);
  const [toggled3, setToggled3] = useState(false);

  const [selectedActivity, setSelectedActivity] = useState();
  const [selectedFood, setSelectedFood] = useState();
  const [selectedBar, setSelectedBar] = useState();
  const [places, setPlaces] = useState();
  const [food, setFood] = useState(null);
  const [bar, setBar] = useState(null);

  useEffect(() => {
    const result = RunPlaceData(selectedActivity.location, 0, 0, "");
    setPlaces(result);
    console.log("toms stuff", result);
  }, [selectedActivity]);

    useEffect(() => {
        const resultBar = places[0].nearbyVenues[0].suggestions.slice(0,5).text.text;
        const resultFood = places[0].nearbyVenus[1].suggestions.slice(0,5).text.text;
        setFood(resultFood);
        setBar(resultBar);
    }, [places]);

  useEffect(() => {
    console.log("activity: ", selectedActivity);
    console.log("food: ", selectedFood);
    console.log("bar: ", selectedBar);
  }, [selectedActivity, selectedFood, selectedBar]);

  const startRolling = () => setIsRolling(false);

  const resetLocks = () => {
    setPermLocked1(false);
    setPermLocked2(false);
    setPermLocked3(false);
    setToggled1(false);
    setToggled2(false);
  };

  // when all choices selected
  useEffect(() => {
    if (
      permLocked1 &&
      permLocked2 &&
      permLocked3 &&
      toggled1 &&
      toggled2 &&
      toggled3
    ) {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
      });

      setOpen(true);
    }
  }, [permLocked1, permLocked2, permLocked3]);

  return (
    <div className="main-content">
      {/* HOW TO USE IMAGES <img src = {firstImage}></img> */}
      <div className="info">
        <h2>Please select your three activities!</h2>
        <h3 className="instructions">
          You can lock an activity if you wish to keep it, or delete an activity
          if you do not want to consider it.
        </h3>
        <h3>
          <b>Once you lock, you cannot unlock unless you refresh the page.</b>
        </h3>
        <div className="dice-instruction">
          <h3>Randomise your activites!!</h3>
          <Casino
            className={`dice ${isRolling ? "rolling" : ""}`}
            onClick={() => {
              setIsRolling(true);
              setTimeout(() => startRolling(), 3000);
            }}
          />
        </div>
      </div>
      <div className="activities-container">
        {/* Activity */}
        <ActivityRandomiser
          lockedState={false}
          data={activityData}
          isRolling={isRolling}
          isLocked={permLocked1}
          setIsLocked={setPermLocked1}
          initialLocked={false}
          prevLocked={true}
          prevHasBeenToggled={true}
          onActivityChange={setSelectedActivity}
          onToggle={() => setToggled1(true)}
        />
        {/* Dinner */}
        <ActivityRandomiser
          lockedState={true}
          data={food}
          isRolling={isRolling}
          isLocked={permLocked2}
          setIsLocked={setPermLocked2}
          initialLocked={true}
          prevLocked={permLocked1}
          prevHasBeenToggled={toggled1}
          onActivityChange={setSelectedFood}
          onToggle={() => setToggled2(true)}
        />
        {/* Drinks */}
        <ActivityRandomiser
          lockedState={true}
          data={bar}
          isRolling={isRolling}
          isLocked={permLocked3}
          setIsLocked={setPermLocked3}
          initialLocked={true}
          prevLocked={permLocked2}
          prevHasBeenToggled={toggled2}
          onActivityChange={setSelectedBar}
          onToggle={() => {
            setToggled3(true);
          }}
        />
      </div>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>NIGHT OUT TIME!</DialogTitle>
        <DialogContent>
          YAYYYY you selected your night out!!! Click next to see a full
          summary!
        </DialogContent>
        <Button 
        onClick={() => 
            navigate("/planned-activity", { 
            state: { 
                activity: selectedActivity,
                food: selectedFood,
                bar: selectedBar
            } 
            })
        }
        >
        Next
        </Button>
      </Dialog>
    </div>
  );
}

export default ActivitySelection;
