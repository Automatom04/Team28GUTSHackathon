import { useLocation } from "react-router-dom";
import "../styles/planned-activity.css";

function PlannedActivity() {
  const location = useLocation();
  const activity = location.state.activity;
  const food = location.state.food;
  const bar = location.state.bar;

  console.log("activity", activity);
  console.log("food", food);
  console.log("bar", bar);

  return (
    <div className="planned-activity-container">
      <h1 className="title">Here is your chosen night out!!!</h1>
      <div className="container">
        <h1>Activity</h1>
        {displayItems(activity)}
        <hr style={{ margin: "50px" }} />
        <h1 className="title">Food</h1>
        {displayItems(food)}
        <hr style={{ margin: "50px" }} />
        <h1 className="title">Bar</h1>
        {displayItems(bar)}
      </div>
    </div>
  );
}

export default PlannedActivity;

function displayItems(item) {
  return (
    <div className="display-items-container">
      <h3 className="items">
        {item.name} | {item.location}
      </h3>
      <div content>
        <h4 className="items" style={{ fontWeight: "300" }}>
          {item.description}
        </h4>
        <img src={item.image} alt="image of activity" />
      </div>
    </div>
  );
}
