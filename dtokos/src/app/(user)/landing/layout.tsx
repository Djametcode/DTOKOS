"use client";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import HeaderComponent from "@/components/headerComponent";
import LandingHeaderComponent from "@/components/landingHeader";
import LandingUserComponent from "@/components/landingUser";
import NavbarLanding from "@/components/navbarLanding";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" w-screen h-[1200px] bg-stone-300">
      <LandingHeaderComponent />
      {children}
      <NavbarLanding />
    </div>
  );
}
