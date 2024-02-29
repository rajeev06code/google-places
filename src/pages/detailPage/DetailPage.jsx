import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import GoogleMap from "../../components/googleMap/GoogleMap";
import { fetchDetail } from "./detailPageService";
import { Link, useNavigate, useNavigation, useParams } from "react-router-dom";
import { ApiUrl } from "../../apiUrl";
import Loading from "../../components/Loading";
import { Rating } from "@mui/material";
import ReviewCard from "../../components/reviewCard/ReviewCard";
import { useSelector } from "react-redux";
import MapContainer from "../../components/googleMap/GoogleMapEmbed";
import noImage from "../../assets/No-image-found.jpg";
import { Add, ArrowBackIos } from "@mui/icons-material";
import ModalWithSlider from "../../components/modalWithSlider/ModalWithSlider";
import Footer from "../../components/footer/Footer";

const DetailPage = () => {
  const { placeId } = useParams();
  const navigate = useNavigate()
  const [detail, setDetail] = useState({});
  const apiKey = import.meta.env.VITE_APP_GOOGLE_API_KEY;
  const userLocation =
    JSON.parse(localStorage.getItem("geoLoaction")) ||
    useSelector((state) => state.geolocation.location);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const fetchAddressDetails = async (placeId) => {
    try {
      const response = await fetchDetail(placeId);

      if (response.data.status.toLowerCase() === "ok") {
        setDetail(response.data.result);
      }
    } catch (error) {
      console.log("error while fetching details " + error);
    }
  };

  useEffect(() => {
    fetchAddressDetails(placeId);
  }, [placeId]);

  return (
    <>
      <div className="w-full h-screen md:px-20 px-4 py-12 md:pt-20 pt-24">
        <Navbar />
        <ModalWithSlider
          isOpen={isImageModalOpen}
          photos={detail.photos}
          setIsImageModalOpen={setIsImageModalOpen}
        />
        
          <div onClick={()=> navigate(-1)} className="font-semibold flex items-center cursor-pointer mb-2">
            <ArrowBackIos style={{ fontSize: "16px" }} /> Back
          </div>
        
        {Object.keys(detail).length == 0 || userLocation.lat === "" ? (
          <Loading />
        ) : (
          <>
            {detail && (
              <div className="flex md:flex-row flex-col items-center w-full md:h-2/3 h-auto relative overflow-hidden">
                <div className="md:w-1/2 w-full h-full">
                  <img
                    className="w-full h-full object-cover p-1 rounded-xl"
                    src={
                      detail.photos && detail.photos[0].photo_reference
                        ? `${
                            ApiUrl.googlePlacesBaseUrl
                          }/place/photo?maxwidth=400&photoreference=${
                            detail.photos && detail.photos[0].photo_reference
                          }&key=${apiKey}`
                        : noImage
                    }
                    alt=""
                  />
                </div>
                <div className="md:w-1/2 w-full h-full grid grid-cols-2 grid-rows-2">
                  <img
                    className="w-full h-full object-cover p-1 rounded-xl"
                    src={
                      detail.photos && detail.photos[1]?.photo_reference
                        ? `${
                            ApiUrl.googlePlacesBaseUrl
                          }/place/photo?maxwidth=400&photoreference=${
                            detail.photos && detail.photos[1]?.photo_reference
                          }&key=${apiKey}`
                        : noImage
                    }
                    alt=""
                  />
                  <img
                    className="w-full h-full object-cover p-1 rounded-xl"
                    src={
                      detail.photos && detail.photos[2]?.photo_reference
                        ? `${
                            ApiUrl.googlePlacesBaseUrl
                          }/place/photo?maxwidth=400&photoreference=${
                            detail.photos && detail.photos[2]?.photo_reference
                          }&key=${apiKey}`
                        : noImage
                    }
                    alt=""
                  />
                  <img
                    className="w-full h-full object-cover p-1 rounded-xl"
                    src={
                      detail.photos && detail.photos[3]?.photo_reference
                        ? `${
                            ApiUrl.googlePlacesBaseUrl
                          }/place/photo?maxwidth=400&photoreference=${
                            detail.photos && detail.photos[3]?.photo_reference
                          }&key=${apiKey}`
                        : noImage
                    }
                    alt=""
                  />
                  <img
                    className="w-full h-full object-cover p-1 rounded-xl"
                    src={
                      detail.photos && detail.photos[4]?.photo_reference
                        ? `${
                            ApiUrl.googlePlacesBaseUrl
                          }/place/photo?maxwidth=400&photoreference=${
                            detail.photos && detail.photos[4]?.photo_reference
                          }&key=${apiKey}`
                        : noImage
                    }
                    alt=""
                  />
                </div>
                <div
                  onClick={() => setIsImageModalOpen(true)}
                  className="absolute right-5 bottom-5 w-auto p-1 px-3 bg-white rounded-sm cursor-pointer flex items-center gap-1"
                >
                  <Add />
                  Show more
                </div>
              </div>
            )}

            <div className="mt-4">
              <div className="w-full flex md:flex-row flex-col md:items-center items-end justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-800">
                    {detail && detail.name}
                  </div>
                  <div className="text-gray-500 mt-2 font-medium flex items-center justify-between">
                    <div>{detail.formatted_address}</div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="w-full flex md:flex-col flex-row md:items-end items-center md:justify-end justify-between md:mt-0 mt-4">
                    <div>
                      <GoogleMap latLong={detail.geometry.location} />
                    </div>
                    <div className="flex items-center gap-2">
                      {" "}
                      <Rating readOnly value={detail.rating} />(
                      {detail.user_ratings_total})
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-2 mt-10">
                {detail?.reviews ? (
                  detail?.reviews?.map((item) => <ReviewCard review={item} />)
                ) : (
                  <div className="w-full text-center col-span-2 font-bold text-xl text-gray-800">
                    No Review found
                  </div>
                )}
              </div>
              <div className="w-full h-auto overflow-hidden mt-6">
                <MapContainer
                  destination={{ lat: 12.903881, lng: 77.6012496 }}
                  location={userLocation}
                />
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default DetailPage;
