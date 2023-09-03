import React from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl lg:text-2xl xl:text-1xl bg-blue-800 text-white py-2 w-80 text-center">
          Products
        </h1>
        <span className="w-20 h-[3px] bg-blue-800"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Discover a world of premium products at your fingertips, as our
          e-commerce website brings together an exquisite assortment of goods
          that cater to every desire and need. From fashion to electronics, home
          essentials to beauty treasures, our curated selection showcases the
          latest trends and timeless classics.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto px-14 py-10 grid grid-cols-4 gap-10">
        {products.map((item) => (
          <ProductsCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
