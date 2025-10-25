import "../styles/activity-randomiser.css";
import { LockOpen, Lock } from "@mui/icons-material";
import { useState, useEffect } from "react";
import thinkingImage from "../images/thinking.jpg";

function ActivityRandomiser({ data, isRolling, isLocked, setIsLocked, initialLocked, onActivityChange }) {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [currentImage, setCurrentImage] = useState(thinkingImage);
    const [hasUnlockedInitial, setHasUnlockedInitial] = useState(false);

    const activityData = data;

    // Handles the lock/unlock behavior
    const toggleLock = () => {
        if (initialLocked) {
            // Second and third items: allow unlock once, then lock once
            if (!hasUnlockedInitial) {
                setIsLocked(false); // unlock
                setHasUnlockedInitial(true);
            } else if (hasUnlockedInitial && !isLocked) {
                setIsLocked(true); // lock back
            }
        } else {
            // First item: allow locking once
            if (!isLocked) {
                setIsLocked(true);
            }
        }
    };

    useEffect(() => {
        if (isRolling && !isLocked) {
            setCurrentImage(thinkingImage);
            setTimeout(() => {
                const numOfDataPoints = activityData.length;
                const randomIndex = Math.floor(Math.random() * numOfDataPoints);
                setSelectedIndex(randomIndex);
                setCurrentImage(activityData[randomIndex].image);
                onActivityChange?.(activityData[randomIndex]);
            }, 3000);
        }
    }, [isRolling]);

    return (
        <div className="activity-randomiser-container">
            <div className="activity-box">
                <img src={currentImage} className="box-image" alt="activity" />
            </div>
            <div className="activity-text">
                {activityData[selectedIndex] && (!isRolling || isLocked) && (
                    <>
                        <h2>{activityData[selectedIndex].name}</h2>
                        <h3>{activityData[selectedIndex].location}</h3>
                        <p>{activityData[selectedIndex].description}</p>
                    </>
                )}
            </div>
            <div className="randomise-button" onClick={toggleLock}>
                {isLocked ? <Lock /> : <LockOpen />}
            </div>
        </div>
    );
}

export default ActivityRandomiser;
