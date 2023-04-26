import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AllProduct from "../components/AllProduct";
import { addCartItem } from "../app/productSlice";
import Header from "../components/Header";

const Menu = () => {
  const { filterby } = useParams();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.productList);

  const productDisplay = productData.filter((el) => el._id === filterby)[0];
  console.log(productDisplay);

  const handleAddCartProduct = (e) => {
    dispatch(addCartItem(productDisplay));
  };
  return (
    <>
      <Header />
      <div className="h-0 bg-black md:h-32"></div>
      <div className=" bg-black md:pb-16 p-2 md:p-4">
        <div className="w-full max-w-4xl m-auto md:flex md:items-center  ">
          <div className="max-w-sm mx-auto md:mx-0 overflow-hidden w-full p-5">
            <img
              src={productDisplay.image}
              className="hover:scale-105 transition-all h-full"
            />
          </div>
          <div className="flex text-center md:text-left flex-col gap-1">
            <h3 className="font-bold text-white  capitalize text-2xl md:text-4xl">
              {productDisplay.name}
            </h3>
            <p className=" text-gray-400  font-medium text-2xl">
              {productDisplay.category}
            </p>
            <p className=" font-bold text-white md:text-2xl">
              <span>{productDisplay.price}</span>
              <span className="text-green-600 ml-1">DA</span>
            </p>
            <div className="flex justify-center md:justify-start gap-3">
              <button className="bg-green-600 py-1 mt-2 rounded hover:bg-green-700 min-w-[100px]">
                Buy
              </button>
              <button
                onClick={handleAddCartProduct}
                className="bg-black border-2 border-white text-white py-1 mt-2 rounded  min-w-[100px]"
              >
                Add Cart
              </button>
            </div>
            <div>
              <p className="text-gray-400 font-medium">Description : </p>
              <p className="text-white mb-6">{productDisplay.description}</p>
            </div>
          </div>
        </div>
      </div>
      <AllProduct heading={"Related Product"} />
    </>
  );
};

export default Menu;
