import React from "react";
import {SyncedPlaceData} from './SyncedPlaceData.js';

export function RunPlaceData(activity, budget, radius, type) {
  //Get location of specified activity
  let activityAutocompleteInfo = SyncedPlaceData("Glasgow Central", 0, 0, 0);
  console.log(activityAutocompleteInfo);
  
  return(
    <div className="App">
        <header className="App-header">
            {/*<div>{activityAutocompleteInfo.location}</div>
            <div>{activityAutocompleteInfo.location.latitude}</div>
            <div>{activityAutocompleteInfo.location.longitude}</div>*/}
            
        </header>
    </div>
  );
}

export default RunPlaceData;
