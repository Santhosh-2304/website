import React, { useState, useEffect, useRef } from "react";

function ImageCarousel({ images = [], content = [], interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isHovered = useRef(false);

  // Auto slide (pause on hover)
  useEffect(() => {
    const slide = setInterval(() => {
      if (!isHovered.current) {
        setCurrentIndex((prev) =>
          prev === images.length - 1 ? 0 : prev + 1
        );
      }
    }, interval);

    return () => clearInterval(slide);
  }, [images.length, interval]);

  //Manual navigation 
  const goPrev = () => { setCurrentIndex((prev) => prev === 0 ? images.length - 1 : prev - 1 ); }; const goNext = () => { setCurrentIndex((prev) => prev === images.length - 1 ? 0 : prev + 1 ); };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => (isHovered.current = true)}
      onMouseLeave={() => (isHovered.current = false)}
    >
      {/* IMAGE */}
      <img
        src={images[currentIndex]}
        alt="carousel"
        className="w-full h-[calc(100vh-183px)] md:object-cover transition-opacity duration-700"
      />

      {/* RIGHT-CORNER OVERLAY (gradient, mild) */}
      <div className="absolute inset-y-0 right-0 md:w-[70%] md:bg-gradient-to-l from-black/85 via-black/85 to-transparent w-full bg-gradient-to-l from-black/85 via-black/85 to-transparent"></div>


      {/* TEXT ON TOP */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 md:w-[50%] indent-8 px-10 text-white font-bold w-[99%]">
        <p className="md:text-xl text-sm leading-relaxed text-white ">
          {content[currentIndex]}
        </p>
      </div>
      <button onClick={goPrev} 
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/80 text-white px-3 py-2 rounded-full cursor-pointer hover:bg-black/40 " >
         ❮ 
      </button> 
      <button onClick={goNext} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/80 text-white px-3 py-2 rounded-full cursor-pointer hover:bg-black/40" >
         ❯ 
      </button>
    </div>
  );
}

export default ImageCarousel;
