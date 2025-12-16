import React from "react";
import ScrollAnimate from "./ScrollFade";
import { Link } from "react-router-dom";
function InfoBlock({ title, content, image, reverse = false, nav }) {
  return (
    <div className={`flex items-center justify-center gap-15 ml-10 pt-8 ${reverse ? "flex-row-reverse " : ""}`}>
      
  
      <div className="w-[620px] px-6">
        <h5 className="text-3xl font-semibold mb-3">{title}</h5>

      
        {Array.isArray(content) && nav ? (
          
          <ul className="list-disc list-inside space-y-2 mb-4">
            {content.map((item, i) => (
              <li key={i} >{item}</li>
            ))}
          </ul>
        ) : (
          <p className="leading-relaxed text-gray-700 indent-8 ">{content}</p>
        )}
        {nav && (
          <Link
            to={nav}
            className="inline-block mt-2 px-4 py-2 bg-blue-800 rounded-xl text-white hover:bg-blue-900 transition"
          >
            Explore
          </Link>
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