import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import Image from "next/image";

export const FeaturesSection = (): JSX.Element => {
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

  return (
    <section className="overflow-hidden relative w-full min-h-screen">
      {/* First section - "Say bye bye to" */}
      <div className="relative w-full h-full bg-[linear-gradient(180deg,rgba(15,12,41,1)_0%,rgba(21,16,67,1)_100%)]">
        <div className="relative px-6 mx-auto h-full">
          {/* Decorative elements */}

          <div className="flex items-center justify-center gap-[154px] relative">
            {/* Left side - "Say bye bye to" */}
            <div className="flex gap-5 items-center">
              <Image src="/images/wave.svg" alt="Wave" width={90} height={90} />
              <h2 className="text-4xl font-medium leading-normal text-white xl:text-5xl 2xl:text-6xl">
                Say bye bye to
              </h2>
            </div>

            {/* Right side - Scrolling pain points */}
            <div className="relative w-[511px] h-[918px] overflow-hidden">
              {/* Top gradient overlay */}
              <div className="absolute w-full h-[394px] top-0 left-0 z-10 backdrop-blur-sm backdrop-brightness-[100%] bg-[linear-gradient(180deg,rgba(15,12,42,1)_0%,rgba(16,13,47,0.5)_52%,rgba(18,14,53,0)_100%)]" />

              {/* Pain points list */}
              <div className="relative w-full h-full">
                {painPoints.map((point, index) => (
                  <div
                    key={point.id}
                    className={`inline-flex items-center justify-center gap-2.5 px-[30px] py-2.5 absolute left-0 rounded-[50px] border border-solid border-[#ffffff1a] bg-[linear-gradient(0deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.02)_100%)]`}
                    style={{ top: `${106 * index}px` }}
                  >
                    <div className="relative w-fit mt-[-1.00px] [font-family:'OwnersTRIAL-Regular',Helvetica] font-normal text-x-4 text-4xl tracking-[1.44px] leading-9">
                      <span className="tracking-[0.52px] leading-[0.1px]">
                        {point.regular}
                      </span>
                      <span className="[font-family:'OwnersTRIAL-Medium',Helvetica] font-medium tracking-[0.52px]">
                        {point.bold}
                      </span>
                      {point.regular2 && (
                        <span className="tracking-[0.52px] leading-[0.1px]">
                          {point.regular2}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom gradient overlay */}
              <div className="absolute w-[511px] h-[410px] bottom-0 left-0 rotate-180 backdrop-blur-sm backdrop-brightness-[100%] z-10 bg-[linear-gradient(180deg,rgba(21,16,67,1)_0%,rgba(21,16,67,0)_100%)]" />
            </div>
          </div>

          {/* Decorative glows */}
        </div>
      </div>

      {/* Second section - "Say hello to" */}
      <div className="absolute w-full h-[1000px] top-[1000px] left-0 bg-x-1">
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
