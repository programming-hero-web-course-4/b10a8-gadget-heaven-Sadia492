import React from "react";
import { Link } from "react-router-dom";

export default function Product({ product }) {
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
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="p-4 w-full">
        <img className="rounded-xl h-44" src={product_image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p className="text-lg font-medium text-gray-400">Price: {price}k</p>
        <div className="card-actions justify-start">
          <Link to={`/product/${product_id}`}>
            <button className="btn rounded-full text-primary btn-outline border-primary hover:bg-primary hover:border-primary">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
