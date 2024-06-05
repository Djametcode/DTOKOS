/* eslint-disable @next/next/no-img-element */
"use client";

import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";

interface Iproduct {
  _id: string;
  productName: string;
  price: number;
  description: string;
  image: string;
  rating: [];
}

export default function MostPopularComponent() {
  const [product, setProduct] = useState<Iproduct[]>([]);
  console.log(product);

  const getAllProduct = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v19/dtokos/prod/get-all-product",
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      const result: { product: Iproduct[] } = await response.data;
      console.log(result);
      setProduct(result.product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <div className=" mt-4 w-full h-full mb-28">
      <div className=" flex justify-between">
        <h1 className=" font-sora">Most popular</h1>
        <h2 className=" text-sm text-blue-600">view more</h2>
      </div>
      <div className=" grid grid-cols-2 gap-6 mt-3 h-full w-full gap-y-5">
        {product.map((item) => {
          return (
            <>
              <div className="">
                <div
                  key={item._id}
                  className=" bg-stone-300 rounded-[30px] relative w-[200px] h-[200px]"
                >
                  <div className=" w-full h-full">
                    <img
                      className=" w-full h-full rounded-3xl object-cover"
                      src={item.image}
                      alt="product image"
                    />
                  </div>
                  <div className=" absolute right-2 top-2 text-white w-[30px] h-[30px]">
                    <div className=" w-full h-full rounded-full bg-black flex items-center justify-center">
                      <FaHeart size={20} />
                    </div>
                  </div>
                </div>
                <div className=" pl-1 pt-1">
                  <div className=" flex gap-1 mt-2 items-center">
                    <BsFillStarFill fill="orange" size={18} />
                    <p>{item.rating.length}.0</p>
                  </div>
                  <div className=" font-sora text-sm text-slate-600">
                    <p>{item.productName}</p>
                  </div>
                  <div className=" mt-2 font-sora">
                    <p className=" text-xs">
                      {item.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
