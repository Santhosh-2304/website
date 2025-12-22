import React from "react";
import ScrollAnimate from "./ScrollFade";

function TitleBlock({
  title,
  description,
  image,
}) {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between px-10 py-4 bg-gradient-to-r from-gray-50  to-blue-300 relative overflow-hidden">

      {/* LEFT CONTENT */}
      <div className= "md:w-3/4 md:space-y-6">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-1">
          {title}
        </h1>

        <p className="md:text-xl text-gray-600 indent-8 leading-relaxed">
          {description}
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="md:w-1/3 flex relative md:mt-10 md:ml-30 md:mt-0 mt-4 w-[350px]">
      <ScrollAnimate>
        <img
          src={image}
          className=" object-contain drop-shadow-xl rounded-2xl"
        />
        </ScrollAnimate>
      </div>
    </div>
  );
}

export default TitleBlock;
