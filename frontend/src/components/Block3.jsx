import React, { useEffect, useState, useRef } from "react";

export default function CourseCarousel({ items = [] }) {
  const duplicateItems = Array(100).fill(items).flat();

  const total = duplicateItems.length;

  const [index, setIndex] = useState(items.length); // start in the center copy
  const containerRef = useRef();

  // Responsive visible cards
  const getVisibleCards = () => {
    if (window.innerWidth < 640) return 1; 
    if (window.innerWidth < 1024) return 2;
    if (window.innerWidth < 1280) return 3;
    return 4;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  useEffect(() => {
    const resize = () => setVisibleCards(getVisibleCards());
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // AUTO-SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // HANDLE SEAMLESS LOOP RESET
  useEffect(() => {
    if (index >= total - visibleCards) {
      // reached near end → reset to center instantly
      setTimeout(() => {
        setIndex(items.length); // reset to center
        containerRef.current.style.transition = "none";
      }, 700);

    } else {
      containerRef.current.style.transition = "transform 0.7s ease";
    }
  }, [index, total, items.length, visibleCards]);

  // Manual Controls
  const prevSlide = () => setIndex((prev) => prev - 1);
  const nextSlide = () => setIndex((prev) => prev + 1);

  return (
    <div className="relative w-full overflow-hidden mt-20 bg-blue-950 pt-5 pb-5">

      {/* Slider container */}
      <div
        ref={containerRef}
        className="flex"
        style={{
          width: `${(total * 100) / visibleCards}%`,
          transform: `translateX(-${(index * 100) / total}%)`,
        }}
      >
        {duplicateItems.map((item, i) => (
          <div
            key={i}
            className="p-4"
            style={{
              width: `${100 / total}%`,
            }}
          >
            <div className="block3-c rounded-2xl shadow-lg bg-white p-6 h-full">
              <h6 className="font-bold text-xl mb-3">{item.title}</h6>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 cursor-pointer"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 cursor-pointer"
      >
        ❯
      </button>

    </div>
  );
}
