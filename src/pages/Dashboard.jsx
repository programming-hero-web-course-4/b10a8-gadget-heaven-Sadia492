import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Heading from "../components/Heading";
import Cart from "../components/Cart";
import WishList from "../components/WishList";
import { AppContext } from "../Utilities/AppContext";

export default function Dashboard() {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    document.title = "Dashboard | Gadget Heaven";
  }, []);

  const { cart, setCart } = useContext(AppContext);

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
            className={` rounded-full w-28 h-10 ${
              isActive
                ? "bg-white text-primary"
                : "text-white  border-white border-2"
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => handleDashboard("wishlist")}
            className={` rounded-full w-28 h-10 ${
              !isActive
                ? "bg-white text-primary"
                : "text-white  border-white border-2"
            }`}
          >
            WishList
          </button>
        </div>
      </div>
      <div>
        {isActive ? (
          <Cart handleSortBtn={handleSortBtn}></Cart>
        ) : (
          <WishList></WishList>
        )}
      </div>
    </div>
  );
}
