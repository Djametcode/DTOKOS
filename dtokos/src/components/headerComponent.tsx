import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";

export default function HeaderComponent() {
  return (
    <div className=" font-sora flex h-[120px] bg-slate-100 w-screen justify-evenly items-center">
      <h1 className=" text-2xl">DTOKOS</h1>
      <div className=" flex gap-14 items-center justify-between">
        <div className=" flex gap-11 items-center justify-between">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Shop</Link>
          <Link href={"/"}>Contact</Link>
        </div>
        <div className=" flex h-[35px] items-center bg-white rounded-lg">
          <input
            className=" pl-5 w-[375px] h-full bg-transparent focus:outline-none bg-slate-50 rounded-tl-lg rounded-bl-lg placeholder:text-black"
            type="text"
            placeholder="search"
          />
          <div className=" bg-blue-600 h-full w-[50px] flex items-center justify-center rounded-tr-lg rounded-br-lg text-white">
            <FaSearch size={17} />
          </div>
        </div>
      </div>
      <div className=" flex gap-3">
        <AiOutlineUser size={28} />
        <AiOutlineShopping size={28} />
      </div>
    </div>
  );
}
