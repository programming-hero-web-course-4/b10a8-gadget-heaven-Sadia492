import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";

export default function Products() {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  const { category } = useParams();
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
  console.log(products);

  return (
    <div className="lg:col-span-4 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Product key={product.product_id} product={product}></Product>
      ))}
    </div>
  );
}
