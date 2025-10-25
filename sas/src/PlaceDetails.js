import axios from 'axios';

export async function PlaceDetails(placeID) {
    try {
    let { Place } = await google.maps.importLibrary("places");
    let { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // Use place ID to create a new Place instance.
    let place = new Place({
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
      console.error("Error submitting gap information:", error.response?.data || error.message);
    }
};

export default PlaceDetails;
