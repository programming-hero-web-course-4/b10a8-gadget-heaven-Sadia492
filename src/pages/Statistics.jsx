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

export default function Statistics() {
  const products = useLoaderData();
  return (
    <ResponsiveContainer width="100%" height={400}>
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
        <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="price" barSize={20} fill="#413ea0" />
        {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
        <Scatter dataKey="rating" fill="red" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
