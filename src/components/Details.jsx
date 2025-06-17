import React from "react";

const Details = () => {
  return (
    <div className="md:col-span-2 flex flex-col justify-center gap-6">
      {/* Name and Title */}
      <div className="bg-gray-100 p-4 rounded-lg shadow text-center lg:mb-3 mb-2">
        <h1 className="text-2xl font-bold">Angelito Casas</h1>
        <p className="text-gray-600 text-sm">Web Developer</p>
      </div>
    </div>
  );
};

export default Details;
