import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getCartFromLs, getWishFromLs } from "../Utilities/LocalStorage";
import Heading from "../components/Heading";
import Cart from "../components/Cart";
import WishList from "../components/WishList";
import Modal from "../components/Modal";

export default function Dashboard() {
  const [isActive, setIsActive] = useState(true);
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);
  const data = useLoaderData();
  const [totalCost, setTotalCost] = useState(0);
  const [storedPrice, setStoredPrice] = useState(0);

  useEffect(() => {
    if (data.length) {
      const selectedItem = getCartFromLs();
      const selectedWish = getWishFromLs();
      const savedCart = [];
      const savedWish = [];
      for (const id of selectedItem) {
        const product = data.find(
          (singleProduct) => singleProduct.product_id === id
        );
        savedCart.push(product);
      }
      for (const id of selectedWish) {
        const product = data.find(
          (singleProduct) => singleProduct.product_id === id
        );
        savedWish.push(product);
      }
      setCart(savedCart);
      setWishList(savedWish);
    }
  }, [data]);
  // console.log(wishList);

  const handleDashboard = (type) => {
    if (type === "cart") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const handleSortBtn = () => {
    const sortedCart = [...cart].sort((a, b) => b.price - a.price);
    setCart(sortedCart);
  };

  useEffect(() => {
    const total = cart.reduce((prev, curr) => prev + curr.price, 0);
    setTotalCost(total);
  }, [cart]);

  const handlePurchaseBtn = () => {
    setStoredPrice(totalCost);
    my_modal_1.showModal();
    setTotalCost(0);
    setCart([]);
    localStorage.removeItem("cart");
  };
  return (
    <div>
      <div className="bg-primary pb-8">
        <Heading
          title="Dashboard"
          subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        ></Heading>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleDashboard("cart")}
            className=" bg-white text-primary rounded-full w-28 h-10"
          >
            Cart
          </button>
          <button
            onClick={() => handleDashboard("wishlist")}
            className=" text-white rounded-full w-28 h-10 border-white border-2"
          >
            WishList
          </button>
        </div>
      </div>
      <div>
        {isActive ? (
          <Cart
            cart={cart}
            handlePurchaseBtn={handlePurchaseBtn}
            totalCost={totalCost}
            handleSortBtn={handleSortBtn}
          ></Cart>
        ) : (
          <WishList wishList={wishList}></WishList>
        )}
      </div>
      <Modal storedPrice={storedPrice}></Modal>
    </div>
  );
}
