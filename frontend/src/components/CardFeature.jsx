import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCartItem, increaseQty } from "../app/productSlice";

const CardFeature = ({ image, name, price, category, loading, id }) => {
  const dispatch = useDispatch();

  const handleAddCartProduct = (e) => {
    dispatch(
      addCartItem({
        _id: id,
        name: name,
        price: price,
        category: category,
        image: image,
      })
    );
  };

  return (
    <div className="w-full min-w-[200px] max-w-[300px] border-2 border-green-700 rounded-xl bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col ">
      {image ? (
        <>
          <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <div className="h-52 w-full flex flex-col justify-center items-center">
              <img src={image} className="h-full w-full" />
            </div>
            <h3 className="font-bold text-black  capitalize text-lg mt-4 whitespace-nowrap overflow-hidden">
              {name}
            </h3>
            <p className=" text-black  font-medium">{category}</p>
            <p className=" font-bold">
              <span>{price}</span>
              <span className="text-green-600 ml-1">DA</span>
            </p>
          </Link>
          <button
            className="bg-green-600 text-white py-1 mt-2 rounded hover:bg-green-700 w-full"
            onClick={handleAddCartProduct}
          >
            Ajouter Au Panier
          </button>
        </>
      ) : (
        <div className="min-h-[150px] flex justify-center items-center">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default CardFeature;
