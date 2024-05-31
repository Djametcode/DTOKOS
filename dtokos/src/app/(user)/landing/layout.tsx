"use client";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import HeaderComponent from "@/components/headerComponent";
import LandingHeaderComponent from "@/components/landingHeader";
import LandingUserComponent from "@/components/landingUser";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" w-screen">
      <LandingHeaderComponent />
      <LandingUserComponent />
      {children}
    </div>
  );
}
