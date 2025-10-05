'use client';

import React from "react";
import { Poppins } from 'next/font/google';
import Section from "@/components/layout/Section";
import { FadeInElement } from "@/components/animations/ContentAnimation";

const poppins = Poppins({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  display: 'swap',
});

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Section 
      as="footer"
      backgroundColor="#0f0f0f"
      className="py-8 md:py-12 border-t border-gray-800/50"
    >
      {/* Línea decorativa */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6 md:mb-8"></div>
      
      <FadeInElement delay={1.5}>
        {/* Mobile Layout - Diseño apilado */}
        <div className="block md:hidden space-y-6 text-center">
          {/* Logo/Nombre */}
          <div>
            <h4 className={`${poppins.className} text-xl font-medium text-white`}>
              Derkyu
            </h4>
            <p className={`${poppins.className} text-sm text-gray-400 font-light mt-1`}>
              Developer & Network Technician
            </p>
          </div>

          {/* Enlaces de navegación */}
          <div className="flex justify-center space-x-6">
            <a
              href="/works"
              className={`${poppins.className} text-sm text-gray-400 hover:text-white transition-colors duration-300 font-light`}
            >
              Works
            </a>
            <a
              href="/about"
              className={`${poppins.className} text-sm text-gray-400 hover:text-white transition-colors duration-300 font-light`}
            >
              About
            </a>
          </div>

          {/* Información de ubicación */}
          <div>
            <p className={`${poppins.className} text-sm text-gray-400 font-light`}>
              Barcelona, Spain
            </p>
            <p className={`${poppins.className} text-xs text-gray-500 font-light mt-1`}>
              Available for work
            </p>
          </div>
        </div>

        {/* Desktop Layout - Diseño original horizontal */}
        <div className="hidden md:flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo/Nombre */}
          <div>
            <h4 className={`${poppins.className} text-xl font-medium text-white`}>
              Derkyu
            </h4>
            <p className={`${poppins.className} text-sm text-gray-400 font-light mt-1`}>
              Developer & Network Technician
            </p>
          </div>

          {/* Información de ubicación */}
          <div className="text-right">
            <p className={`${poppins.className} text-sm text-gray-400 font-light`}>
              Spain, Barcelona
            </p>
            <p className={`${poppins.className} text-xs text-gray-500 font-light mt-1`}>
              Available for work
            </p>
          </div>
        </div>

        {/* Separador */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-6 md:my-8"></div>

        {/* Copyright y créditos */}
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