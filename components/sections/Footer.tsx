'use client';

import React from "react";
import { poppins } from "@/lib/fonts";
import Section from "@/components/layout/Section";
import { FadeInElement } from "@/components/animations/ContentAnimation";
import { useLanguage } from "@/components/providers/LanguageProvider";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <Section
      as="footer"
      className="!bg-surface-deep py-8 md:py-12 border-t border-fg-primary/10"
    >
      <div className="w-full h-px bg-gradient-to-r from-transparent via-fg-muted/40 to-transparent mb-6 md:mb-8"></div>

      <FadeInElement delay={1.5}>
        {/* Mobile */}
        <div className="block md:hidden space-y-6 text-center">
          <div>
            <h4 className={`${poppins.className} text-xl font-medium text-fg-primary`}>Derkyu</h4>
            <p className={`${poppins.className} text-sm text-fg-muted font-light mt-1`}>
              {t.footer.role}
            </p>
          </div>
          <div>
            <p className={`${poppins.className} text-sm text-fg-muted font-light`}>{t.footer.location}</p>
            <p className={`${poppins.className} text-xs text-fg-subtle font-light mt-1`}>{t.footer.availability}</p>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex flex-row justify-between items-center">
          <div>
            <h4 className={`${poppins.className} text-xl font-medium text-fg-primary`}>Derkyu</h4>
            <p className={`${poppins.className} text-sm text-fg-muted font-light mt-1`}>
              {t.footer.role}
            </p>
          </div>
          <div className="text-right">
            <p className={`${poppins.className} text-sm text-fg-muted font-light`}>{t.footer.location}</p>
            <p className={`${poppins.className} text-xs text-fg-subtle font-light mt-1`}>{t.footer.availability}</p>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-fg-muted/30 to-transparent my-6 md:my-8"></div>

        <div className="text-center md:text-left">
          <p className={`${poppins.className} text-xs text-fg-subtle font-light`}>
            © {currentYear} Derkyu. {t.footer.rights}
          </p>
        </div>
      </FadeInElement>
    </Section>
  );
};

export default Footer;
