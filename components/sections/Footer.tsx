import React from "react";
import Link from "next/link";
import { poppins } from "@/lib/fonts";
import Section from "@/components/layout/Section";
import { FadeInElement } from "@/components/animations/ContentAnimation";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Section
      as="footer"
      backgroundColor="#0f0f0f"
      className="py-8 md:py-12 border-t border-gray-800/50"
    >
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6 md:mb-8"></div>

      <FadeInElement delay={1.5}>
        {/* Mobile */}
        <div className="block md:hidden space-y-6 text-center">
          <div>
            <h4 className={`${poppins.className} text-xl font-medium text-white`}>Derkyu</h4>
            <p className={`${poppins.className} text-sm text-gray-400 font-light mt-1`}>
              Developer & Network Technician
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            <Link href="/works" className={`${poppins.className} text-sm text-gray-400 hover:text-white transition-colors duration-300 font-light`}>
              Works
            </Link>
            <Link href="/about" className={`${poppins.className} text-sm text-gray-400 hover:text-white transition-colors duration-300 font-light`}>
              About
            </Link>
          </div>
          <div>
            <p className={`${poppins.className} text-sm text-gray-400 font-light`}>Barcelona, Spain</p>
            <p className={`${poppins.className} text-xs text-gray-500 font-light mt-1`}>Available for work</p>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex flex-row justify-between items-center">
          <div>
            <h4 className={`${poppins.className} text-xl font-medium text-white`}>Derkyu</h4>
            <p className={`${poppins.className} text-sm text-gray-400 font-light mt-1`}>
              Developer & Network Technician
            </p>
          </div>
          <div className="text-right">
            <p className={`${poppins.className} text-sm text-gray-400 font-light`}>Spain, Barcelona</p>
            <p className={`${poppins.className} text-xs text-gray-500 font-light mt-1`}>Available for work</p>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-6 md:my-8"></div>

        <div className="text-center md:text-left">
          <p className={`${poppins.className} text-xs text-gray-500 font-light`}>
            © {currentYear} Derkyu. All Rights Reserved.
          </p>
        </div>
      </FadeInElement>
    </Section>
  );
};

export default Footer;