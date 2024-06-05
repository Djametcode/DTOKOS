"use client"

import { useState } from "react"; // Import useState hook
import { RxHome } from "react-icons/rx";
import { FaBell } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarLanding() {
  const path = usePathname();
  const [currentPath, setCurrentPath] = useState(path); // State to track current path

  // Function to handle path change
  const handlePathChange = (newPath:any) => {
    setCurrentPath(newPath);
  };

  // Check if the current path matches the provided path
  const isActive = (pathname: any) => {
    return currentPath === pathname;
  };

  return (
    <div className="fixed bottom-0 w-full bg-zinc-800 text-white/80 h-[82px] rounded-tr-2xl rounded-tl-2xl">
      <div className="h-full w-full flex items-center justify-around">
        <Link href={"/landing"} onClick={() => handlePathChange("/landing")} className="flex gap-2 flex-col items-center font-sora">
          <RxHome size={25} className={isActive("/landing") ? "text-white" : "text-gray-400"} />
          <h1 className="text-xs">Home</h1>
        </Link>
        <Link href={"/notif"} onClick={() => handlePathChange("/notif")} className="flex gap-2 flex-col items-center font-sora">
          <FaBell size={25} className={isActive("/notif") ? "text-white" : "text-gray-400"} />
          <h1 className="text-xs">Notification</h1>
        </Link>
        <Link href={"/carts"} onClick={() => handlePathChange("/carts")} className="flex gap-2 flex-col items-center font-sora">
          <RiShoppingCartLine size={25} className={isActive("/carts") ? "text-white" : "text-gray-400"} />
          <h1 className="text-xs">Cart</h1>
        </Link>
        <Link href={"/profile"} onClick={() => handlePathChange("/profile")} className="flex gap-2 flex-col items-center font-sora">
          <FaUser size={25} className={isActive("/profile") ? "text-white" : "text-gray-400"} />
          <h1 className="text-xs">Account</h1>
        </Link>
      </div>
    </div>
  );
}
