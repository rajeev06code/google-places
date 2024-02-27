import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: {
    lat: "",
    long: "",
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
      state.location.long = action.payload.long;
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
