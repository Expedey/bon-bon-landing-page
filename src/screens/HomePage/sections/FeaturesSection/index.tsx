"use client";

import React, { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import Image from "next/image";
import { HandIcon, SemiCircleIcon, WaveIcon } from "@/components/icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { div } from "motion/react-client";
import { cn } from "@/lib/utils";

type TWaveText = {
  text: string;
  className?: string;
};

const WaveText = ({ text, className }: TWaveText) => {
  const handRef = useRef<HTMLDivElement>(null);
  const leftWaveRef = useRef<HTMLDivElement>(null);
  const rightWaveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // gsap.set(rightWaveRef.current, {
    //   top: -14,
    //   right: -20,
    // });

    tl.to(
      handRef.current,
      {
        rotate: 20,
        duration: 1,
        ease: "linear",
        repeat: -1,
        yoyo: true,
        animationDelay: 0.5,
      },
      0
    );

    tl.to(
      rightWaveRef.current,
      {
        top: -5,
        right: -40,
        duration: 1,
        ease: "linear",
        repeat: -1,
        yoyo: true,
        animationDelay: 0.5,
      },
      0
    );

    tl.to(
      leftWaveRef.current,
      {
        top: 30,
        left: 0,
        duration: 1,
        ease: "linear",
        repeat: -1,
        yoyo: true,
      },
      0
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      className={cn("flex gap-5 justify-end items-center lg:flex-1", className)}
    >
      <div className="w-[60px] lg:w-[100px] h-[90px] overflow-y-visible overflow-x-hidden relative flex items-center justify-center">
        <div
          ref={leftWaveRef}
          className="flex absolute flex-col -rotate-[65deg] left-[-30px] top-[60px]"
        >
          <WaveIcon className="max-lg:w-[10px]" />
          <WaveIcon className="max-lg:w-[10px] max-lg:translate-y-[-4px]" />
        </div>
        <div ref={handRef}>
          <HandIcon className="max-lg:w-[40px] max-lg:h-[40px]" />
        </div>
        <div ref={rightWaveRef} className="absolute top-[10px] right-[10px]">
          <WaveIcon className="max-lg:w-[14px]" />
        </div>
      </div>
      <h2 className="text-4xl font-medium leading-normal text-white min-w-fit xl:text-5xl 2xl:text-6xl">
        {text}
      </h2>
    </div>
  );
};

const SliderSection = () => {
  const [index, setIndex] = useState(0);
  const [goToSlide, setGoToSlide] = useState<number | null>(null);

  const painPoints = [
    { id: 1, regular: "Outdated ", bold: "look & feel" },
    { id: 2, regular: "User ", bold: "drop-off" },
    { id: 3, regular: "Competitors ", bold: "staying ahead" },
    { id: 4, regular: "Slow ", bold: "feature releases" },
    { id: 5, regular: "Generic ", bold: "brand identity" },
    { id: 6, regular: "", bold: "Technical", regular2: " debt" },
    { id: 7, regular: "Lack of ", bold: "expertise" },
    { id: 8, regular: "Missed ", bold: "deadlines" },
    { id: 9, regular: "Low ", bold: "velocity" },
  ];

  // Convert painPoints to slides format
  const slides = painPoints.map((point, i) => ({
    key: i,
    content: point,
  }));

  // Modulo function from the original code
  const mod = (a: number, b: number) => {
    return ((a % b) + b) % b;
  };

  const modBySlidesLength = (index: number) => {
    return mod(index, slides.length);
  };

  const moveSlide = (direction: number) => {
    setIndex(modBySlidesLength(index + direction));
    setGoToSlide(null);
  };

  const clampOffsetRadius = (offsetRadius: number) => {
    const upperBound = Math.floor((slides.length - 1) / 2);

    if (offsetRadius < 0) {
      return 0;
    }
    if (offsetRadius > upperBound) {
      return upperBound;
    }

    return offsetRadius;
  };

  const getPresentableSlides = () => {
    let offsetRadius = 4; // Default from original code
    offsetRadius = clampOffsetRadius(offsetRadius);
    const presentableSlides = [];

    for (let i = -offsetRadius; i < 1 + offsetRadius; i++) {
      presentableSlides.push(slides[modBySlidesLength(index + i)]);
    }

    return presentableSlides;
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1); // Move to next slide
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  const getItemStyle = (presentableIndex: number) => {
    const offsetRadius = clampOffsetRadius(4);
    const distance = Math.abs(presentableIndex - offsetRadius);

    const opacity = Math.max(1 - distance * 0.3, 0.3);
    const blur = Math.min(distance * 1.5, 6);
    // const scale = Math.max(1 - distance * 0.1, 0.8);
    const translateY = (presentableIndex - offsetRadius) * 80;

    return {
      opacity,
      filter: `blur(${blur}px)`,
      transform: `translateY(${translateY}px)`,
      transition: "all 0.5s ease-out",
    };
  };

  return (
    <div className="relative w-screen min-h-screen flex items-stretch bg-[linear-gradient(180deg,rgba(15,12,41,1)_0%,rgba(21,16,67,1)_100%)]">
      {/* Top Shapes */}
      <div className="overflow-hidden relative w-full">
        <div className="absolute hidden top-0 translate-y-[-20px] translate-x-[-35px] left-0 lg:block">
          <SemiCircleIcon fillColor="#EE86E7" />
        </div>
        <div className="absolute top-0 translate-y-[-20px] translate-x-[-35px] left-0 lg:hidden">
          <SemiCircleIcon fillColor="#74DB8A" className="w-[130px] h-[130px]" />
        </div>

        {/* Bottom Shapes */}
        <div className="hidden absolute right-0 bottom-0 rotate-180 translate-y-1/2 lg:block">
          <SemiCircleIcon fillColor="#74DB8A" />
        </div>
        <div className="absolute bottom-5 right-0 rotate-180 translate-x-[35px] lg:hidden">
          <SemiCircleIcon className="w-[130px] h-[130px]" />
        </div>
        <div className="flex relative justify-center items-center px-6 mx-auto h-full">
          <div className="flex flex-col w-full lg:flex-row items-center justify-center gap-10 lg:gap-20 xl:gap-32 2xl:gap-[154px] relative h-full">
            {/* Left side - "Say bye bye to" */}
            <WaveText text="Say bye bye to" />

            {/* Right side - Vertical Carousel */}
            <div className="relative lg:flex-1 max-lg:min-h-[400px] max-lg:w-full max-lg:overflow-hidden">
              <div className="flex flex-col justify-center w-full h-full max-lg:items-center">
                {getPresentableSlides().map((slide, presentableIndex) => (
                  <div
                    key={slide.key}
                    className="absolute text-white min-w-max bg-[#FFFFFF05] 2xl:text-4xl border border-[#FFFFFF1A] rounded-[50px] py-[10px] px-[30px] backdrop-blur-sm"
                    style={getItemStyle(presentableIndex)}
                  >
                    <span className="">{slide.content.regular}</span>
                    <span className="">{slide.content.bold}</span>
                    {slide.content.regular2 && (
                      <span className="">{slide.content.regular2}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              {/* <div className="flex absolute bottom-4 left-1/2 z-10 gap-4 transform -translate-x-1/2">
                <button
                  onClick={() => moveSlide(-1)}
                  className="px-4 py-2 text-white bg-white bg-opacity-20 rounded-lg transition-all duration-200 hover:bg-opacity-30"
                >
                  ↑
                </button>
                <button
                  onClick={() => moveSlide(1)}
                  className="px-4 py-2 text-white bg-white bg-opacity-20 rounded-lg transition-all duration-200 hover:bg-opacity-30"
                >
                  ↓
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type TBenefit = {
  id: number;
  title: string;
  description: string;
};

const BenefitsSection = ({ benefits }: { benefits: TBenefit[] }) => {
  return (
    <div className="relative w-full h-full bg-[#6A4AFD] py-20">
      <div className="relative max-w-[1440px] w-full mx-auto px-6 h-full flex flex-col justify-center">
        {/* Section title */}
        <WaveText text="Say hello to" className="justify-start" />

        {/* Benefits cards grid */}
        <div className="grid mt-10 lg:mt-[60px] grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-[30px]">
          {benefits.map((benefit) => (
            <Card
              key={benefit.id}
              className="flex flex-col items-start gap-2.5 p-10 xl:p-[50px] bg-[#ffffff05] rounded-[40px] border border-solid border-[#ffffff33] backdrop-blur-sm"
            >
              <CardContent className="flex flex-col items-start p-0 w-full">
                <div className="relative xl:w-[66px] xl:h-[66px] w-[50px] h-[50px] rounded-full overflow-hidden">
                  <Image
                    className="object-cover relative"
                    alt="Email"
                    src="/images/email.svg"
                    fill
                  />
                </div>
                <div className="flex flex-col gap-4 items-start mt-4 w-full xl:mt-5">
                  <h3 className="font-medium text-white text-xl xl:text-[32px] mb-2 xl:mb-4">
                    {benefit.title}
                  </h3>
                  <p className="font-normal text-white text-lg tracking-[0.72px]">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = (): JSX.Element => {
  const sliderSectionRef = useRef<HTMLDivElement>(null);
  const benefitsSectionRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Data for the "Say bye bye to" section

  // Data for the "Say hello to" section
  const benefits = [
    {
      id: 1,
      title: "Top-tier team of experts",
      description:
        "Even the best teams need help. Following industry standards and beyond, our team of experts knows exactly what tools, methods and stack works best in your situation.",
    },
    {
      id: 2,
      title: "Proven powerful process",
      description:
        "Stop hitting snooze on updating your product's look and feel, launching that gold-nugget feature, or shaking off technical debt. Our trusty process is set up to make power moves.",
    },
    {
      id: 3,
      title: "Clear-cut comms",
      description:
        "Slow and foggy communication weighs down on your ability to scale efficiently. Whether it's a Slack message, a video call, or an on-site session, we value clarity.",
    },
    {
      id: 4,
      title: "Sharing knowledge",
      description:
        "Building a high quality and scalable product takes ongoing effort. After helping you level up we enable your in-house teams to keep up the pace. We hand-off our work *and* expertise.",
    },
  ];

  // Scroll-triggered animation
  useEffect(() => {
    if (
      !sectionRef.current ||
      !sliderSectionRef.current ||
      !benefitsSectionRef.current
    )
      return;

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Set initial position for benefits section (off-screen to the right)
    gsap.set(benefitsSectionRef.current, {
      translateX: "100vw",
      // position: "absolute",
      top: 0,
      left: 0,
      // width: "100%",
      minHeight: "100vh",
    });

    // Create the main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=300%", // Increased to 300% to allow more scroll time for benefits section
        pin: true,
        scrub: 1,
        anticipatePin: 1, // Helps prevent conflicts with other pinned sections
      },
    });

    // Phase 1: Keep slider section in view (0% to 40% of scroll)
    tl.to(
      sliderSectionRef.current,
      {
        translateX: 0,
        duration: 0.4,
        ease: "none",
      },
      0
    );

    // Phase 2: Slide benefits section in from right (40% to 60% of scroll)
    tl.to(
      benefitsSectionRef.current,
      {
        translateX: "-100vw",
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          ScrollTrigger.refresh(); // recalculate heights
        },
      },
      0.4
    );

    // Phase 3: Slide slider section out to the left (40% to 60% of scroll)
    tl.to(
      sliderSectionRef.current,
      {
        // translateX: "-100vw",
        duration: 0.2,
        ease: "power2.inOut",
      },
      0.4
    );

    // Phase 4: Keep the benefits section pinned in view (60% to 100% of scroll)
    tl.to(
      benefitsSectionRef.current,
      {
        // translateX: "-100vw",
        duration: 0.4,
        ease: "power2.inOut",
      },
      0
    );

    return () => {
      // Clean up this specific ScrollTrigger
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div className="overflow-hidden w-full">
      <section
        ref={sectionRef}
        className="flex overflow-hidden relative w-full min-h-screen min-w-[200vw]"
        // min-h-[270vh] sm:min-h-[210vh] md:min-h-[190vh] lg:min-h-[130vh]"
      >
        {/* Slider Section */}
        <div
          ref={sliderSectionRef}
          className="relative w-screen min-h-screen h-fit"
        >
          <SliderSection />
        </div>

        {/* Benefits Section */}
        <div ref={benefitsSectionRef} className="relative w-full min-h-screen">
          <BenefitsSection benefits={benefits} />
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;
