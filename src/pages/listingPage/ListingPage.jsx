import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchListByCategory } from "./listingServices";
import { Rating } from "@mui/material";
import GoogleMap from "../../components/googleMap/GoogleMap";
import { ApiUrl } from "../../apiUrl";
import noImageFound from "../../assets/No-image-found.jpg";
import Search from "../../components/ui/Search";
import { useDebounce } from "../../hooks/useDebounce";
import Footer from "../../components/footer/Footer";

const ListingPage = () => {
  const { category } = useParams();// getting category name to call google places list api
  const navigate = useNavigate();
  const [categoryDetails, setCategoryDetails] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const apiKey = import.meta.env.VITE_APP_GOOGLE_API_KEY;
  // implemented debaounce method for search with each key strokes
  const debouncedSearchTerm = useDebounce(searchTerm);

  const userLocation =
    JSON.parse(localStorage.getItem("geoLoaction")) ||
    useSelector((state) => state.geolocation.location);// getting location lat and long from the redux store

// calling api for the list of places with details with pagination with next token
  const fetchList = async (cat, location, name, nextToken, newData) => {
    const response = await fetchListByCategory(cat, location, name, nextToken);
    if (response.status === 200) {

      if (newData) {
        setCategoryDetails(response.data.results);
      } else {
        setCategoryDetails((prevData) => [
          ...prevData,
          ...response.data.results,
        ]);
      }
      setNextPageToken(response.data?.next_page_token);
    }
  };

  useEffect(() => {
    if (userLocation.lat === "" || userLocation.lng === "") return;
    fetchList(category, userLocation, debouncedSearchTerm, "", true);
  }, [userLocation.lat, userLocation.lng, debouncedSearchTerm]);

  return (
    <>
      <div className="w-full h-auto md:px-20 px-4 py-12 md:pt-20 pt-24">
        <Navbar />
        <div className="w-full h-full flex flex-col gap-5 md:px-52 px-4">
          <div>
            <Search
              className={"w-full"}
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              placeholder={"Search"}
            />
          </div>
          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
            {categoryDetails &&
              categoryDetails.map((item) => (
                <div className="w-full md:h-52 h:96 bg-gray-100 border-[0.2px] flex md:flex-row flex-col gap-4 rounded-lg overflow-hidden hover:scale-[1.01] transition-all duration-200 ease-out">
                  <div className="md:w-4/12 w-full h-full">
                    <img
                      src={
                        item.photos
                          ? `${ApiUrl.googlePlacesBaseUrl}/place/photo?maxwidth=400&photoreference=${item.photos[0]?.photo_reference}&key=${apiKey}`
                          : noImageFound
                      }
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-8/12 w-full h-full flex flex-col gap-1 p-4">
                    <div className="text-2xl font-bold text-gray-800">
                      {item.name}
                    </div>
                    <div className="text-gray-600 text-ellipsis line-clamp-2">
                      {item.vicinity}
                    </div>
                    <div className="flex items-center gap-1">
                      {/* ratings components from the mui */}
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
                    <div className="mt-4 flex items-center gap-4">
                      <button
                        onClick={() => navigate(`/place/${item.place_id}`)}
                        className="bg-teal-400 hover:bg-teal-600 text-white font-bold py-1 px-4 rounded"
                      >
                        View Detail
                      </button>
                      <GoogleMap latLong={item.geometry.location} />
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex justify-center mt-8">
            {/* Pagination of the list with google nextpagetoken */}
            {nextPageToken && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() =>
                  fetchList(
                    category,
                    userLocation,
                    debouncedSearchTerm,
                    nextPageToken,
                    false
                  )
                }
              >
                Load More
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListingPage;
