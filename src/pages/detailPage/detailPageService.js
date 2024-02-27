import axios from "axios";
import { ApiUrl } from "../../apiUrl";

const apiKey = import.meta.env.VITE_APP_GOOGLE_API_KEY;

export const fetchCategoryDetails = async (category, latLong) => {
  try {
    const response = await axios.get(
      `${ApiUrl.googlePlacesBaseUrl}/place/nearbysearch/json?key=${apiKey}&location=${latLong.lat},${latLong.long}&radius=1500&type=${category}`
    );

    return response;
  } catch (error) {
    return error.response;
  }
};
