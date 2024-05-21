import CarouselComponent from "@/components/carouselComponent";
import CarouselTwoComponent from "@/components/carouselTwoComponent";
import Link from "next/link";
import { FaApple, FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";

export default function RegisterComponent() {
  return (
    <div className=" ml-[200px] mr-[200px] mt-[75px] rounded-lg bg-slate-50 rounded-tl-4xl flex">
      <div className=" font-sora flex flex-col items-center justify-center pb-16 pt-16 basis-1/2 h-[700px] rounded-3xl bg-slate-100">
        <div className=" text-center mt-7">
          <h2 className=" text-4xl">Register account</h2>
          <p className=" font-extralight text-xs mt-2">
            already have account?
            <span className=" pl-2">
              <Link className=" underline" href={"/login"}>
                login
              </Link>
            </span>
          </p>
        </div>
        <div className=" flex gap-5 mt-9">
          <div className=" w-[40px] h-[40px] rounded-full border-[0.5px] border-black flex items-center justify-center">
            <FaGoogle size={20} />
          </div>
          <div className=" w-[40px] h-[40px] rounded-full border-[0.5px] border-black flex items-center justify-center">
            <FaApple size={20} />
          </div>
          <div className=" w-[40px] h-[40px] rounded-full border-[0.5px] border-black flex items-center justify-center">
            <FaFacebook size={20} />
          </div>
          <div className=" w-[40px] h-[40px] rounded-full border-[0.5px] border-black flex items-center justify-center">
            <FaInstagram size={20} />
          </div>
        </div>
        <div className=" flex items-center justify-center w-[400px] h-[20px] gap-5 mt-9">
          <hr className=" w-full text-black" />
          <p className=" text-sm">Or</p>
          <hr className=" w-full text-black" />
        </div>
        <div className=" w-[400px] mt-9 flex flex-col gap-5">
          <div className=" flex flex-col items-start gap-2">
            <label htmlFor="email">Username</label>
            <input
              className=" w-full h-[50px] pl-3 focus:outline-none bg-slate-200 rounded-3xl placeholder:text-sm text-sm"
              type="text"
              placeholder="username"
            />
          </div>
          <div className=" flex flex-col items-start gap-2">
            <label htmlFor="email">Email</label>
            <input
              className=" w-full h-[50px] pl-3 focus:outline-none bg-slate-200 rounded-3xl placeholder:text-sm text-sm"
              type="text"
              placeholder="example@gmail.com"
            />
          </div>
          <div className=" flex flex-col items-start gap-2">
            <label htmlFor="email">Password</label>
            <input
              className=" w-full h-[50px] placeholder:text-sm pl-3 focus:outline-none bg-slate-200 rounded-3xl text-sm"
              type="password"
              placeholder="enter your password"
            />
          </div>
        </div>
        <div>
          <div className=" w-[400px] bg-black text-white flex items-center justify-center rounded-3xl h-[50px] mt-9">
            <button>Register</button>
          </div>
        </div>
      </div>
      <div className=" basis-1/2">
        <CarouselTwoComponent />
      </div>
    </div>
  );
}
