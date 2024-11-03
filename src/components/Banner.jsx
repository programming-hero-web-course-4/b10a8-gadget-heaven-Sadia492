import React from "react";
import BannerImg from "../assets/banner.jpg";

export default function Banner() {
  return (
    <div className="relative">
      <div className="bg-primary text-white w-[95%] mx-auto flex flex-col text-center justify-center space-y-6 items-center pt-12 rounded-b-3xl pb-48">
        <h1 className="font-bold text-5xl lg:w-3/4">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="lg:w-3/5">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div>
          <button className="bg-white py-4 px-7 text-primary rounded-full">
            Shop Now
          </button>
        </div>
      </div>
      <div className="text-center flex justify-center items-center">
        <div className="lg:w-1/2 border-2 h-[450px] rounded-2xl border-white p-6 bg-white/30 backdrop-blur-3xl  lg:absolute lg:top-[65%]">
          <img className="w-full h-full rounded-2xl" src={BannerImg} alt="" />
        </div>
      </div>
    </div>
  );
}
