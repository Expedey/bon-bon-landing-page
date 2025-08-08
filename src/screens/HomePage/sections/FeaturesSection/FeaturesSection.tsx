"use client";

import React, { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import Image from "next/image";
import { SemiCircleIcon } from "@/components/icons";

export const FeaturesSection = (): JSX.Element => {
  const [currentElement, setCurrentElement] = useState(5);
  const containerRef = useRef<HTMLDivElement>(null);
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
    <section className="overflow-hidden relative w-full min-h-screen flex items-stretch">
      {/* First section - "Say bye bye to" */}
      <div className="relative w-full h-auto bg-[linear-gradient(180deg,rgba(15,12,41,1)_0%,rgba(21,16,67,1)_100%)]">
        {/* Top Shapes */}
        <div className="hidden absolute top-0 -translate-y-1/2 left-0 lg:block">
          <SemiCircleIcon fillColor="#EE86E7" />
        </div>
        <div className="absolute top-0 translate-y-[-20px] translate-x-[-35px] left-0 lg:hidden">
          <SemiCircleIcon fillColor="#74DB8A" className="w-[130px] h-[130px]" />
        </div>

        {/* Bottom Shapes */}
        <div className="hidden absolute bottom-0 translate-y-1/2 right-0 rotate-180 lg:block">
          <SemiCircleIcon fillColor="#74DB8A" />
        </div>
        <div className="absolute bottom-5 right-0 rotate-180 translate-x-[35px] lg:hidden">
          <SemiCircleIcon className="w-[130px] h-[130px]" />
        </div>
        <div className="relative px-6 mx-auto h-full">
          {/* Decorative elements */}

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 xl:gap-32 2xl:gap-[154px] relative h-full">
            {/* Left side - "Say bye bye to" */}
            <div className="flex gap-5 items-center">
              <Image src="/images/wave.svg" alt="Wave" width={90} height={90} />
              <h2 className="text-4xl font-medium leading-normal text-white xl:text-5xl 2xl:text-6xl">
                Say bye bye to
              </h2>
            </div>

            {/* Right side - Scrolling pain points */}
            <div className="relative overflow-hidden h-[400px]">
              {/* Pain points list */}
              <div
                ref={containerRef}
                className="relative flex flex-col items-center lg:items-start w-full gap-8 transition-transform duration-1000 ease-out"
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

      {/* Second section - "Say hello to" */}
      <div className="hidden absolute w-full h-[1000px] top-[1000px] left-0 bg-x-1">
        <div className="relative h-[1000px] max-w-[1835px] mx-auto px-6">
          {/* Section title */}
          <div className="flex gap-[25px] items-center absolute top-20 left-60">
            <img
              className="w-[90px] h-[90px]"
              alt="Component"
              src="/component-39.svg"
            />
            <h2 className="font-medium text-6xl text-white [font-family:'OwnersTRIAL-Medium',Helvetica]">
              Say hello to
            </h2>
          </div>

          {/* Benefits cards grid */}
          <div className="flex flex-wrap w-full max-w-[1440px] items-start gap-[30px] absolute top-[230px] left-60">
            {benefits.map((benefit) => (
              <Card
                key={benefit.id}
                className="flex flex-col w-[705px] items-start gap-2.5 p-[50px] bg-[#ffffff05] rounded-[40px] border border-solid border-[#ffffff33] backdrop-blur-sm"
              >
                <CardContent className="flex flex-col gap-5 items-start p-0 w-full">
                  <img
                    className="relative h-[66px]"
                    alt="Frame"
                    src="/frame-13.svg"
                  />
                  <div className="flex flex-col gap-4 items-start w-full">
                    <h3 className="self-stretch mt-[-1.00px] [font-family:'OwnersTRIAL-Medium',Helvetica] font-medium text-white text-[32px]">
                      {benefit.title}
                    </h3>
                    <p className="self-stretch [font-family:'OwnersTRIAL-Regular',Helvetica] font-normal text-white text-lg tracking-[0.72px]">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
