import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";

export default function Products() {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  const { category } = useParams();
  useEffect(() => {
    if (category) {
      document.title = `${category} | Gadget Heaven`;
    } else {
      document.title = "All Products | Gadget Heaven";
    }
  }, [category]);

  useEffect(() => {
    if (category) {
      const filteredProducts = data.filter(
        (product) => product.category == category
      );
      setProducts(filteredProducts);
    } else {
      setProducts(data);
    }
  }, [data, category]);

  return (
    <div className="lg:col-span-4 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6 content-start">
      {products.length > 0 ? (
        products.map((product) => (
          <Product key={product.product_id} product={product}></Product>
        ))
      ) : (
        <h2 className="text-left font-bold text-primary text-4xl ml-6 w-full col-span-full">
          No Data Found
        </h2>
      )}
    </div>
  );
}
