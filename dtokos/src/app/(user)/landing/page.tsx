"use client";
import LandingCarousel from "@/components/landingCarousel";
import LandingCategory from "@/components/landingCategory";
import MostPopularComponent from "@/components/mostPopular";
import { HiLocationMarker } from "react-icons/hi";

export default function LandingComponent() {
  return (
    <div className=" w-full h-full">
      <div className=" max-h-[60px] p-3">
        <div className=" bg-white p-2 h-[60px] w-full rounded-3xl flex justify-between gap-3 items-center">
          <div className=" flex h-full gap-3">
            <div className=" bg-blue-600 rounded-full text-white h-full w-[48px] flex items-center justify-center">
              <HiLocationMarker size={20} />
            </div>
            <div className=" font-sora">
              <p className=" text-sm text-slate-500">send to:</p>
              <p className=" text-sm">Cilacap</p>
            </div>
          </div>
          <div className=" bg-blue-600 h-full flex items-center justify-center text-white font-sora text-sm rounded-3xl w-[100px]">
            <p>change</p>
          </div>
        </div>
      </div>
      <LandingCategory />
      <div className=" bg-white p-2 rounded-tr-[30px] rounded-tl-[30px]">
        <LandingCarousel />
        <MostPopularComponent />
      </div>
    </div>
  );
}
