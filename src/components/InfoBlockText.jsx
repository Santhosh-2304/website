import React from "react";

function InfoBlockText({ title, text, image, reverse = false }) {
  return (
    <div
      className={`flex items-center justify-center my-12 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      {/* TEXT AREA */}
      <div className="w-[600px] px-6">
        <h5 className="text-xl font-semibold mb-4">{title}</h5>
        <p className="text-gray-700 leading-relaxed">{text}</p>
      </div>

      {/* IMAGE */}
      <img
        src={image}
        className="rounded-2xl w-[500px] h-[300px] object-cover mx-8"
      />
    </div>
  );
}

export default InfoBlockText;
