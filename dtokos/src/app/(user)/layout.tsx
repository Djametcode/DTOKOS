import LandingHeaderComponent from "@/components/landingHeader";
import NavbarLanding from "@/components/navbarLanding";
import React from "react";

export default function LandingLayout({children}: {children: React.ReactNode}) {
    return (
        <div>
            <LandingHeaderComponent />
            {children}
            <NavbarLanding />
        </div>
    )
}