import { IoSearchOutline } from "react-icons/io5";
import { SiAsus, SiNike, SiVivo, SiXiaomi } from "react-icons/si";
import { RiAppleFill } from "react-icons/ri";
import { SiSamsung } from "react-icons/si";
import { FaPlus } from "react-icons/fa";

export default function LandingCategory() {
  return (
    <div className=" max-w-screen-sm overflow-scroll clear-start flex gap-4 p-4 mt-3 no-scrollbar">
      <div className=" font-sora flex flex-col gap-3 items-center justify-center">
        <div className=" bg-white h-[60px] w-[60px] flex items-center justify-center rounded-full">
          <IoSearchOutline size={30} />
        </div>
        <div className=" text-sm">
          <p>Search</p>
        </div>
      </div>
      <div className=" font-sora flex flex-col gap-3 items-center justify-center">
        <div className=" bg-white h-[60px] w-[60px] flex items-center justify-center rounded-full">
          <SiNike size={30} />
        </div>
        <div className=" text-sm">
          <p>Nike</p>
        </div>
      </div>
      <div className=" font-sora flex flex-col gap-3 items-center justify-center">
        <div className=" bg-white h-[60px] w-[60px] flex items-center justify-center rounded-full">
          <RiAppleFill size={30} />
        </div>
        <div className=" text-sm">
          <p>Apple</p>
        </div>
      </div>
      <div className=" font-sora flex flex-col gap-3 items-center justify-center">
        <div className=" bg-white h-[60px] w-[60px] flex items-center justify-center rounded-full">
          <SiSamsung size={30} />
        </div>
        <div className=" text-sm">
          <p>Samsung</p>
        </div>
      </div>
      <div className=" font-sora flex flex-col gap-3 items-center justify-center">
        <div className=" bg-white h-[60px] w-[60px] flex items-center justify-center rounded-full">
          <SiXiaomi size={30} />
        </div>
        <div className=" text-sm">
          <p>Xiaomi</p>
        </div>
      </div>
      <div className=" font-sora flex flex-col gap-3 items-center justify-center">
        <div className=" bg-white h-[60px] w-[60px] flex items-center justify-center rounded-full">
          <SiAsus size={30} />
        </div>
        <div className=" text-sm">
          <p>Asus</p>
        </div>
      </div>
      <div className=" font-sora flex flex-col gap-3 items-center justify-center">
        <div className=" bg-white h-[60px] w-[60px] flex items-center justify-center rounded-full">
          <SiVivo size={30} />
        </div>
        <div className=" text-sm">
          <p>Vivo</p>
        </div>
      </div>
      <div className=" font-sora flex flex-col gap-3 items-center justify-center">
        <div className=" bg-white h-[60px] w-[60px] flex items-center justify-center rounded-full">
          <FaPlus size={30} />
        </div>
        <div className=" text-sm">
          <p>Other</p>
        </div>
      </div>
    </div>
  );
}
