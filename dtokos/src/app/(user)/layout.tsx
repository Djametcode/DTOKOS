import LandingHeaderComponent from "@/components/landingHeader";
import NavbarLanding from "@/components/navbarLanding";
import React from "react";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" w-screen h-dvh">
      <LandingHeaderComponent />
      {children}
      <NavbarLanding />
    </div>
  );
}
