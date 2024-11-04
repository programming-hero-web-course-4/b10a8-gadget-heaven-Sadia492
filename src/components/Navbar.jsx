import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";

export default function Navbar() {
  const links = (
    <>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>

      <NavLink to="/statistics">
        <li>Statistics</li>
      </NavLink>

      <NavLink to="/dashboard">
        <li>Dashboard</li>
      </NavLink>
    </>
  );

  const { pathname } = useLocation();

  return (
    <div className="pt-6">
      <div
        className={`w-[95%] rounded-t-3xl  mx-auto ${
          pathname === "/" ? "bg-primary  text-white" : "bg-white text-black"
        }`}
      >
        <div className="navbar bg-transparent bg-base-100 w-4/5 mx-auto">
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
          <div className="navbar-end ">
            <div className="flex gap-3">
              <div className="dropdown dropdown-end text-black  ">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle border-2 text-black rounded-full text-xl bg-white hover:bg-white"
                >
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
                >
                  <div className="card-body">
                    <span className="text-lg font-bold">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <Link>
                <div className="border-2 rounded-full text-black font-bold text-xl bg-white p-3 ">
                  <CiHeart className="font-bold" size={20}></CiHeart>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
