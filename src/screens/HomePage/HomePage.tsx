import React from "react";
import { AppShowcaseSection } from "./sections/AppShowcaseSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { MockupDisplaySection } from "./sections/MockupDisplaySection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { UserStatsSection } from "./sections/UserStatsSection";
import Navbar from "@/components/common/navbar";

export const HomePage = (): JSX.Element => {
  return (
    <div className="bg-[#1a1a1a] flex flex-col items-center w-full min-h-screen relative">
      <Navbar />
      <div className="bg-[#1a1a1a] w-full relative">
        <HeaderSection />
        <HowItWorksSection />
        <FeaturesSection />
        {/* <CallToActionSection /> */}
        <div className="flex">
          <AppShowcaseSection />
          <TestimonialsSection />
        </div>
        <FooterSection />
        <UserStatsSection />
        <MockupDisplaySection />
      </div>
    </div>
  );
};
