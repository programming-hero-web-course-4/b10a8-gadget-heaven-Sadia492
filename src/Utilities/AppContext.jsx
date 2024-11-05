// AppContext.js
import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [storedPrice, setStoredPrice] = useState(0);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Add product to the cart array
  };
  const addToWishList = (product) => {
    setWishList((prevCart) => [...prevCart, product]); // Add product to the cart array
  };

  useEffect(() => {
    const total = cart.reduce((prev, curr) => prev + curr.price, 0);
    setTotalCost(total);
  }, [cart]);
  useEffect(() => {
    if (totalCost) {
      setStoredPrice(totalCost); // Store total cost
    }
  }, [totalCost]);
  const handlePurchase = () => {
    setCart([]); // Clear cart
    if (totalCost) {
      my_modal_1.showModal();
    }
    localStorage.removeItem("cart"); // Clear from localStorage if needed
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        setCart,
        wishList,
        setWishList,
        addToWishList,
        totalCost,
        storedPrice,
        handlePurchase,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
