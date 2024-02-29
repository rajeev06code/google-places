import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import { categoryList } from "../../utils/Constants";

const Homepage = () => {

  return (
    <div className="w-full h-screen md:px-20 px-4 md:py-12 py-4 md:pt-20 pt-28">
      <Navbar />
      <div className="grid md:grid-cols-4 grid-cols-1">
        {categoryList.map((item) => (
          <CategoryCard data={item} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
