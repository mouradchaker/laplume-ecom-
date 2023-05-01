import React from "react";

const FilterProduct = ({ category, onClick, isActive }) => {
  return (
    <div onClick={onClick}>
      <div
        className={`text-sm md:text-lg  rounded-full cursor-pointer ${
          isActive ? " text-green-600 font-bold underline" : "text-black"
        }`}
      >
        {category}
      </div>
      <p className="text-center font-medium my-1 capitalize"></p>
    </div>
  );
};

export default FilterProduct;
