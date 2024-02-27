import React from "react";
import { Link } from "react-router-dom";
import GeoLocation from "../currentLocation/CurrentLocation";
import "../../App.css"

const Navbar = () => {
  const menuItem = [
    { name: "Home", link: "/" },
    { name: "Listing", link: "/listing" },
    { name: "Abc", link: "/abc" },
  ];
  return (
    <div className="w-full z-30 px-20 py-5 fixed top-0 left-0 bg-slate-700 text-white flex items-center justify-between">
      <div className="text-2xl font-bold">Google Places</div>
      <div className="flex items-center gap-5">
        <GeoLocation/>
        {menuItem.map((item) => (
          <Link to={item.link} className="cursor-pointer font-semibold">
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
