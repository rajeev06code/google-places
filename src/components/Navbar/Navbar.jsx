import React from "react";
import { Link } from "react-router-dom";
import GeoLocation from "../currentLocation/CurrentLocation";
import "../../App.css";
import ExploreIcon from "@mui/icons-material/Explore";

const Navbar = () => {
  const menuItem = [
    { name: "Home", link: "/" },
    { name: "Listing", link: "/listing" },
  ];
  return (
    <div className="w-full z-30 md:px-20 px-4 py-5 fixed top-0 left-0 bg-slate-700 text-white flex items-center justify-between">
      <div className="text-2xl font-bold ">
        <Link to={"/"} className="flex items-center gap-1">
          <ExploreIcon style={{ fontSize: "28px" }} />
          <span className="md:text-inherit text-sm">Google Places</span>
        </Link>
      </div>
      <div className="flex items-center md:gap-5 gap-1 md:text-sm text-xs">
        <GeoLocation />
        {menuItem.map((item) => (
          <Link to={item.link} className="cursor-pointer font-semibold md:text-sm text-xs">
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
