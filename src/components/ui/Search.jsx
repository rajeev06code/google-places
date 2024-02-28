import { SearchOutlined } from "@mui/icons-material";
import React from "react";

const Search = ({ className, placeholder, name, value, onChange }) => {
  return (
    <div
      className={`border border-gray-200 rounded-full pl-8 relative ${className}`}
    >
      <div className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-4">
        <SearchOutlined />
      </div>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full outline-none px-5 py-3 bg-transparent"
      />
    </div>
  );
};

export default Search;
