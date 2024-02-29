import { configureStore } from "@reduxjs/toolkit";
import geoLocationReducer from "./reducers/geoLocationSlice";

// centralized store for the entire app.
const store = configureStore({
  reducer: {
    geolocation: geoLocationReducer,
  },
});

export default store
