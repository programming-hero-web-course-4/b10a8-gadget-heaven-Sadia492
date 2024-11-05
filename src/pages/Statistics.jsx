import React from "react";
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
  return (
    <div>
      <Heading
        title="Statistics"
        subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
      ></Heading>
      <h2 className="font-bold text-2xl w-11/12 mx-auto py-8">Statistics</h2>
      <ResponsiveContainer
        className="bg-white mx-auto"
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
            fill="#8884d8"
            stroke="#8884d8"
          />
          <Bar dataKey="price" barSize={20} fill="#413ea0" />
          {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
          <Scatter dataKey="rating" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
