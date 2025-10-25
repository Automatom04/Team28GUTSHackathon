import "../styles/activity-randomiser.css";
import { LockOpen, Lock } from "@mui/icons-material";
import {useState, useEffect} from "react";
import thinkingImage from "../images/thinking.jpg";

function ActivityRandomiser({lockedState, data, isRolling}){
    const [isLocked, setIsLocked] = useState(lockedState);
    const [selectedIndex, setSelectedIndex] = useState();
    const [currentImage, setCurrentImage] = useState();

    const activityData = data;

    useEffect(() => {
        if (isRolling) {
            setCurrentImage(thinkingImage);
            setTimeout(() => {
                console.log("rolling is being used!");
                const numOfDataPoints = activityData.length;
                const randomIndex = Math.floor(Math.random() * numOfDataPoints);
                setSelectedIndex(randomIndex);
                setCurrentImage(activityData[randomIndex].image);
                console.log("random index: ", selectedIndex);
            }, 3000);
        }
    }, [isRolling]);

    return (
        <div className = "activity-randomiser-container">
            <div className="activity-box">
                <img src = {currentImage} className = "box-image"></img>
            </div>
            <div className="activity-text">
                { !isRolling && activityData[selectedIndex] &&
                    <>
                    <h2>{activityData[selectedIndex].name}</h2>
                    <h3>{activityData[selectedIndex].location}</h3>
                    <p>{activityData[selectedIndex].description}</p>
                    </>
                }
            </div>
            <div className="randomise-button" onClick ={() => setIsLocked(!isLocked)}>
                { isLocked ? <Lock/>:<LockOpen/> }
            </div>
        </div>
    )
}

export default ActivityRandomiser;