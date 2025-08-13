"use client";
import React, { useEffect, useState, useRef } from "react";
import Navbar from "@/components/common/navbar";
import {
  Hero,
  HowItWorksSection,
  FeaturesSection,
  ReferralSection,
  AppShowcaseSection,
  TextRevealSection,
  StatsSection,
  Footer,
} from "./sections";

const HomePage = (): JSX.Element => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;

      const footerRect = footerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Hide navbar when footer starts to come into view (when footer top reaches window bottom)
      const shouldHideNavbar = footerRect.top <= windowHeight;

      setIsNavbarVisible(!shouldHideNavbar);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#1a1a1a] flex flex-col items-center w-full min-h-screen relative">
      <Navbar isVisible={isNavbarVisible} />
      <div className="bg-[#1a1a1a] w-full relative">
        <Hero />
        <HowItWorksSection />
        <FeaturesSection />
        <ReferralSection />
        <AppShowcaseSection />
        <TextRevealSection />
        <StatsSection />
        <div ref={footerRef}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
