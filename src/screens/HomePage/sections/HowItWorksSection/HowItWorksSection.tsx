import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import Image from "next/image";

export const HowItWorksSection = (): JSX.Element => {
  return (
    <section className="lg:flex relative items-center py-24 w-full min-h-screen px-4 lg:px-[60px] 2xl:px-[240px]">
      <div className="relative lg:absolute lg:inset-0 w-full h-full rounded-[20px] lg:rounded-none aspect-square lg:aspect-auto overflow-hidden">
        <Image
          src="/images/work-bg.svg"
          alt="How it works"
          className="object-cover object-right lg:object-center"
          fill
        />
      </div>
      <div className="relative z-[1] lg:mt-0 mt-10">
        <div className="lg:max-w-[500px] 2xl:max-w-[672px] mr-auto">
          <h2 className="text-4xl xl:text-5xl 2xl:text-6xl font-medium text-white [font-family:'OwnersTRIAL-Medium',Helvetica]">
            How BonBon <br className="hidden lg:block" />
            Works
          </h2>

          <p className="mt-[30px] text-lg xl:text-[22px] 2xl:text-[26px] text-white tracking-[1.04px] leading-normal 2xl:leading-10 [font-family:'OwnersTRIAL-Regular',Helvetica]">
            No more messy group chats or indecisive friends. Here&apos;s how
            BonBon makes planning simple, fast, and actually fun.
            <br />
            <br />
            Watch how BonBon transforms chaotic planning into a smooth,
            shareable experience your whole group will love.
          </p>
        </div>
      </div>
    </section>
  );
};
