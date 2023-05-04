import React from "react";

import { useDispatch } from "react-redux";
import {
  deleteCartItem,
  increaseQty,
  decreaseQty,
} from "../app/productSlice.js";

const CartProduct = ({ id, name, image, category, qty, total, price }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-black text-white my-2 p-3 flex items-center gap-4 rounded border-2 border-green-600">
      <div className=" bg-white rounded overflow-hidden">
        <img src={image} className=" w-40 object-cover " />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex justify-between">
          <h3 className="font-semibold text-white  capitalize text-lg md:text-xl">
            {name}
          </h3>
          <div
            className="cursor-pointer text-white "
            onClick={() => dispatch(deleteCartItem(id))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-green-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
        </div>
        <p className=" text-white  font-medium ">{category}</p>
        <p className=" font-bold text-base">
          <span>{price}</span>
        </p>
        <div className="flex justify-between ">
          <div className="flex gap-3 items-center">
            <button
              onClick={() => dispatch(increaseQty(id))}
              className="bg-black border border-white mt-2 rounded-full   p-1 "
            >
              +
            </button>
            <p className="font-semibold p-1">{qty}</p>
            <button
              onClick={() => dispatch(decreaseQty(id))}
              className="bg-black border border-white  mt-2 rounded-full  p-1 "
            >
              -
            </button>
          </div>
          <div className="flex items-center gap-2 font-bold text-slate-700">
            <p>Total :</p>
            <p className="text-white">
              {total}
              <span>DA</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
