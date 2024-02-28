import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  geoLocationData,
  geoLocationDataFromApi,
  geoLocationDataFromPincode,
} from "../../redux/reducers/geoLocationSlice";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  fetchAddressByLatLong,
  fetchAddressByPincode,
} from "./locationServices";
import { Box, Modal } from "@mui/material";
import Input from "../Input";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";

const GeoLocation = () => {
  const [pincodeModal, setPincodeModal] = useState(false);
  const [pincode, setPincode] = useState("");
  const [currentCity, setCurrentCity] = useState("");

  const dispatch = useDispatch();
  const userLocation = useSelector((state) => state.geolocation.location);
  const userLocationFromApi = useSelector(
    (state) => state.geolocation.locationFromApi
  );
  const userLocationFromPincode = useSelector(
    (state) => state.geolocation.locationFromPincodeApi
  );

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 900,
    height: 500,
    overflow: "hidden",
    bgcolor: "background.paper",
    border: "none",
    outline: "none",
    boxShadow: 24,
    borderRadius: "8px",
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(
          geoLocationData({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
        );
      });
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  const fetchAddress = async (location) => {
    const response = await fetchAddressByLatLong(location);
    if (response.status === 200) {
      dispatch(geoLocationDataFromApi(response.data));
      setPincodeModal(false);
    }
  };

  const fetchAddressByPostCode = async (pin) => {
    const response = await fetchAddressByPincode(pin);
    if (response.status === 200) {
      dispatch(geoLocationDataFromPincode(response.data));
      dispatch(
        geoLocationData({
          lat: response.data.results[0].geometry.location.lat,
          lng: response.data.results[0].geometry.location.lng,
        })
      );
      setPincodeModal(false);
    }
  };

  useEffect(() => {
    if (userLocation.lat === "") return;
    fetchAddress(userLocation);
  }, [userLocation.lat, userLocation.lng]);

  useEffect(() => {
    if (
      userLocationFromPincode.results &&
      userLocationFromPincode.results.length > 0
    ) {
      const addressComponents =
        userLocationFromPincode.results[0].address_components;
      let city = "";
      for (let component of addressComponents) {
        if (component.types.includes("locality")) {
          city = component.long_name;
          break;
        }
      }
      setCurrentCity(city);
    } else {
      console.log("No results found");
    }
  }, [userLocationFromPincode]);

  useEffect(() => {
    setCurrentCity(
      userLocationFromApi?.plus_code?.compound_code
        .split(" ")[1]
        .split(",")[0] || ""
    );
  }, [userLocationFromApi]);

  return (
    <div>
      <Modal
        open={pincodeModal}
        onClose={() => setPincodeModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="w-full h-full bg-white flex">
            <div className="w-7/12 h-full overflow-hidden">
              <img
                src="https://images.pexels.com/photos/35969/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="location"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-5/12 p-4">
              <div>
                <div className="w-full items-center text-center justify-center text-3xl font-bold text-gray-800">
                  Location
                </div>
                <div>
                  <div className="mb-4 w-full flex items-center justify-between gap-3 mt-4">
                    <Input
                      type="number"
                      placeholder="Enter Pincode"
                      className="w-full border border-gray-300 outline-0"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                    />
                    <button
                      disabled={pincode.length !== 6}
                      type="submit"
                      className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${
                        pincode.length !== 6 &&
                        "cursor-not-allowed bg-slate-500 hover:bg-slate-500"
                      }`}
                      onClick={() => fetchAddressByPostCode(pincode)}
                    >
                      Submit
                    </button>
                  </div>
                  <div className="w-full h-[0.2px] bg-slate-300"></div>
                  {
                    <div className="mb-4">
                      <button
                        type="button"
                        onClick={getLocation}
                        className="bg-blue-500 mt-4 flex items-center gap-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        <MyLocationOutlinedIcon style={{ fontSize: "19px" }} />{" "}
                        Get Current Location
                      </button>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
      {userLocationFromApi.length !== 0 ||
      userLocationFromPincode.length !== 0 ? (
        <div
          onClick={() => {
            setPincodeModal(true);
          }}
          className="flex items-center gap-1 cursor-pointer"
        >
          <LocationOnIcon />
          {currentCity}
        </div>
      ) : (
        <div
          className="cursor-pointer"
          onClick={() => {
            setPincodeModal(true);
          }}
        >
          Get Location
        </div>
      )}
    </div>
  );
};

export default GeoLocation;
