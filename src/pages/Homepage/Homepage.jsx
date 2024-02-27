import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import { categoryList } from "../../utils/Constants";

const Homepage = () => {

  return (
    <div className="w-full h-screen px-20 py-12 pt-20">
      <Navbar />
      <div className="grid grid-cols-4">
        {categoryList.map((item) => (
          <CategoryCard data={item} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
