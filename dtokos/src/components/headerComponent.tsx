import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

export default function HeaderComponent() {
  return (
    <div className=" font-sora flex h-[120px] max-sm:h-[85px] bg-slate-100 w-screen justify-evenly max-sm:justify-start items-center max-sm:relative">
      <h1 className=" text-2xl max-sm:text-xl max-sm:pl-5">DTOKOS</h1>
      <div className=" flex gap-14 items-center justify-between max-sm:hidden">
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
      <div className=" flex gap-3 max-sm:hidden">
        <AiOutlineUser size={28} />
        <AiOutlineShopping size={28} />
      </div>
      <div className=" md:hidden absolute right-5">
        <GiHamburgerMenu size={25} />
      </div>
    </div>
  );
}
