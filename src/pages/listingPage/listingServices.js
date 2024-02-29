import axios from "axios";
import { ApiUrl } from "../../apiUrl";
const apiKey = import.meta.env.VITE_APP_GOOGLE_API_KEY;

export const fetchListByCategory = async (
  category,
  latLong,
  name = "",
  nextPageToken = ""
) => {
  try {
    const response = await axios.get(
      `${ApiUrl.googlePlacesBaseUrl}/place/nearbysearch/json?key=${apiKey}&location=${latLong.lat},${latLong.lng}&radius=3000&type=${category}&name=${name}&pagetoken=${nextPageToken}`
    );

    return response;
  } catch (error) {
    return error.response;
  }
};

export const fetchGoogleMapImageWithRefrence = async (photoReference) => {
  try {
    const response = await axios.get(
      `${ApiUrl.googleMapDirectionBaseUrl}/place/photo?maxwidth=400&photoreference=${photoReference}$key=${apiKey}`
    );
  } catch (error) {}
};
