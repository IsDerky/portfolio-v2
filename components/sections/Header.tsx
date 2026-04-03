import React from "react";
import { FadeInElement } from "@/components/animations/ContentAnimation";
import { DesktopNav, MobileDock } from "@/components/NavLinks";

const Header: React.FC = () => {
  return (
    <>
      {/* Desktop: Dynamic Island */}
      <FadeInElement delay={0}>
        <header className="hidden md:block fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-auto">
          <DesktopNav />
        </header>
      </FadeInElement>

      {/* Mobile: Dock Navigation */}
      <FadeInElement delay={0}>
        <div className="md:hidden fixed top-3 left-1/2 transform -translate-x-1/2 z-50 px-4">
          <MobileDock />
        </div>
      </FadeInElement>
    </>
  );
};

export default Header;
