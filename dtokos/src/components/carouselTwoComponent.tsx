/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

export default function CarouselTwoComponent() {
  const images = [
    {
      image: "/pict1.jpg",
    },
    {
      image: "/pict2.jpg",
    },
    {
      image: "/pict3.jpg",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const changeImage = () => {
    if (currentImage === images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeImage();
    }, 3000);

    return () => clearInterval(interval);
  });
  return (
    <div className=" w-full h-full relative">
      <img
        className=" w-full max-h-[700px] rounded-tr-3xl rounded-br-3xl object-cover overflow-hidden"
        src={images[currentImage].image}
        alt=""
      />
      {/* <div className=" absolute top-1/2 w-full">
        <div className=" flex w-full justify-between">
          <div
            onClick={() => changeImage()}
            className=" cursor-pointer text-white"
          >
            <SlArrowLeft size={40} />
          </div>
          <div
            onClick={() => changeImage()}
            className=" cursor-pointer text-white"
          >
            <SlArrowRight size={40} />
          </div>
        </div>
      </div> */}
    </div>
  );
}
