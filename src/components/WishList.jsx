import React, { useContext } from "react";
import { AppContext } from "../Utilities/AppContext";
import { removeFromWishList } from "../Utilities/LocalStorage";
import { toast } from "react-toastify";

export default function WishList() {
  const { wishList, setWishList } = useContext(AppContext);
  const handleRemoveFromWish = (id) => {
    removeFromWishList(id);
    const remainingWish = wishList.filter(
      (product) => product.product_id !== id
    );
    setWishList(remainingWish);
    toast.error("Item Removed from Wish-list", {
      position: "top-center",
    });
  };

  return (
    <div className="w-4/5 mx-auto">
      <h2 className="font-bold text-2xl mt-8 mb-6 ">WishList</h2>
      <div className="space-y-6">
        {wishList.map((single) => (
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
                  onClick={() => handleRemoveFromWish(single.product_id)}
                  className="border-2 h-10 w-10 flex justify-center items-center text-red-500 border-red-500 rounded-full"
                >
                  X
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
