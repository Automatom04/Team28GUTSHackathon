import axios from 'axios';


export async function autoresponse() {
    try {
      //
      const autoresponse = await axios.post("https://places.googleapis.com/v1/places:autocomplete",
        {
        "input": "pizza",
        "locationBias": {
        "circle": {
        "center": {
            "latitude": 37.7937,
            "longitude": -122.3965
        },
        "radius": 500.0
        }
    }
      },
      {headers: 
        {"X-Goog-Api-Key" : "AIzaSyA6WmAZeYGpRQzpbxj-Vgls5aVn7IiJGnU",
            "Content-Type" : "application/json"
        },
      }
      )
    ;
      return (autoresponse.data);
    } catch (error) {
      console.error("Error submitting gap information:", error.response?.data || error.message);
    }

  };

const getPlaceID = () => {
  return (
        <button onClick={autoresponse}>Get Reposnse</button>
    );
};

export default getPlaceID;