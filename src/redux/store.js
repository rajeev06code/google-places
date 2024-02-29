import { configureStore } from "@reduxjs/toolkit";
import geoLocationReducer from "./reducers/geoLocationSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistCongig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistCongig, geoLocationReducer);

// centralized store for the entire app.
const store = configureStore({
  reducer: {
    geolocation: persistedReducer,
  },
});

export default store;

let persistor = persistStore(store);
export { persistor };
