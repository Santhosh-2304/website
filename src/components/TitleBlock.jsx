import React from "react";
import ScrollAnimate from "./ScrollFade";

function TitleBlock({
  title,
  description,
  image,
}) {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-gray-50 relative overflow-hidden">

      {/* LEFT CONTENT */}
      <div className= "md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          {title}
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="md:w-1/2 flex relative mt-10 ml-30 md:mt-0">
      <ScrollAnimate>
        <img
          src={image}
          alt="hero"
          className="md:w-[700px] object-contain drop-shadow-xl rounded-2xl"
        />
        </ScrollAnimate>
      </div>
    </div>
  );
}

export default TitleBlock;
