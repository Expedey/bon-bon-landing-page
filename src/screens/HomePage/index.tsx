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
  const [activeSection, setActiveSection] = useState("Home");
  const footerRef = useRef<HTMLDivElement>(null);

  // Refs for each section
  const heroRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const goodbyeRef = useRef<HTMLDivElement>(null);
  const helloRef = useRef<HTMLDivElement>(null);
  const programRef = useRef<HTMLDivElement>(null);
  const leaderboardRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

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

  // Intersection Observer to track which section is currently visible
  useEffect(() => {
    const sections = [
      { ref: heroRef, name: "Home" },
      { ref: worksRef, name: "Works" },
      { ref: goodbyeRef, name: "Goodbye" },
      { ref: helloRef, name: "Hello" },
      { ref: programRef, name: "Program" },
      { ref: leaderboardRef, name: "Leaderboard" },
      { ref: aboutRef, name: "About" },
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px", // Section is considered visible when 20% from top and bottom
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute("data-section") || "Home");
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (section.ref.current) {
        section.ref.current.setAttribute("data-section", section.name);
        observer.observe(section.ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[#1a1a1a] flex flex-col items-center w-full min-h-screen relative">
      <Navbar isVisible={isNavbarVisible} activeSection={activeSection} />
      <div className="bg-[#1a1a1a] w-full relative">
        <div ref={heroRef}>
          <Hero /> {/** Home */}
        </div>
        <div ref={worksRef}>
          <HowItWorksSection /> {/** Works */}
        </div>
        <FeaturesSection goodbyeRef={goodbyeRef} helloRef={helloRef} />{" "}
        {/** Goodbye / Hello */}
        <div ref={programRef}>
          <ReferralSection /> {/** Program */}
        </div>
        <div ref={leaderboardRef}>
          <AppShowcaseSection /> {/** Leaderboard */}
        </div>
        <div ref={aboutRef}>
          <TextRevealSection /> {/** About */}
        </div>
        <StatsSection /> {/** Footer */}
        <div ref={footerRef}>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
