import Header from "../components/Header";
import ActivityRandomiser from "../components/ActivityRandomiser";
import "../styles/activity-selection.css";
import { Casino } from "@mui/icons-material";
import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import { TbRuler3 } from "react-icons/tb";

function ActivitySelection(){
    const location = useLocation();
    const activityData = location.state; 

    // console.log("recieved data for date:", activityData);

    const [isRolling, setIsRolling] = useState(false);

    const [permLocked1, setPermLocked1] = useState(false);
    const [permLocked2, setPermLocked2] = useState(true);
    const [permLocked3, setPermLocked3] = useState(true);

    const [initialLocked1] = useState(false);
    const [initialLocked2] = useState(true);
    const [initialLocked3] = useState(true);


    const [selectedActivity, setSelectedActivity] = useState();
    const [selectedFood, setSelectedFood] = useState();
    const [selectedBar, setSelectedBar] = useState();

    useEffect(() => {
        console.log("activity: ", selectedActivity);
        console.log("food: ", selectedFood);
        console.log("bar: ", selectedBar);
    }, [selectedActivity, selectedFood, selectedBar]);

    const startRolling = () => setIsRolling(false);

    const firstImage = activityData[0].image;

    const resetLocks = () => {setPermLocked1(false); setPermLocked2(false); setPermLocked3(false) };

    return (
        <div>
            <Header/>
            {/* HOW TO USE IMAGES <img src = {firstImage}></img> */}
            <h2 className="instructions">Please select your three activities! 
                You can lock an activity if you wish to keep it, 
                or delete an activity if you do not want to consider it.</h2>
            <h2><b>Once you lock, you cannot unlock unless you reset your selections!</b></h2>
            <Button
                variant="contained"
                className="submit"
                style={{ marginBottom: "10px;" }}
                onClick={() => {
                    resetLocks();
                }}
            >
            Reset Selections
            </Button>

            <h2>Click this button to randomise your activites: 
                <Casino className = {`dice ${isRolling ? "rolling" : ""}`} onClick={() => {setIsRolling(true);setTimeout(() => startRolling(),3000)}}/>  
            </h2>
            <div className= "activities-container">
                {/* Activity */}
                <ActivityRandomiser lockedState = {false} 
                    data = {activityData} 
                    isRolling = {isRolling}
                    isLocked = {permLocked1}
                    setIsLocked={setPermLocked1}
                    initialLocked={false}
                    onActivityChange={setSelectedActivity}/>
                {/* Dinner */}
                <ActivityRandomiser lockedState = {true} 
                    data = {activityData} 
                    isRolling = {isRolling}
                    isLocked = {permLocked2}
                    setIsLocked={setPermLocked2}
                    initialLocked={true}
                    onActivityChange={setSelectedFood}/>
                {/* Drinks */}
                <ActivityRandomiser lockedState = {true} 
                    data = {activityData} 
                    isRolling = {isRolling}
                    isLocked = {permLocked3}
                    setIsLocked={setPermLocked3}
                    initialLocked={true}
                    onActivityChange={setSelectedBar}/>
            </div>
        </div>
    )
}

export default ActivitySelection;
