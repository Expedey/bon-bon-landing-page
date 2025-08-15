import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import Image from "next/image";
import { Play, XIcon } from "lucide-react";

const HowItWorksSection = (): JSX.Element => {
  const [openVideoPopup, setOpenVideoPopup] = useState(false);
  useEffect(() => {
    if (openVideoPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openVideoPopup]);
  return (
    <section className="lg:flex relative items-center max-lg:pb-24 max-lg:pt-16 lg:min-h-screen w-full px-4 lg:px-[60px] 2xl:px-[240px]">
      <div className="relative z-[1] lg:mt-0 mt-10 flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-10 2xl:gap-20 max-w-[1440px] mx-auto">
        <div className="lg:max-w-[500px] flex-1 2xl:max-w-[672px] mr-auto">
          <h2 className="text-4xl text-white xl:text-5xl 2xl:text-6xl">
            How BonBon <br className="hidden lg:block" />
            Works
          </h2>

          <p className="mt-[30px] text-lg xl:text-[22px] 2xl:text-[26px] text-white tracking-[1.04px] leading-normal 2xl:leading-10">
            BonBon makes planning simple, fast, and actually fun.
            <br />
            <br />
            Watch the animation to see how it turns group chaos into a smooth,
            shareable experience your whole crew will love.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center h-full relative">
          <video
            src="/videos/how-it-works.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-lg"
          />
          <div
            onClick={() => setOpenVideoPopup(true)}
            className="flex items-center justify-center w-20 h-20 rounded-full border-[6px] border-white cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <Play className="w-10 h-10 text-white" fill="white" />
          </div>
        </div>
      </div>
      {openVideoPopup && (
        <div
          onClick={() => setOpenVideoPopup(false)}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[51]"
        >
          <XIcon
            className="w-5 h-5 lg:w-10 lg:h-10 absolute top-5 right-5 text-white cursor-pointer z-[52]"
            fill="white"
            onClick={() => setOpenVideoPopup(false)}
          />
          <video
            src="/videos/how-it-works.mp4"
            autoPlay
            loop
            controls
            className="w-[90vw] h-[90vh] rounded-3xl object-cover"
          />
        </div>
      )}
    </section>
  );
};

export default HowItWorksSection;
