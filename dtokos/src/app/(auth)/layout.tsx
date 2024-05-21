import HeaderComponent from "@/components/headerComponent";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <HeaderComponent />
      {children}
    </div>
  );
}
