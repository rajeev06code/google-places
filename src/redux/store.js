import { configureStore } from "@reduxjs/toolkit";
import geoLocationReducer from "./reducers/geoLocationSlice";

const store = configureStore({
  reducer: {
    geolocation: geoLocationReducer,
  },
});

export default store
