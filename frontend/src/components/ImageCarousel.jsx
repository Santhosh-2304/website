import React, { useState, useEffect } from "react";

function ImageCarousel({ images = [], interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const slide = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, interval);

    return () => clearInterval(slide);
  }, [images.length, interval]);

  // Manual navigation
  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative h-[500px] w-full overflow-hidden ">
      
      {/* IMAGE */}
      <img
        src={images[currentIndex]}
        className="w-full h-full object-cover transition-all duration-700"
      />

      {/* ARROWS */}
      <button
        onClick={goPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full cursor-pointer"
      >
        ❮
      </button>

      <button
        onClick={goNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full cursor-pointer"
      >
        ❯
      </button>

      {/* DOTS */}
      <div className="absolute bottom-3 w-full flex justify-center gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              currentIndex === index ? "bg-white" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
