import axios from 'axios';
import PlaceDetails from './PlaceDetails';


export async function Autocomplete(activityOrLocation, budget, radius, type) {
   if (type == "PlaceID") {
      //Get activity location
      let activityAutocompleteInfo  = await PlaceDetails(activityOrLocation);
      return activityAutocompleteInfo;
  }
  else if (typeof activityOrLocation == typeof "") {
  //Get nearby food/drink of type type
    try {
      //
      let autoresponse = await axios.post("https://places.googleapis.com/v1/places:autocomplete",
        {
        "input": activityOrLocation,
        "locationRestriction": {
          "circle": {
            "center": {
                "latitude": 55.85971,
                "longitude": -4.26670
            },
          "radius": 16000,
        }
    }
      },
      {headers: 
        {"X-Goog-Api-Key" : "AIzaSyA6WmAZeYGpRQzpbxj-Vgls5aVn7IiJGnU",
          "Content-Type" : "application/json"
        },
      });
      return (autoresponse.data);
    } catch (error) {
      console.error("Error submitting gap information:", error.response?.data || error.message);
    }
  }
  else {
  //Get nearby food/drink of type type
    try {
      //
      let autoresponse = await axios.post("https://places.googleapis.com/v1/places:autocomplete",
        {
        "input": type,
        "includedPrimaryTypes" : [type],
        "locationBias": {
          "circle": {
            "center": {
                "latitude": activityOrLocation.lat(),
                "longitude": activityOrLocation.lng()
            },
          "radius": radius
        }
    }
      },
      {headers: 
        {"X-Goog-Api-Key" : "AIzaSyA6WmAZeYGpRQzpbxj-Vgls5aVn7IiJGnU",
          "Content-Type" : "application/json"
        },
      });
      return (autoresponse.data);
    } catch (error) {
      console.error("Error submitting gap information:", error.response?.data || error.message);
    }
  };
}
export default Autocomplete;