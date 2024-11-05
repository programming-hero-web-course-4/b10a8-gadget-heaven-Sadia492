import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCartFromLs, getWishFromLs } from "../Utilities/LocalStorage";
import { AppContext } from "../Utilities/AppContext";

export default function MainLayout() {
  const { addToCart, setWishList, cart, wishList, setCart, addToWishList } =
    useContext(AppContext);

  useEffect(() => {
    const cartProduct = getCartFromLs();
    setCart(cartProduct);
    const wishProduct = getWishFromLs();
    setWishList(wishProduct);
  }, []);

  return (
    <div className="bg-[#09080F0D]">
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-232px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}
