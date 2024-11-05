import React from "react";

export default function Footer() {
  return (
    <div className="mt-8">
      <footer className="footer flex flex-col text-center justify-center items-center bg-white text-black border-t-2 p-10">
        <div className="flex flex-col justify-center items-center pt-8">
          <h2 className="text-center font-bold text-3xl">Gadget Heaven</h2>
          <p className="font-medium">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <hr className="w-4/5 mx-auto" />
        <div className="flex flex-col md:flex-row gap-20">
          <nav className="flex-col flex space-y-2">
            <h6 className="font-bold text-black text-lg mb-2">Services</h6>
            <a className="link link-hover text-black/60">Product Support</a>
            <a className="link link-hover text-black/60">Order Tracking</a>
            <a className="link link-hover text-black/60">Shipping & Delivery</a>
            <a className="link link-hover text-black/60">Returns</a>
          </nav>
          <nav className="flex-col flex space-y-2">
            <h6 className="font-bold text-black text-lg mb-2">Company</h6>
            <a className="link link-hover text-black/60">About us</a>
            <a className="link link-hover text-black/60">Careers</a>
            <a className="link link-hover text-black/60">Contact</a>
          </nav>
          <nav className="flex-col flex space-y-2">
            <h6 className="font-bold text-black text-lg mb-2">Legal</h6>
            <a className="link link-hover text-black/60">Terms of Services</a>
            <a className="link link-hover text-black/60">Privacy policy</a>
            <a className="link link-hover text-black/60">Cookie policy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
