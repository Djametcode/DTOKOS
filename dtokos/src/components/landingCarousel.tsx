/* eslint-disable @next/next/no-img-element */
import { useState, useRef, useEffect } from "react";

interface Image {
  pict: string;
}

export default function LandingCarousel() {
  const images: Image[] = [
    { pict: "/sale1.png" },
    { pict: "/sale2.jpeg" },
    { pict: "/sale3.jpeg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft;
      const width = carouselRef.current.offsetWidth;
      const index = Math.round(scrollPosition / width);
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (carousel) {
        carousel.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div
        ref={carouselRef}
        className="w-full h-[130px] rounded-[25px] flex justify-around overflow-scroll snap-x no-scrollbar"
      >
        {images.map((item, index) => (
          <div
            key={index}
            className="h-full snap-center snap-mandatory flex-shrink-0"
          >
            <div className="w-screen h-full">
              <img
                className="h-full w-full"
                src={item.pict}
                alt={`Carousel Image ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
