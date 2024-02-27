import axios from "axios";
import { ApiUrl } from "../../apiUrl";

const apiKey = import.meta.env.VITE_APP_GOOGLE_API_KEY;

export const fetchAddressByLatLong = async (location) => {
  try {
    const response = axios.get(
      `${ApiUrl.googlePlacesBaseUrl}/geocode/json?latlng=${location.lat},${location.long}&key=${apiKey}`
    );

    return response;
  } catch (error) {
    return error.response;
  }
};

export const fetchAddressByPincode = async (pincode) => {
  try {
    const response = axios.get(
      `${ApiUrl.googlePlacesBaseUrl}/geocode/json?address=${pincode}&key=${apiKey}`
    );

    return response;
  } catch (error) {
    return error.response;
  }
};
