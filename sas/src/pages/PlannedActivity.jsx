import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";

function PlannedActivity(){
  const location = useLocation();
  const activity = location.state.activity;
  const food = location.state.food;
  const bar = location.state.bar;

  console.log("activity", activity);
  console.log("food", food);
  console.log("bar", bar);

    return (
        <div className="planned-activity-container">
            <Header/>
            <h1>Here is your chosen night out!!!</h1>
            <h1>Activity</h1>
            {displayItems(activity)}
            <h1>Food</h1>
            {displayItems(food)}
            <h1>Bar</h1>
            {displayItems(bar)}
        </div>
    )
}

export default PlannedActivity;

function displayItems(item){
    return (
        <div className="display-items-container">
            <h2>{item.name}</h2>
            <h2>{item.location}</h2>
            <h2>{item.description}</h2>
            <img src = {item.image}></img>
        </div>
    )
}