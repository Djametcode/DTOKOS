import { AiOutlineMail, AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";

export default function LandingHeaderComponent() {
  return (
    <div className=" flex h-[55px] justify-between w-full items-center bg-slate-100 pl-5 pr-4">
      <div className=" pl-2 flex gap-2 border rounded-lg border-slate-400 h-[30px] w-full mr-[20px]">
        <div className=" h-full flex items-center">
          <IoSearchOutline size={15} />
        </div>
        <input
          className=" bg-transparent w-full focus:outline-none text-sm h-full"
          type="text"
          placeholder="cari sesuatu"
        />
      </div>
      <div className=" flex gap-3">
        <AiOutlineMail size={23} />
        <AiOutlineBell size={23} />
        <AiOutlineShoppingCart size={23} />
        <RxHamburgerMenu size={23} />
      </div>
    </div>
  );
}
