import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartProduct from "../components/cartProduct";
import emptyCartImage from "../assets/empty.png";
import Header from "../components/Header";
import Checkout from "../components/Checkout";

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  console.log(productCartItem);
  const [showCheckout, setShowCheckout] = useState(false);
  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );
  return (
    <>
      <div className=" ">
        <Header />
        <div className="h-5  bg-black md:h-24"></div>
        <div className="pt-16 h-[100vh] bg-black p-2 md:p-4">
          <h2 className="text-lg md:text-2xl font-bold text-black">
            Your Cart Items
          </h2>

          {productCartItem[0] ? (
            <div className="grid bg-black grid-cols-1 md:grid-cols-2 ">
              <div className="my-4 flex gap-3">
                {/* display cart items  */}
                <div className="w-full  max-w-3xl ">
                  {productCartItem.map((el) => {
                    return (
                      <CartProduct
                        key={el._id}
                        id={el._id}
                        name={el.name}
                        image={el.image}
                        category={el.category}
                        qty={el.qty}
                        total={el.total}
                        price={el.price}
                      />
                    );
                  })}
                </div>

                {/* total cart item  */}
              </div>
              <div className="w-full  text-white max-w-md  ml-auto">
                <h2 className="bg-black text-white  text-lg">Summary</h2>
                <div className="flex w-full py-2 text-lg border-b">
                  <p>Total Qty :</p>
                  <p className="ml-auto w-32 font-bold">{totalQty}</p>
                </div>
                <div className="flex w-full py-2 text-lg border-b">
                  <p>Total Price</p>
                  <p className="ml-auto w-32 font-bold">
                    {totalPrice} <span className="text-green-600">DA</span>
                  </p>
                </div>
                <button
                  onClick={() => setShowCheckout(!showCheckout)}
                  className={`${
                    showCheckout
                      ? "bg-black border border-white"
                      : "bg-green-600"
                  } w-full text-lg rounded-md mt-4 font-bold py-2 text-white`}
                >
                  {showCheckout ? "Annuler" : "Payment"}
                </button>
                <div className="bg-black">{showCheckout && <Checkout />}</div>
              </div>
            </div>
          ) : (
            <>
              <div className="flex w-full justify-center items-center flex-col">
                <img src={emptyCartImage} className="w-full max-w-sm" />
                <p className="text-white text-3xl font-bold">Panier Vide</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
