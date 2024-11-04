import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Categories({ categories }) {
  const navigate = useNavigate();
  const handleAll = () => {
    navigate("/");
  };
  return (
    <div className="col-span-1 flex flex-wrap items-center justify-center bg-white lg:grid grid-cols-1 gap-4 w-full rounded-xl place-items-center content-start p-6 lg:h-96">
      <NavLink
        to="/"
        onClick={handleAll}
        className={({ isActive }) =>
          `w-40 flex justify-start rounded-full p-3 btn ${
            isActive ? "bg-primary text-white" : "bg-[#09080F0D] text-black"
          }`
        }
      >
        All Products
      </NavLink>
      {categories.map((category) => (
        <NavLink
          to={`/category/${category.category_name}`}
          key={category.id}
          className={({ isActive }) =>
            `w-40 flex justify-start rounded-full p-3 btn ${
              isActive ? "bg-primary text-white" : "bg-[#09080F0D] text-black"
            }`
          }
        >
          {category.category_name}
        </NavLink>
      ))}
    </div>
  );
}
