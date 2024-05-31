import { RxHome } from "react-icons/rx";
import { FaBell } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

export default function NavbarLanding() {
  return (
    <div className=" fixed bottom-0 w-full bg-zinc-800 text-white/80 h-[82px] rounded-tr-2xl rounded-tl-2xl">
      <div className=" h-full w-full flex items-center justify-around">
        <div className=" flex gap-2 flex-col items-center font-sora">
          <RxHome size={25} />
          <h1 className=" text-xs">Home</h1>
        </div>
        <div className=" flex gap-2 flex-col items-center font-sora">
          <FaBell size={25} />
          <h1 className=" text-xs">Notification</h1>
        </div>
        <div className=" flex gap-2 flex-col items-center font-sora">
          <RiShoppingCartLine size={25} />
          <h1 className=" text-xs">Cart</h1>
        </div>
        <div className=" flex gap-2 flex-col items-center font-sora">
          <FaUser size={25} />
          <h1 className=" text-xs">Account</h1>
        </div>
      </div>
    </div>
  );
}
