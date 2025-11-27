import React from "react";

function InfoBlock({ title, content, image, reverse = false }) {
  return (
    <div className={`flex items-center justify-center  pt-20 ${reverse ? "flex-row-reverse " : ""}`}>
      
      {/* TEXT */}
      <div className="w-[600px] px-6">
        <h5 className="text-xl font-semibold mb-3">{title}</h5>

        {/* If content is an array → render list */}
        {Array.isArray(content) ? (
          <ul className="list-disc list-inside space-y-2">
            {content.map((item, i) => (
              <li key={i} >{item}</li>
            ))}
          </ul>
        ) : (
          <p className="leading-relaxed text-gray-700 ">{content}</p>
        )}
      </div>

      {/* IMAGE */}
      <img
        src={image}
        className="rounded-2xl w-[500px] h-[300px] object-cover mx-8"
      />
    </div>
  );
}

export default InfoBlock;
