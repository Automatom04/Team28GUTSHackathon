import React from "react";
import {SyncedPlaceData} from './SyncedPlaceData.js';

export function RunPlaceData(activity, budget, radius, type) {
  //Get location of specified activity
  let nightOutInfo = SyncedPlaceData("Glasgow Central", 0, 0, 0);
  console.log("what is up");
  console.log(nightOutInfo);
  if (nightOutInfo[0]?.length == 2)
  {  
    console.log(nightOutInfo);
    console.log(nightOutInfo[0]?.activityInfo?.location?.lng());
    console.log(nightOutInfo[0]?.nearbyVenues[0]);
    console.log(nightOutInfo[0]?.nearbyVenues[1]);
    return nightOutInfo;
  }
}

export default RunPlaceData;
