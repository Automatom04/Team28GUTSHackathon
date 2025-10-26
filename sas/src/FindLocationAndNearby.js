import React from "react";
import Autocomplete from "./Autocomplete.js";

export async function FindLocationAndNearby(activity, budget, radius, type) {
  //Get location of specified activity
  let activityAutocompleteInfo = await Autocomplete("Glasgow Central", 0, 0, 0);
  let activityPlaceID = activityAutocompleteInfo.suggestions[0].placePrediction.placeId;

  let activityLocation = await Autocomplete(activityPlaceID, 0, 500, "PlaceID");
  console.log("About to query venues");
  console.log(activityLocation[0]?.location);
  let nearbyRestaurants = await Autocomplete(activityLocation[0]?.location, 0, 1000, "restaurant");
  let nearbyBars = await Autocomplete(activityLocation[0]?.location, 0, 1000, "bar");

  if (nearbyBars?.suggestions.length == 5)
  {  
    let response = [{
      activityInfo : activityLocation,
      nearbyVenues : [
        nearbyBars,
        nearbyRestaurants
      ]
    }]
    return response; 
  } 
}

export default FindLocationAndNearby;
