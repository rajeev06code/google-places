import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchListByCategory } from "./listingServices";
import { Rating } from "@mui/material";
import GoogleMap from "../../components/googleMap/GoogleMap";
import { ApiUrl } from "../../apiUrl";

const ListingPage = () => {
  const { category } = useParams();
  const [categoryDetails, setCategoryDetails] = useState([]);
  const apiKey = import.meta.env.VITE_APP_GOOGLE_API_KEY;

  const userLocation = useSelector((state) => state.geolocation.location);

  const fetchList = async (cat, location) => {
    const response = await fetchListByCategory(cat, location);
    if (response.status === 200) {
      setCategoryDetails(response.data.results);
    }
  };

  useEffect(() => {
    if (userLocation.lat === "" || userLocation.lng === "") return;
    fetchList(category, userLocation);
  }, [userLocation.lat, userLocation.lng]);

  return (
    <div className="w-full h-auto px-20 py-12 pt-20">
      <Navbar />
      <div className="w-full h-full flex flex-col gap-5 px-52">
        {categoryDetails &&
          categoryDetails.map((item) => (
            <div className="w-full h-52 bg-gray-100 border-[0.2px] flex gap-4 rounded-lg overflow-hidden">
              <div className="w-3/12 h-full">
                <img
                  src={`${
                    ApiUrl.googlePlacesBaseUrl
                  }/place/photo?maxwidth=400&photoreference=${
                    item.photos && item.photos[0]?.photo_reference
                  }&key=${apiKey}`}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-9/12 h-full flex flex-col gap-1 p-4">
                <div className="text-2xl font-bold text-gray-800">
                  {item.name}
                </div>
                <div className="text-gray-600 text-ellipsis line-clamp-2">
                  {item.vicinity}
                </div>
                <div className="flex items-center gap-1">
                  <Rating
                    name="simple-controlled"
                    value={item.rating}
                    readOnly
                    style={{ fontSize: "18px" }}
                  />
                  <span className="text-sm text-gray-600">
                    ({item.user_ratings_total})
                  </span>
                </div>
                <div className="mt-4">
                  <GoogleMap latLong={item.geometry.location} />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListingPage;
