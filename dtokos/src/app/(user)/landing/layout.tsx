"use client";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import HeaderComponent from "@/components/headerComponent";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //   const router = useRouter();
  //   const token = Cookies.get("token");

  //   useEffect(() => {
  //     if (!token) {
  //       router.push("/login");
  //     }
  //   }, [token]);

  return (
    <div>
      <HeaderComponent />
      {children}
    </div>
  );
}
