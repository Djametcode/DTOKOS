import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

export default function AboutMeComponent() {
  return (
    <div className=" flex max-sm:flex-col max-sm:gap-8 justify-around max-sm:pt-16 pt-12 font-sora h-[700px] max-sm:h-full w-full bg-black text-white max-sm:p-3">
      <div>
        <h1 className=" text-4xl max-sm:text-xl">DTOKOS</h1>
        <p className=" text-sm max-sm:text-xs mt-6">
          Explore more about our product
        </p>
        <div className=" flex mt-3 gap-3">
          <FaInstagram size={25} />
          <FaFacebookF size={25} />
        </div>
      </div>
      <div>
        <div>
          <h1 className=" text-xl max-sm:text-xl">Company Info</h1>
          <div className=" flex flex-col gap-2 mt-6 text-sm max-sm:text-xs">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Product</Link>
            <Link href={"/"}>Contact</Link>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1 className=" text-xl">Store Policies</h1>
          <div className=" flex flex-col gap-2 mt-6 text-sm max-sm:text-xs">
            <Link href={"/"}>FAQ</Link>
            <Link href={"/"}>Privacy Policy</Link>
            <Link href={"/"}>Terms of use</Link>
            <Link href={"/"}>Shipping & Returns</Link>
            <Link href={"/"}>FAQ</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
