import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getCartFromLs } from "../Utilities/LocalStorage";
import Heading from "../components/Heading";
import Cart from "../components/Cart";
import WishList from "../components/WishList";

export default function Dashboard() {
  const [isActive, setIsActive] = useState(true);
  const [cart, setCart] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    if (data.length) {
      const selectedItem = getCartFromLs();
      const savedCart = [];
      for (const id of selectedItem) {
        const product = data.find(
          (singleProduct) => singleProduct.product_id === id
        );
        savedCart.push(product);
      }
      setCart(savedCart);
    }
  }, [data]);

  const handleDashboard = (type) => {
    if (type === "cart") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
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
      <div>{isActive ? <Cart cart={cart}></Cart> : <WishList></WishList>}</div>
    </div>
  );
}
