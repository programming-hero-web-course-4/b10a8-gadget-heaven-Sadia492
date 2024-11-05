import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";
import Heading from "../components/Heading";

export default function Statistics() {
  const products = useLoaderData();
  useEffect(() => {
    document.title = "Statistics | Gadget Heaven";
  }, []);
  return (
    <div>
      <Heading
        title="Statistics"
        subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
      ></Heading>
      <h2 className="font-bold text-2xl w-11/12 mx-auto py-8">Statistics</h2>
      <ResponsiveContainer
        className="bg-white mx-auto rounded-xl"
        width="90%"
        height={400}
      >
        <ComposedChart
          data={products}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="product_title" scale="band" />
          <YAxis dataKey="price" />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="price"
            fill="#efe1fb"
            stroke="#efe1fb"
          />
          <Bar dataKey="price" barSize={30} fill="#9538E2" />

          <Scatter dataKey="rating" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
