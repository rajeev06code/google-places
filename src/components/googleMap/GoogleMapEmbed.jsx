import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const MapContainer = ({ google, location, destination }) => {
  const mapStyles = {
    width: "90%",
    height: "100%",
  };

  return (
    <Map
      google={google}
      zoom={12}
      style={mapStyles}
      initialCenter={{
        lat: location.lat,
        lng: location.lng,
      }}
    >
      <Marker position={{ lat: destination.lat, lng: destination.lng }} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: import.meta.env.VITE_APP_GOOGLE_API_KEY,
})(MapContainer);
