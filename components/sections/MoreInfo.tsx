'use client';

import React from "react";
import { Poppins } from 'next/font/google';
import { 
  Keyboard,
  ChefHat,
  Car,
  Radio,
  Gamepad2,
  Tv,
  Music,
  Icon,
  LucideProps,
  Mail,
  Heart
} from 'lucide-react';
import { basketball } from '@lucide/lab';
import Section from "@/components/layout/Section";
import { FadeInElement } from "@/components/animations/ContentAnimation";

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

type RegularIcon = React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
type LabIcon = typeof basketball;

interface Hobby {
  name: string;
  icon: RegularIcon | LabIcon;
  isLab: boolean;
}

const MoreInfo = () => {
  const timelineEvents = [
    {
      year: "2005",
      event: "Born in Barcelona, Spain."
    },
    {
      year: "2019", 
      event: "Started in the development world as a self-taught learner."
    },
    {
      year: "2021",
      event: "Entered a networking and systems vocational program to explore other areas of computer science."
    },
    {
      year: "2025",
      event: "Currently working and focused on an active project called Derkyu Panel."
    }
  ];

  const hobbies: Hobby[] = [
    { name: 'Basketball', icon: basketball, isLab: true },
    { name: 'Cars', icon: Car, isLab: false },
    { name: 'Cooking', icon: ChefHat, isLab: false },
    { name: 'Programming', icon: Keyboard, isLab: false },
    { name: 'Streaming', icon: Radio, isLab: false },
    { name: 'Games', icon: Gamepad2, isLab: false },
    { name: 'Series', icon: Tv, isLab: false },
    { name: 'Music', icon: Music, isLab: false }
  ];

  const renderHobbyIcon = (hobby: Hobby) => {
    if (hobby.isLab) {
      return (
        <Icon 
          iconNode={hobby.icon as LabIcon}
          size={20} 
          className="text-white/30 transition-all duration-500 ease-out group-hover:scale-150 group-hover:translate-x-[-6px] group-hover:translate-y-[-6px] group-hover:rotate-12" 
        />
      );
    } else {
      const IconComponent = hobby.icon as RegularIcon;
      return (
        <IconComponent 
          size={20} 
          className="text-white/30 transition-all duration-500 ease-out group-hover:scale-150 group-hover:translate-x-[-6px] group-hover:translate-y-[-6px] group-hover:rotate-12" 
        />
      );
    }
  };

  return (
    <Section className="py-6 md:py-8">
      <FadeInElement delay={0.9}>
        {/* Mobile: Stacked layout */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {/* Bio Timeline - Mobile */}
          <div className="bg-[#212121] rounded-2xl p-6">
            <h3 className={`${poppins.className} text-xl font-semibold text-white mb-6`}>
              Bio
            </h3>

            <div className="space-y-3" role="list" aria-label="Timeline of personal milestones">
              {timelineEvents.map((item, index) => (
                <div key={index} className="flex gap-3 group hover:drop-shadow-lg transition-all duration-300" role="listitem">
                  {/* Year */}
                  <div className={`${poppins.className} text-xs font-bold text-white min-w-[45px]`}>
                    {item.year}
                  </div>
                  
                  {/* Timeline line */}
                  <div className="flex flex-col items-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                    {index < timelineEvents.length - 1 && (
                      <div className="w-0.5 bg-white/30 flex-1 mt-1"></div>
                    )}
                  </div>
                  
                  {/* Event description */}
                  <div className={`${poppins.className} text-gray-300 leading-relaxed flex-1 text-xs`}>
                    {item.event}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* I Love - Mobile */}
          <div className="bg-[#212121] rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className={`${poppins.className} text-xl font-semibold text-white flex items-center gap-2`}>
                I <Heart size={20} />
              </h3>
            </div>
            
            {/* Mobile: Simple 2-column grid */}
            <div className="grid grid-cols-2 gap-3" role="list" aria-label="Personal interests and hobbies">
              {hobbies.map((hobby, index) => (
                <div
                  key={index}
                  className="
                    relative
                    p-3 h-14
                    rounded-lg
                    border border-white/20
                    hover:shadow-lg hover:shadow-black/50
                    transition-all duration-300
                    group
                    overflow-hidden
                  "
                  role="listitem"
                  aria-label={`Interest: ${hobby.name}`}
                >
                  <span className={`${poppins.className} text-xs text-gray-300 font-medium leading-tight`}>
                    {hobby.name}
                  </span>
                  
                  <div className="absolute -bottom-1 -right-1">
                    {renderHobbyIcon(hobby)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: Original 2-column layout */}
        <div className="hidden md:grid lg:grid-cols-2 gap-8">
          {/* Bio Timeline */}
          <div className="bg-[#212121] rounded-2xl p-8">
            <h3 className={`${poppins.className} text-2xl font-semibold text-white mb-8`}>
              Bio
            </h3>
            
            <div className="space-y-4">
              {timelineEvents.map((item, index) => (
                <div key={index} className="flex gap-3 group hover:drop-shadow-lg transition-all duration-300">
                  <div className={`${poppins.className} text-sm font-bold text-white min-w-[50px]`}>
                    {item.year}
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 bg-white rounded-full mt-1.5"></div>
                    {index < timelineEvents.length - 1 && (
                      <div className="w-0.5 bg-white/30 flex-1 mt-1"></div>
                    )}
                  </div>
                  
                  <div className={`${poppins.className} text-gray-300 leading-relaxed flex-1 text-sm`}>
                    {item.event}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* I Love */}
          <div className="bg-[#212121] rounded-2xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className={`${poppins.className} text-2xl font-semibold text-white flex items-center gap-2`}>
                I <Heart size={24} />
              </h3>
            </div>
            
            <div className="space-y-3">
              {/* Desktop: Complex grid layout */}
              <div className="grid grid-cols-3 gap-3">
                {hobbies.slice(0, 3).map((hobby, index) => (
                  <div
                    key={index}
                    className="
                      relative
                      p-3 h-16
                      rounded-lg
                      border border-white/20
                      hover:shadow-lg hover:shadow-black/50
                      transition-all duration-300
                      group
                      overflow-hidden
                    "
                  >
                    <span className={`${poppins.className} text-sm text-gray-300 font-medium leading-tight`}>
                      {hobby.name}
                    </span>
                    
                    <div className="absolute -bottom-1 -right-1">
                      {renderHobbyIcon(hobby)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 justify-center">
                {hobbies.slice(3, 5).map((hobby, index) => (
                  <div
                    key={index + 3}
                    className="
                      relative
                      p-3 h-16
                      rounded-lg
                      border border-white/20
                      hover:shadow-lg hover:shadow-black/50
                      transition-all duration-300
                      group
                      overflow-hidden
                    "
                  >
                    <span className={`${poppins.className} text-sm text-gray-300 font-medium leading-tight`}>
                      {hobby.name}
                    </span>
                    
                    <div className="absolute -bottom-1 -right-1">
                      {renderHobbyIcon(hobby)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3">
                {hobbies.slice(5, 8).map((hobby, index) => (
                  <div
                    key={index + 5}
                    className="
                      relative
                      p-3 h-16
                      rounded-lg
                      border border-white/20
                      hover:shadow-lg hover:shadow-black/50
                      transition-all duration-300
                      group
                      overflow-hidden
                    "
                  >
                    <span className={`${poppins.className} text-sm text-gray-300 font-medium leading-tight`}>
                      {hobby.name}
                    </span>
                    
                    <div className="absolute -bottom-1 -right-1">
                      {renderHobbyIcon(hobby)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeInElement>

      {/* Get in Touch - Responsive */}
      <FadeInElement delay={1.2}>
        <div className="mt-6 md:mt-8">
          <div className="
              relative
              block
              bg-[#212121] 
              rounded-2xl 
              p-4 md:p-6
              border border-white/20
              hover:shadow-lg hover:shadow-black/50
              transition-all duration-300
              overflow-visible
            "
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Get in Touch */}
              <span className={`${poppins.className} text-lg md:text-xl font-medium text-white`}>
                Get in Touch
              </span>
              
              {/* Mail button - Responsive */}
              <a
                href="mailto:contact@derkyu.lol"
                className="group relative w-full md:w-auto"
                aria-label="Send email to contact@derkyu.lol"
              >
                {/* Base button */}
                <div className="flex items-center justify-center gap-2 px-4 py-2 border border-white/40 rounded-lg bg-transparent min-w-[140px] md:min-w-[180px]">
                  <Mail size={20} className="text-white/70" />
                  <span className={`${poppins.className} text-sm font-medium text-white`}>
                    Mail me
                  </span>
                </div>
                
                {/* Hover button - Hidden on mobile to avoid touch issues */}
                <div className="hidden md:flex absolute inset-0 items-center justify-center gap-2 px-4 py-2 border border-white/60 rounded-lg bg-[#2a2a2a] opacity-0 group-hover:opacity-100 group-hover:translate-y-[-8px] group-hover:translate-x-[-8px] transition-all duration-300 shadow-lg min-w-[180px]">
                  <Mail size={20} className="text-white" />
                  <span className={`${poppins.className} text-sm font-medium text-white`}>
                    contact@derkyu.lol
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </FadeInElement>
    </Section>
  );
};

export default MoreInfo;