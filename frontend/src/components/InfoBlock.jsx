import React from "react";
import ScrollAnimate from "./ScrollFade";
import { Link } from "react-router-dom";
function InfoBlock({ title, content, image, reverse = false, nav }) {
  return (
    <div className={`flex items-center justify-center  pt-8 ${reverse ? "flex-row-reverse " : ""}`}>
      
  
      <div className="w-[600px] px-6">
        <h5 className="text-3xl font-semibold mb-3">{title}</h5>

      
        {Array.isArray(content) && nav ? (
          <>
          <ul className="list-disc list-inside space-y-2 mb-4">
            {content.map((item, i) => (
              <li key={i} >{item}</li>
            ))}
          </ul>
          <Link to={nav} className="p-2 px-3 bg-blue-800 rounded-xl text-white">Explore</Link>
          </>
        ) : (
          <p className="leading-relaxed text-gray-700 ">{content}</p>
        )}
      </div>

   
      <ScrollAnimate>
        <img
          src={image}
          className="rounded-2xl w-[500px] h-[300px] object-cover mx-8"
        />
</ScrollAnimate>
    </div>
  );
}

export default InfoBlock;