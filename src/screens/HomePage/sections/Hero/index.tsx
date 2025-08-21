import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import Image from "next/image";
import { CircleIcon, SemiCircleIcon } from "@/components/icons";
import Link from "next/link";

const Hero = (): JSX.Element => {
  const waitlistLink = process.env.NEXT_PUBLIC_WAITLIST_LINK || "#";
  return (
    <section className="min-h-screen flex items-stretch px-4 md:px-6 lg:px-8 xl:px-[30px] py-4 md:py-6 lg:py-8 xl:py-[30px]">
      <Card className="h-auto flex items-center w-full rounded-[50px] border border-[#ffffff1a] bg-[linear-gradient(0deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.02)_100%)]">
        <CardContent className="flex overflow-hidden relative items-center p-0 px-4 w-full h-full">
          <div className="absolute top-[30px] lg:top-[50px] xl:top-[70px] left-1/2 -translate-x-1/2 w-[154px] h-8 md:w-[180px] md:h-10 lg:w-[240px] lg:h-12">
            <Image alt="BonBon Logo" src="/images/logo.svg" fill />
          </div>

          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 max-w-[80%] w-full bottom-0 h-3/4">
            <Image
              src="/images/hero-bg.svg"
              alt="Decorative frame right"
              fill
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-[100px] left-0 lg:bottom-[initial] lg:top-[170px] lg:left-0">
            <SemiCircleIcon className="h-[86px] w-[43px] md:h-auto md:w-auto" />
          </div>
          <div className="absolute top-[100px] lg:top-0 right-0 rotate-180 lg:rounded-bl-[50px] overflow-hidden">
            <SemiCircleIcon
              fillColor="#74DB8A"
              className="h-[86px] w-[43px] md:h-auto md:w-auto"
            />
          </div>
          <div className="hidden lg:block absolute right-[18px] bottom-[18px]">
            <CircleIcon className="w-[85px] h-[85px] lg:w-[120px] lg:h-[120px] xl:w-[188px] xl:h-[188px]" />
          </div>

          <div className="flex flex-col items-center max-w-[750px] w-full mx-auto relative z-[1] pt-40 pb-20">
            <h1 className="w-fit text-[42px] leading-tight text-white lg:text-[56px] xl:text-[74px] 2xl:text-[110px] 2xl:leading-[132px] text-center">
              The Fun Starts <br /> Here
            </h1>

            <p className="w-full text-center text-base lg:text-[22px] xl:text-[26px] xl:leading-[40px] text-white my-[30px] max-w-[672px] mx-auto">
              BonBon takes the hassle out of planning group experiences — from
              spontaneous outings to unforgettable get-togethers.
            </p>
            <Link href={waitlistLink}>
              <Button>Join the Waitlist</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Hero;
