import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../Utilities/AppContext";
import Modal from "./Modal";
import { removeFromLS } from "../Utilities/LocalStorage";

export default function Cart({ handleSortBtn }) {
  const { setCart, cart, totalCost, storedPrice, handlePurchase } =
    useContext(AppContext);
  console.log(storedPrice);
  //   const [storedPrice, setStoredPrice] = useState(0);

  //   const handlePurchaseBtn = () => {
  //     setStoredPrice(totalCost); // Set the stored price to the current total cost
  //     setCart([]); // Clear the cart immediately after setting stored price
  //     localStorage.removeItem("cart"); // Clear cart data from local storage
  //   };

  // Show the modal only after `storedPrice` is updated
  //   useEffect(() => {
  //     if (storedPrice > 0) {
  //       my_modal_1.showModal(); // Only show the modal once storedPrice is updated
  //     }
  //   }, [storedPrice]);

  const handleRemoveFromCart = (id) => {
    removeFromLS(id);
    const remainingCart = cart.filter((product) => product.product_id !== id);
    setCart(remainingCart);
  };

  return (
    <div className="w-4/5 mx-auto">
      <div className="flex justify-between items-center mt-8 mb-6">
        <h2 className="font-bold text-2xl">Cart</h2>
        <div className="flex  justify-center gap-4 items-center">
          <h2 className="font-bold text-2xl">
            Total Cost: {totalCost.toFixed(2)}
          </h2>
          <button
            onClick={handleSortBtn}
            className="flex justify-center p-3 text-primary border-2 border-primary rounded-full"
          >
            Sort by Price
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
              />
            </svg>
          </button>
          <button
            onClick={handlePurchase}
            className="bg-primary rounded-full shadow-[0_4px_50px_0px_rgba(11,11,11,0.15)] w-28 h-12 text-white"
          >
            Purchase
          </button>
        </div>
      </div>
      <div className="space-y-6">
        {cart.map((single) => (
          <div
            className="grid lg:grid-cols-6 bg-white p-6 gap-8 rounded-2xl"
            key={single.product_id}
          >
            <div>
              <img src={single.product_image} alt="" />
            </div>
            <div className=" col-span-5 flex justify-between">
              <div className="space-y-4">
                <h2 className="font-semibold text-2xl">
                  {single.product_title}
                </h2>
                <p className="text-lg text-[#09080F99]">{single.description}</p>
                <h5 className="font-semibold text-xl">
                  Price: ${single.price.toFixed(2)}
                </h5>
              </div>
              <div className="">
                <button
                  onClick={() => handleRemoveFromCart(single.product_id)}
                  className="border-2 h-10 w-10 flex justify-center items-center text-red-500 border-red-500 rounded-full"
                >
                  X
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal storedPrice={storedPrice}></Modal>
    </div>
  );
}
