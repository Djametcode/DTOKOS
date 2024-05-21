import Link from "next/link";

export default function IntroduceComponent() {
  return (
    <div className=" font-sora w-full pl-36 max-sm:p-5">
      <div className="">
        <h1 className=" text-blue-600 font-extrabold">Welcome to DTOKOS</h1>
        <div className=" max-w-[400px] max-sm:max-w-[400px] mt-7 max-sm:mt-20">
          <p className=" text-4xl">Biggest online shop in indonesia.</p>
        </div>
        <div className=" max-w-[400px] mt-5 text-justify">
          <p className=" text-sm text-slate-700">
            Trying to find something? DTOKOS provide you everything. shirt,
            gadget, everything else. create account or login now to getting
            started. and connect with thousand seller and buyer
          </p>
        </div>
        <div className=" bg-blue-600 h-[40px] w-[100px] text-sm flex items-center justify-center rounded-lg mt-7 text-white">
          <Link href={"/login"}>Get Started</Link>
        </div>
      </div>
    </div>
  );
}
