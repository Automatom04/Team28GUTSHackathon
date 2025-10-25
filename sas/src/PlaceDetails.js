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
    let response = {
        "location" : place.location,
        "displayName" : place.displayName
    }
    return (response);
    } catch (error) {
      console.error("Error submitting gap information:");
    }
};

export default PlaceDetails;