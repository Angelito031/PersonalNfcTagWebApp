import React from "react";
import image from "../assets/img.jpg";

const Image = () => {
  const img = image;
  return (
    <div className="flex justify-center items-center md:col-span-2 lg:col-span-2">
      <img
        src={img}
        alt="Profile"
        className="w-full max-w-xs md:max-w-full rounded-xl object-cover lg:max-w-full"
      />
    </div>
  );
};

export default Image;
