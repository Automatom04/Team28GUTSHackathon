import Header from "../components/Header";
import ActivityRandomiser from "../components/ActivityRandomiser";
import "../styles/activity-selection.css";
import { Casino } from "@mui/icons-material";
import {useState} from "react";

function ActivitySelection(){
    const [isRolling, setIsRolling] = useState(false);

    const startRolling = () => setIsRolling(false);

    return (
        <div>
            <Header/>
            <h2 className="instructions">Please select your three activities! 
                You can lock an activity if you wish to keep it, 
                or delete an activity if you do not want to consider it.</h2>

            <h2>Click this button to randomise your activites: 
                <Casino className = {`dice ${isRolling ? "rolling" : ""}`} onClick={() => {setIsRolling(true);setTimeout(() => startRolling(),3000)}}/>  
            </h2>
            <div className= "activities-container">
                <ActivityRandomiser/>
                <ActivityRandomiser/>
                <ActivityRandomiser/>
            </div>
        </div>
    )
}

export default ActivitySelection;