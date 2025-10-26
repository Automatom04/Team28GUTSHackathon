import axios from 'axios';

let place;


export async function PlaceDetails(placeID) {
    try {
    const { Place } = await window.google.maps.importLibrary("places");
    
    // Use place ID to create a new Place instance.
    place = new Place({
        id: placeID,
    });
    // Call fetchFields, passing the desired data fields.
    await place.fetchFields({ fields: ['displayName', 'formattedAddress', 'location'] })
    
    let response = [{
        displayName: place.displayName, 
        location: place.location
    }];
    console.log("PlaceDetails");
    console.log(response);
    return (response);
    } catch (error) {
      console.error("Error submitting gap information:");
    }
};

export default PlaceDetails;