import "../styles/activity-randomiser.css";
import { LockOpen, Lock } from "@mui/icons-material";
import {useState} from "react";

function ActivityRandomiser({lockedState}){
    const [isLocked, setIsLocked] = useState(lockedState);
    console.log(isLocked);

    return (
        <div className = "activity-randomiser-container">
            <div className="activity-box">
                <h1>HI</h1>
            </div>
            <div className="randomise-button" onClick ={() => setIsLocked(!isLocked)}>
                { isLocked ? <Lock/>:<LockOpen/> }
            </div>
        </div>
    )
}

export default ActivityRandomiser;