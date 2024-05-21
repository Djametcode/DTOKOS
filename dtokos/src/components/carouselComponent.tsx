/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

export default function CarouselComponent() {
  const images = [
    {
      image: "/ip14.jpeg",
    },
    {
      image: "/ip15.jpeg",
    },
    {
      image: "/ipad.jpeg",
    },
    {
      image: "/mac1.jpeg",
    },
    {
      image: "/mac2.jpeg",
    },
    {
      image: "/brown1.jpeg",
    },
    {
      image: "/brown2.jpeg",
    },
    {
      image: "/brown3.jpeg",
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
    }, 2000);

    return () => clearInterval(interval);
  });
  return (
    <div className=" w-full h-full relative">
      <img
        className=" w-full h-full object-fill rounded-3xl"
        src={images[currentImage].image}
        alt=""
      />
      <div className=" absolute top-1/2 w-full">
        <div className=" flex w-full justify-between">
          <div onClick={() => changeImage()} className=" cursor-pointer">
            <SlArrowLeft size={40} />
          </div>
          <div onClick={() => changeImage()} className=" cursor-pointer">
            <SlArrowRight size={40} />
          </div>
        </div>
      </div>
    </div>
  );
}
