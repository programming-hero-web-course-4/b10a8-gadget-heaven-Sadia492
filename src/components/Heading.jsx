import React from "react";

export default function Heading({ title, subtitle }) {
  return (
    <div className="bg-primary text-center space-y-4 py-8 text-white">
      <h2 className="font-bold text-3xl">{title}</h2>
      <p className="md:w-3/5 mx-auto">{subtitle}</p>
    </div>
  );
}
