import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import noProduct from "../assets/Images/not_found.png"
const FilteredData = () => {
  const FilteredProducts = useSelector((state) => state.product.filteredData);
  return (
    <div>
      <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24">
        {FilteredProducts.length > 0 ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Filtered Data
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
              {FilteredProducts.map((product) => (
                <ProductCard product={product} />
              ))}
            </div>
          </>
        ) : (
            <div className="flex justify-center">
                <img src={noProduct} className="w-1/2 mx-auto" alt="no product" />
            </div>
        )}
      </div>
    </div>
  );
};

export default FilteredData;
