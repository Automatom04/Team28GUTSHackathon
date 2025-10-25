import Header from "../components/Header";
import ActivityRandomiser from "../components/ActivityRandomiser";
import "../styles/activity-selection.css";
import { Casino } from "@mui/icons-material";
import {useState} from "react";
import { useLocation } from "react-router-dom";

function ActivitySelection(){
    const location = useLocation();
    const activityData = location.state; 

    // console.log("recieved data for date:", activityData);

    const [isRolling, setIsRolling] = useState(false);

    const [selectedImages, setSelectedImages] = useState([null, null, null]);

    const startRolling = () => setIsRolling(false);

    const firstImage = activityData[0].image;

    return (
        <div>
            <Header/>
            {/* HOW TO USE IMAGES <img src = {firstImage}></img> */}
            <h2 className="instructions">Please select your three activities! 
                You can lock an activity if you wish to keep it, 
                or delete an activity if you do not want to consider it.</h2>

            <h2>Click this button to randomise your activites: 
                <Casino className = {`dice ${isRolling ? "rolling" : ""}`} onClick={() => {setIsRolling(true);setTimeout(() => startRolling(),3000)}}/>  
            </h2>
            <div className= "activities-container">
                {/* Activity */}
                <ActivityRandomiser lockedState = {true} data = {activityData} isRolling = {isRolling}/>
                {/* Dinner */}
                <ActivityRandomiser lockedState = {true} data = {activityData} isRolling = {isRolling}/>
                {/* Drinks */}
                <ActivityRandomiser lockedState = {true} data = {activityData} isRolling = {isRolling}/>
            </div>
        </div>
    )
}

export default ActivitySelection;
