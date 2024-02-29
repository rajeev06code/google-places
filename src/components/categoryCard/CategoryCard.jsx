import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ data }) => {
    const navigate = useNavigate();
  return (
    <div className="md:w-80 w-full h-96 " onClick={() => navigate(data.link)}>
      <div className="relative w-full h-3/5 overflow-hidden rounded-xl group">
        <div className="absolute text-center cursor-pointer group-hover:flex hidden transition-all duration-1000 ease items-center justify-center text-white z-20 top-0 bg-[#2b2b2b92] font-semibold p-2 -translate-1/2 w-full h-full">
          {data.description}
        </div>
        <img
          src={data.imageUrl}
          alt="category image"
          className="w-full h-full object-cover "
        />
      </div>

      <div className="flex flex-col p-2 cursor-pointer">
        <div className="font-semibold text-lg text-ellipsis line-clamp-2">
          {data.name}
        </div>
        <div className="text-gray-600 text-ellipsis line-clamp-2">
          {data.description}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
