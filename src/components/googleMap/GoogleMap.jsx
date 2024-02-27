import React, { useEffect } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import { ApiUrl } from "../../apiUrl";

const GoogleMap = ({ latLong }) => {
  const handleDirectionsClick = () => {
    const destination = { lat: latLong.lat, lng: latLong.long };

    const directionUrl = `${ApiUrl.googleMapDirectionBaseUrl}/?api=1&destination=${destination.lat},${destination.lng}`;

    window.open(directionUrl, "_blank");
  };

  return (
    <div>
      <button onClick={handleDirectionsClick}>Get Directions</button>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: import.meta.env.VITE_APP_GOOGLE_API_KEY,
})(GoogleMap);
