import { AiOutlineMail } from "react-icons/ai";

export default function SubscribeComponent() {
  return (
    <div className=" bg-blue-500 w-full h-[525px] font-sora flex flex-col justify-center items-center">
      <h1 className=" text-2xl max-w-[760px] text-center text-white">
        Subscribe to get information, latest news and other interesting offers
        about us
      </h1>
      <div className=" flex gap-6 h-[45px] items-center mt-24">
        <div className=" flex justify-start items-center h-[50px] w-full bg-slate-100">
          <input
            className=" h-full w-[300px] focus:outline-none bg-transparent pl-3"
            type="text"
            placeholder="your email"
          />
        </div>
        <div className=" w-[200px] h-full flex items-center justify-center bg-black text-white">
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}
