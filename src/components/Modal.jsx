import React, { useContext, useEffect, useState } from "react";
import ModalIcon from "../assets/Group.png";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Utilities/AppContext";

export default function Modal() {
  const navigate = useNavigate();
  const handleForm = (e) => {
    e.preventDefault();
  };

  const { addToCart, cart, setCart, totalCost, storedPrice } =
    useContext(AppContext);
  console.log(storedPrice);

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex justify-center items-center flex-col">
          <img src={ModalIcon} alt="" />
          <h3 className="font-bold text-2xl mt-3">Payment Successful</h3>
          <hr className="w-full mt-4" />
          <p className="pt-6 font-medium mb-2 text-black/60">
            Thanks for Purchasing.
          </p>
          <p className="font-medium mb-4 text-black/60">Total:{storedPrice}</p>
          <div className="w-full">
            <form onSubmit={handleForm} method="dialog w-full">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={() => navigate("/")}
                className="btn w-full bg-black/20 rounded-full"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
