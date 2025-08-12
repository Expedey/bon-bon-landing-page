"use client";

import React, { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import Image from "next/image";
import { HandIcon, SemiCircleIcon, WaveIcon } from "@/components/icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type TWaveText = {
  text: string;
};

const WaveText = ({ text }: TWaveText) => {
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
    <div className="flex gap-5 items-center">
      <div className="w-[100px] h-[90px] overflow-y-visible overflow-x-hidden relative flex items-center justify-center">
        <div
          ref={leftWaveRef}
          className="flex absolute flex-col -rotate-[65deg] left-[-30px] top-[60px]"
        >
          <WaveIcon />
          <WaveIcon />
        </div>
        <div ref={handRef}>
          <HandIcon />
        </div>
        <div ref={rightWaveRef} className="absolute top-[10px] right-[10px]">
          <WaveIcon />
        </div>
      </div>
      <h2 className="text-4xl font-medium leading-normal text-white xl:text-5xl 2xl:text-6xl">
        {text}
      </h2>
    </div>
  );
};

type TSliderSection = {
  painPoints: {
    id: number;
    regular: string;
    bold: string;
    regular2?: string;
  }[];
  currentElement: number;
  generateBlur: (id: number) => string;
  containerRef: React.RefObject<HTMLDivElement>;
};

const SliderSection = ({
  painPoints,
  currentElement,
  generateBlur,
  containerRef,
}: TSliderSection) => {
  return (
    <div className="relative w-full h-full bg-[linear-gradient(180deg,rgba(15,12,41,1)_0%,rgba(21,16,67,1)_100%)]">
      {/* Top Shapes */}
      <div className="overflow-hidden absolute top-0 left-0 w-full h-full pointer-events-none">
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
          {/* Decorative elements */}

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 xl:gap-32 2xl:gap-[154px] relative h-full">
            {/* Left side - "Say bye bye to" */}
            <WaveText text="Say bye bye to" />
            {/* Right side - Scrolling pain points */}
            <div className="relative overflow-hidden h-[400px]">
              {/* Pain points list */}
              <div
                ref={containerRef}
                className="flex relative flex-col gap-8 items-center w-full transition-transform duration-1000 ease-out lg:items-start"
                style={{
                  paddingTop: "160px",
                  paddingBottom: "160px",
                }}
              >
                {painPoints.map((point, index) => {
                  const distance = Math.abs(point.id - currentElement);
                  const opacity = Math.max(1 - distance * 0.1, 0.3);

                  return (
                    <div
                      key={index}
                      className={`relative w-fit text-white bg-[#FFFFFF05] 2xl:text-4xl border border-[#FFFFFF1A] rounded-[50px] py-[10px] px-[30px] transition-all duration-300 ease-out backdrop-blur-sm ${generateBlur(
                        point.id
                      )}`}
                      style={{
                        opacity: opacity,
                      }}
                    >
                      <span className="">{point.regular}</span>
                      <span className="">{point.bold}</span>
                      {point.regular2 && (
                        <span className="">{point.regular2}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Decorative glows */}
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
        <WaveText text="Say hello to" />

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

export const FeaturesSection = (): JSX.Element => {
  const [currentElement, setCurrentElement] = useState(5);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderSectionRef = useRef<HTMLDivElement>(null);
  const benefitsSectionRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Data for the "Say bye bye to" section
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentElement((prev) => {
        if (prev === painPoints.length) {
          return 1;
        } else {
          return prev + 1;
        }
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [painPoints.length]);

  // Smooth movement animation
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const currentElementIndex = currentElement - 1;
      const elementHeight = 80; // Approximate height of each element + gap
      const scrollPosition = currentElementIndex * elementHeight;

      container.style.transform = `translateY(-${scrollPosition}px)`;
    }
  }, [currentElement]);

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
      x: "100vw",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      minHeight: "100vh",
    });

    // Create the main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=300%", // 300% of viewport height for significant scroll
        pin: true,
        scrub: 1,
        anticipatePin: 1, // Helps prevent conflicts with other pinned sections
      },
    });

    // Phase 1: Keep slider section in view (0% to 60% of scroll)
    tl.to(
      sliderSectionRef.current,
      {
        x: 0,
        duration: 0.6,
        ease: "none",
      },
      0
    );

    // Phase 2: Slide benefits section in from right (60% to 100% of scroll)
    tl.to(
      benefitsSectionRef.current,
      {
        x: 0,
        duration: 0.4,
        ease: "power2.inOut",
        display: "block",
        onComplete: () => {
          ScrollTrigger.refresh(); // recalculate heights
        },
      },
      0.6
    );

    // Phase 3: Slide slider section out to the left
    tl.to(
      sliderSectionRef.current,
      {
        x: "-100vw",
        duration: 0.4,
        ease: "power2.inOut",
      },
      0.6
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

  const generateBlur = (id: number) => {
    // Calculate the distance from the current element
    const distance = Math.abs(id - currentElement);

    // If it's the current element, no blur
    if (distance === 0) {
      return "blur-[0px]";
    }

    // Calculate blur amount: 2px per step away from current element
    const blurAmount = distance * 2;

    return `blur-[${blurAmount}px]`;
  };

  console.log(generateBlur(1), "__blur");

  return (
    <section
      ref={sectionRef}
      className="flex overflow-hidden relative flex-col items-stretch w-full min-h-[270vh] sm:min-h-[210vh] md:min-h-[190vh] lg:min-h-[130vh]"
    >
      {/* Slider Section */}
      <div ref={sliderSectionRef} className="relative w-full min-h-screen">
        <SliderSection
          painPoints={painPoints}
          currentElement={currentElement}
          generateBlur={generateBlur}
          containerRef={containerRef}
        />
      </div>

      {/* Benefits Section */}
      <div
        ref={benefitsSectionRef}
        className="hidden relative w-full min-h-screen"
      >
        <BenefitsSection benefits={benefits} />
      </div>
    </section>
  );
};
