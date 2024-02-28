import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: {
    lat: "",
    lng: "",
  },
  locationFromApi: [],
  locationFromPincodeApi: []
};

const geoLocationSlice = createSlice({
  name: "geoLocation",
  initialState,
  reducers: {
    geoLocationData(state, action) {
      state.location.lat = action.payload.lat;
      state.location.lng = action.payload.lng;
    },
    geoLocationDataFromApi(state, action) {
      state.locationFromApi = action.payload;
    },
    geoLocationDataFromPincode(state, action) {
      state.locationFromPincodeApi = action.payload;
    },
  },
});

export const { geoLocationData, geoLocationDataFromApi,geoLocationDataFromPincode } =
  geoLocationSlice.actions;
export default geoLocationSlice.reducer;
