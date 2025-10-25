import Header from "../components/Header";
import ActivityRandomiser from "../components/ActivityRandomiser";
import "../styles/activity-selection.css";

function ActivitySelection(){
    return (
        <div>
            <Header/>
            <h2 className="instructions">Please select your three activities! You can lock an activity if you wish to keep it, or delete an activity if you do not want to consider it.</h2>
            <div className= "activities-container">
                <ActivityRandomiser/>
                <ActivityRandomiser/>
                <ActivityRandomiser/>
            </div>
        </div>
    )
}

export default ActivitySelection;