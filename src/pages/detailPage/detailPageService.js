import axios from "axios";
import { ApiUrl } from "../../apiUrl";

const apiKey = import.meta.env.VITE_APP_GOOGLE_API_KEY;

export const fetchDetail = async (placeId) => {
  try {
    const response = await axios.get(
      `${ApiUrl.googlePlacesBaseUrl}/place/details/json?place_id=${placeId}&key=${apiKey}`
    );
    return response;
  } catch (error) {
    return error.response;
  }
};
