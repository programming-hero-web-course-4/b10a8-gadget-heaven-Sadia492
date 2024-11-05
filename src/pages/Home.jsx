import React, { useContext, useEffect } from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import { Outlet, useLoaderData } from "react-router-dom";

export default function Home() {
  const categories = useLoaderData();
  useEffect(() => {
    document.title = "Gadgets | Gadget Heaven";
  }, []);

  return (
    <div>
      <Banner></Banner>
      <div>
        <h2 className="font-bold text-center text-4xl mb-12">
          Explore Cutting-Edge Gadgets
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 w-11/12 lg:w-4/5 mx-auto gap-6">
          <Categories categories={categories}></Categories>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
