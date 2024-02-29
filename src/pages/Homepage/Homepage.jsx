import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import { categoryList } from "../../utils/Constants";
import Footer from "../../components/footer/Footer";

const Homepage = () => {

  return (
    <>
    <div className="w-full h-screen md:px-20 px-4 md:py-12 py-4 md:pt-20 pt-28">
      <Navbar />
      <div className="grid md:grid-cols-4 grid-cols-1">
        {/* mapping the list of categories in categorylist component with all details i.e category,description,imageurl */}
        {categoryList.map((item) => (
          <CategoryCard data={item} />
        ))}
      </div>
    </div>
      <Footer />
      </>
  );
};

export default Homepage;
