import React from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import { Outlet, useLoaderData } from "react-router-dom";
import Products from "../components/Products";

export default function Home() {
  const categories = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-5 w-4/5 mx-auto gap-6">
          <Categories categories={categories}></Categories>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
