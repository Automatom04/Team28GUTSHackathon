import React from "react";
import Autocomplete from "./Autocomplete.js";

export async function FindLocationAndNearby(activity, budget, radius, type) {
  //Get location of specified activity
  let activityAutocompleteInfo = await Autocomplete("Glasgow Central", 0, 0, 0);
  let activityPlaceID = activityAutocompleteInfo.suggestions[0].placePrediction.placeId;
  let activityLocation = await Autocomplete(activityPlaceID, 0, 500, "PlaceID");
  return activityLocation
  
}

export default FindLocationAndNearby;
