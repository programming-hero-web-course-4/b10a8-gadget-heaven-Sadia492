import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Categories({ categories }) {
  const navigate = useNavigate();
  const handleAll = () => {
    navigate("/");
  };
  return (
    <div className="col-span-1 bg-white grid grid-cols-1 gap-4 w-full rounded-xl place-items-center content-start">
      <NavLink>
        <p>
          <button
            onClick={() => handleAll()}
            className="bg-[#09080F0D] w-40 btn flex justify-start rounded-full"
          >
            All Product
          </button>
        </p>
      </NavLink>
      {categories.map((category) => (
        <NavLink to={`/category/${category.category_name}`} key={category.id}>
          <p>
            <button className="bg-[#09080F0D] w-40 btn flex justify-start rounded-full">
              {category.category_name}
            </button>
          </p>
        </NavLink>
      ))}
    </div>
  );
}
