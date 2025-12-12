import React from "react";
import ScrollAnimate from "./ScrollFade";
function InfoBlockText({ title, text, image, reverse = false }) {
  return (
    <div
      className={`flex items-center justify-center pt-5 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      {/* TEXT AREA */}
      <div className="w-[600px] px-13 py-10">
        <h5 className="text-3xl font-semibold mb-4">{title}</h5>
        <p className="text-gray-700 leading-relaxed">{text}</p>
      </div>

      {/* IMAGE */}
      <ScrollAnimate>
      <img
        src={image}
        className="rounded-2xl w-[500px] h-[300px] object-cover mx-8"
      />
    </ScrollAnimate>
    </div>
  );
}

export default InfoBlockText;