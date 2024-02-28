import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import GoogleMap from "../../components/googleMap/GoogleMap";

const DetailPage = () => {
  return (
    <div className="w-full h-screen px-20 py-12 pt-20">
      <Navbar />
      <div className="flex items-center w-full h-2/3 overflow-hidden">
        <div className="w-1/2 h-full">
          <img
            className="w-full h-full object-cover p-1 rounded-xl"
            src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="w-1/2 h-full grid grid-cols-2 grid-rows-2">
          <img
            className="w-full h-full object-cover p-1 rounded-xl"
            src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <img
            className="w-full h-full object-cover p-1 rounded-xl"
            src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
            alt=""
          />
          <img
            className="w-full h-full object-cover p-1 rounded-xl"
            src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <img
            className="w-full h-full object-cover p-1 rounded-xl"
            src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div className="mt-4">
        <div className="text-2xl font-bold text-gray-800">
          Indulge in freshly baked bread and pastries, a delightful treat for
          any time of day.
        </div>
        <div className="text-gray-500 mt-2 font-medium">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat iure
          obcaecati aperiam? Nam distinctio ipsam quisquam minus quos ipsum quod
          culpa, beatae aliquid esse autem quae laudantium aliquam corporis
          unde?
        </div>
        <GoogleMap latLong={userLocation} />
      </div>
    </div>
  );
};

export default DetailPage;
