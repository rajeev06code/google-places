import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, Modal } from "@mui/material";
import { Close } from "@mui/icons-material";
import { ApiUrl } from "../../apiUrl";

const ModalWithSlider = ({ isOpen, photos, setIsImageModalOpen }) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [open, setOpen] = useState(true);
  const apiKey = import.meta.env.VITE_APP_GOOGLE_API_KEY;
  const [imageUri, setImageUri] = useState([]);

  console.log(photos);

  useEffect(() => {
    if (!photos || photos.length == 0) return;
    const arr = [];
    photos.map((item) => {
      arr.push(
        `${ApiUrl.googlePlacesBaseUrl}/place/photo?maxwidth=400&photoreference=${item.photo_reference}&key=${apiKey}`
      );
      return setImageUri(arr);
    });
  }, [photos]);

  console.log(imageUri);

  const handleBeforeChange = (index) => {
    setSliderIndex(index);
  };

  return (
    <Modal
      open={isOpen}
      onClose={() => setIsImageModalOpen(false)}
      className="fixed inset-0 flex items-center justify-center"
    >
      <div className="bg-white shadow-lg rounded-lg w-96 h-96">
        <div className="w-full h-full">
          <Carousel
            showThumbs={false}
            showStatus={false}
            onChange={handleBeforeChange}
            selectedItem={sliderIndex}
          >
            {imageUri.map((image, index) => (
              <div
                key={index}
                className="flex w-full h-full items-center justify-center"
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </Modal>
  );
};

export default ModalWithSlider;
