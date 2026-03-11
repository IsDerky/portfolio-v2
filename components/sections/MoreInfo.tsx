'use client';

import React from "react";
import { poppins } from "@/lib/fonts";
import {
  Keyboard, ChefHat, Car, Radio, Gamepad2, Tv, Music,
  Icon, LucideProps, Mail, Heart
} from 'lucide-react';
import { basketball } from '@lucide/lab';
import Section from "@/components/layout/Section";
import { FadeInElement } from "@/components/animations/ContentAnimation";

type RegularIcon = React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
type LabIcon = typeof basketball;

interface Hobby {
  name: string;
  icon: RegularIcon | LabIcon;
  isLab: boolean;
}

const timelineEvents = [
  { year: "2005", event: "Born in Barcelona, Spain." },
  { year: "2019", event: "Started in the development world as a self-taught learner." },
  { year: "2021", event: "Entered a networking and systems vocational program to explore other areas of computer science." },
  { year: "2025", event: "Currently working and focused on an active project called Derkyu Panel." },
];

const hobbies: Hobby[] = [
  { name: 'Basketball', icon: basketball, isLab: true },
  { name: 'Cars', icon: Car, isLab: false },
  { name: 'Cooking', icon: ChefHat, isLab: false },
  { name: 'Programming', icon: Keyboard, isLab: false },
  { name: 'Streaming', icon: Radio, isLab: false },
  { name: 'Games', icon: Gamepad2, isLab: false },
  { name: 'Series', icon: Tv, isLab: false },
  { name: 'Music', icon: Music, isLab: false },
];

const HobbyIcon = ({ hobby }: { hobby: Hobby }) => {
  const iconClass = "text-white/30 transition-all duration-500 ease-out group-hover:scale-150 group-hover:translate-x-[-6px] group-hover:translate-y-[-6px] group-hover:rotate-12";
  if (hobby.isLab) {
    return <Icon iconNode={hobby.icon as LabIcon} size={20} className={iconClass} />;
  }
  const IconComponent = hobby.icon as RegularIcon;
  return <IconComponent size={20} className={iconClass} />;
};

const HobbyCard = ({ hobby }: { hobby: Hobby }) => (
  <div
    className="relative p-3 h-14 md:h-16 rounded-lg border border-white/20 hover:shadow-lg hover:shadow-black/50 transition-all duration-300 group overflow-hidden"
    role="listitem"
    aria-label={`Interest: ${hobby.name}`}
  >
    <span className={`${poppins.className} text-xs md:text-sm text-gray-300 font-medium leading-tight`}>
      {hobby.name}
    </span>
    <div className="absolute -bottom-1 -right-1">
      <HobbyIcon hobby={hobby} />
    </div>
  </div>
);

const MoreInfo = () => {
  return (
    <Section className="py-6 md:py-8">
      <FadeInElement delay={0.9}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Bio Timeline */}
          <div className="bg-[#212121] rounded-2xl p-6 md:p-8">
            <h3 className={`${poppins.className} text-xl md:text-2xl font-semibold text-white mb-6 md:mb-8`}>
              Bio
            </h3>
            <div className="space-y-3 md:space-y-4" role="list" aria-label="Timeline of personal milestones">
              {timelineEvents.map((item, index) => (
                <div key={index} className="flex gap-3 group hover:drop-shadow-lg transition-all duration-300" role="listitem">
                  <div className={`${poppins.className} text-xs md:text-sm font-bold text-white min-w-[45px] md:min-w-[50px]`}>
                    {item.year}
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full mt-1.5 md:mt-2"></div>
                    {index < timelineEvents.length - 1 && (
                      <div className="w-0.5 bg-white/30 flex-1 mt-1"></div>
                    )}
                  </div>
                  <div className={`${poppins.className} text-gray-300 leading-relaxed flex-1 text-xs md:text-sm`}>
                    {item.event}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* I Love */}
          <div className="bg-[#212121] rounded-2xl p-6 md:p-8">
            <h3 className={`${poppins.className} text-xl md:text-2xl font-semibold text-white flex items-center gap-2 mb-6 md:mb-8`}>
              I <Heart size={20} className="md:w-6 md:h-6" />
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3" role="list" aria-label="Personal interests and hobbies">
              {hobbies.map((hobby, index) => (
                <HobbyCard key={index} hobby={hobby} />
              ))}
            </div>
          </div>
        </div>
      </FadeInElement>

      {/* Get in Touch */}
      <FadeInElement delay={1.2}>
        <div className="mt-6 md:mt-8">
          <div className="relative block bg-[#212121] rounded-2xl p-4 md:p-6 border border-white/20 hover:shadow-lg hover:shadow-black/50 transition-all duration-300 overflow-visible">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <span className={`${poppins.className} text-lg md:text-xl font-medium text-white`}>
                Get in Touch
              </span>
              <a
                href="mailto:contact@derkyu.lol"
                className="group relative w-full md:w-auto"
                aria-label="Send email to contact@derkyu.lol"
              >
                <div className="flex items-center justify-center gap-2 px-4 py-2 border border-white/40 rounded-lg bg-transparent min-w-[140px] md:min-w-[180px]">
                  <Mail size={20} className="text-white/70" />
                  <span className={`${poppins.className} text-sm font-medium text-white`}>Mail me</span>
                </div>
                <div className="hidden md:flex absolute inset-0 items-center justify-center gap-2 px-4 py-2 border border-white/60 rounded-lg bg-[#2a2a2a] opacity-0 group-hover:opacity-100 group-hover:translate-y-[-8px] group-hover:translate-x-[-8px] transition-all duration-300 shadow-lg min-w-[180px]">
                  <Mail size={20} className="text-white" />
                  <span className={`${poppins.className} text-sm font-medium text-white`}>contact@derkyu.lol</span>
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