import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLoaderData, useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { getCartFromLs, getWishFromLs } from "../Utilities/LocalStorage";
import { AppContext } from "../Utilities/AppContext";

export default function Navbar() {
  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          `py-2 px-4 ${isActive ? "bg-black text-white rounded-lg" : ""}`
        }
        to="/"
      >
        <li>Home</li>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `py-2 px-4 ${isActive ? "bg-black text-white rounded-lg" : ""}`
        }
        to="/statistics"
      >
        <li>Statistics</li>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `py-2 px-4 ${isActive ? "bg-black text-white rounded-lg" : ""}`
        }
        to="/dashboard"
      >
        <li>Dashboard</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `py-2 px-4 ${isActive ? "bg-black text-white rounded-lg" : ""}`
        }
        to="/support"
      >
        <li>Support</li>
      </NavLink>
    </>
  );

  const { pathname } = useLocation();

  const { addToCart, cart, wishList, totalCost } = useContext(AppContext);

  return (
    <div className={` ${pathname === "/" ? "pt-6" : ""}`}>
      <div
        className={` ${
          pathname === "/"
            ? "bg-primary w-[95%]  rounded-t-3xl mx-auto text-white"
            : "bg-white text-black"
        }`}
      >
        <div className="navbar bg-transparent bg-base-100 w-11/12 lg:w-4/5 mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost text-xl">
              Gadget Heaven
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-6 px-1">{links}</ul>
          </div>
          <div className="navbar-end items-center ">
            <div className="flex gap-3">
              <div className="dropdown dropdown-end text-black ">
                <div tabIndex={0} role="button" className="">
                  <div className="indicator font-bold p-4 border-2 text-black rounded-full text-xl bg-white hover:bg-white">
                    <BsCart3></BsCart3>
                    <span className="badge badge-sm indicator-item">
                      {cart.length}
                    </span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
                >
                  <div className="card-body">
                    <span className="text-lg font-bold">
                      {cart.length} Items
                    </span>
                    <span className="text-info">Subtotal: ${totalCost}</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <Link>
                <div className="indicator border-2 rounded-full text-black font-bold text-xl bg-white p-4">
                  <CiHeart></CiHeart>
                  <span className="badge badge-sm indicator-item">
                    {wishList.length}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
