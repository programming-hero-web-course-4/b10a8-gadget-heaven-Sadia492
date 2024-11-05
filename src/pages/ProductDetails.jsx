import React, { useContext, useEffect, useState } from "react";
import Heading from "../components/Heading";
import { useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-stars";
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import {
  addCartToLs,
  addWishToLs,
  getCartFromLs,
  getWishFromLs,
} from "../Utilities/LocalStorage";

import { AppContext } from "../Utilities/AppContext";

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const data = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const singleProduct = data.find((single) => single.product_id == id);
    setProduct(singleProduct);
  }, [data, id]);

  useEffect(() => {
    document.title = "Details | Gadget Heaven";
  }, []);

  const {
    product_title,
    product_id,
    product_image,
    category,
    price,
    description,
    availability,
    rating,
    specification,
  } = product;
  const { addToCart, setWishList, cart, wishList, setCart, addToWishList } =
    useContext(AppContext);

  const handleCartBtn = (product) => {
    addCartToLs(product);
    addToCart(product);
  };
  console.log(cart);

  const handleWishBtn = (product) => {
    addWishToLs(product);

    addToWishList(product);
  };

  return (
    <div>
      <div className="bg-primary pb-52">
        <Heading
          title="Product Details"
          subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        ></Heading>
      </div>
      <div className="grid grid-cols-3 p-8 w-4/5 bg-white mx-auto gap-8 rounded-3xl relative -top-48">
        <div className="col-span-1 h-full flex justify-center items-center w-full">
          <img className="w-full" src={product_image} alt="" />
        </div>
        <div className="col-span-2 space-y-4">
          <h2 className="font-semibold text-3xl">{product_title}</h2>
          <p className="font-semibold text-xl">Price: ${price}</p>
          <button className="bg-[#309C081A] text-green-700 border-2 rounded-full border-green-700 p-2">
            {availability ? "In Stock" : "Not In Stock"}
          </button>
          <p className="text-lg text-[#09080F99]">{description}</p>
          <div>
            <h5 className="font-bold text-lg mb-3">Specifications:</h5>
            <ol className="">
              {specification &&
                Object.keys(specification).map((n, i) => (
                  <li className="text-[#09080F99] text-lg" key={i}>
                    {i + 1}.{specification[n]}
                  </li>
                ))}
            </ol>
          </div>
          <div>
            <h5 className="font-bold text-lg">Rating:</h5>
            <div className="flex gap-2">
              <ReactStars
                count={5}
                value={rating || 0}
                size={24}
                color2="#ffd700"
                edit={false}
              />
              <button className="bg-[#09080F0D] py-1 px-3 rounded-2xl">
                {rating}
              </button>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => handleCartBtn(product)}
              className="flex justify-center items-center gap-1 bg-primary text-white rounded-full py-2 px-3"
            >
              Add to Cart <BsCart3 size={20}></BsCart3>
            </button>
            <button
              onClick={() => handleWishBtn(product)}
              className="border-2 rounded-full p-3"
            >
              <CiHeart size={20}></CiHeart>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
