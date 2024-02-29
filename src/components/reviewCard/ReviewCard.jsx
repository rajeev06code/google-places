import React from "react";
import moment from "moment";
import { convertUnixTimestamp } from "../../utils/convertUnixTimeToCurrentTime";
import { Rating } from "@mui/material";

const ReviewCard = ({ review }) => {
  return (
    <div className="w-full p-4 flex bg-white rounded-xl shadow-md overflow-hidden">
      <div className="flex w-20">
        <img
          className="rounded-full mr-4 w-20 mt-3 h-20 object-cover"
          src={review.profile_photo_url}
          alt={review.author}
        />
      </div>
      <div className="px-4 py-2 w-11/12">
        <div className="font-bold text-xl mb-2 flex items-center justify-between">
          {review.author_name}
          <span className="text-sm font-semibold text-gray-500 flex items-center gap-1">
            <Rating
              style={{ fontSize: "17px" }}
              readOnly
              value={review.rating}
            />{" "}
            {convertUnixTimestamp(review.time)}
          </span>
        </div>
        <p className="text-gray-700 text-base text-ellipsis line-clamp-6">{review.text}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
