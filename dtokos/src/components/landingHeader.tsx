import { AiOutlineMail, AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";

export default function LandingHeaderComponent() {
  return (
    <div className=" flex justify-between items-center bg-stone-300 h-[70px] p-5 fixed top-0 w-full">
      <div className=" font-sora">
        <h1 className=" text-xl">DTOKOS</h1>
      </div>
      <div>
        <RxHamburgerMenu size={25} />
      </div>
    </div>
  );
}
