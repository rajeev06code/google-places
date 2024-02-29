import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import GoogleMap from "../../components/googleMap/GoogleMap";
import { fetchDetail } from "./detailPageService";
import { useParams } from "react-router-dom";
import { ApiUrl } from "../../apiUrl";
import Loading from "../../components/Loading";
import { Rating } from "@mui/material";
import ReviewCard from "../../components/reviewCard/ReviewCard";
import { useSelector } from "react-redux";
import MapContainer from "../../components/googleMap/GoogleMapEmbed";
import noImage from "../../assets/No-image-found.jpg";
import { Add } from "@mui/icons-material";
import ModalWithSlider from "../../components/modalWithSlider/ModalWithSlider";

const DetailPage = () => {
  const { placeId } = useParams();
  const [detail, setDetail] = useState({});
  const apiKey = import.meta.env.VITE_APP_GOOGLE_API_KEY;
  const userLocation = useSelector((state) => state.geolocation.location);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)

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
    <div className="w-full h-screen px-20 py-12 pt-20">
      <Navbar />
      <ModalWithSlider isOpen={isImageModalOpen} photos={detail.photos} setIsImageModalOpen={setIsImageModalOpen}/>
      {Object.keys(detail).length == 0 || userLocation.lat === "" ? (
        <Loading />
      ) : (
        <>
          {detail && (
            <div className="flex items-center w-full h-2/3 relative overflow-hidden">
              <div className="w-1/2 h-full">
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
              <div className="w-1/2 h-full grid grid-cols-2 grid-rows-2">
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
              <div onClick={()=>setIsImageModalOpen(true)} className="absolute right-5 bottom-5 w-auto p-1 px-3 bg-white rounded-sm cursor-pointer flex items-center gap-1">
                <Add />
                Show more
              </div>
            </div>
          )}

          <div className="mt-4">
            <div className="w-full flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-800">
                  {detail && detail.name}
                </div>
                <div className="text-gray-500 mt-2 font-medium flex items-center justify-between">
                  <div>{detail.formatted_address}</div>
                </div>
              </div>

              <div>
                <div className="flex items-end gap-1 flex-col">
                  <GoogleMap latLong={detail.geometry.location} />

                  <div className="flex items-center gap-2">
                    {" "}
                    <Rating readOnly value={detail.rating} />(
                    {detail.user_ratings_total})
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-10">
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
  );
};

export default DetailPage;
