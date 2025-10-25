import "../styles/activity-randomiser.css";
import { LockOpen, Lock } from "@mui/icons-material";
import {useState} from "react";

function ActivityRandomiser(){
    const [isLocked, setIsLocked] = useState(false);
    console.log(isLocked);

    return (
        <div className = "activity-randomiser-container">
            <div className="activity-box">
                <h1>HI</h1>
            </div>
            <div className="randomise-button" onClick ={() => setIsLocked(!isLocked)}>
                { isLocked ? <LockOpen/> :  <Lock/>}
            </div>
        </div>
    )
}

export default ActivityRandomiser;