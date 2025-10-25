import Header from "../components/Header";
import ActivityRandomiser from "../components/ActivityRandomiser";
import "../styles/activity-selection.css";
import { Casino } from "@mui/icons-material";
import {useState} from "react";
import { useLocation } from "react-router-dom";

function ActivitySelection(){
    const location = useLocation();
    const receivedData = location.state; 

    console.log("recieved data for date:", receivedData);

    const [isRolling, setIsRolling] = useState(false);

    const startRolling = () => setIsRolling(false);

    const firstImage = receivedData[0].image;

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
                <ActivityRandomiser lockedState = {false}/>
                <ActivityRandomiser lockedState = {true}/>
                <ActivityRandomiser lockedState = {true}/>
            </div>
        </div>
    )
}

export default ActivitySelection;