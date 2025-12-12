import React from "react";
import ScrollAnimate from "./ScrollFade";

function TitleBlock({
  title,
  description,
  image,
}) {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between px-10 py-8 bg-gradient-to-r from-gray-50  to-blue-300 relative overflow-hidden">

      {/* LEFT CONTENT */}
      <div className= "md:w-3/4 space-y-6">
        <h1 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
          {title}
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="md:w-1/3 flex relative mt-10 ml-30 md:mt-0">
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
