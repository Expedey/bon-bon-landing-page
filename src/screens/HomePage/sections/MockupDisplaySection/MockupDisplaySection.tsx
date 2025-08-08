"use client";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SemiCircleIcon, SendButtonIcon } from "@/components/icons";
import Image from "next/image";

export const MockupDisplaySection = (): JSX.Element => {
  const pathname = usePathname();
  // Navigation links data
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Works", href: "/works" },
    { name: "Goodbye", href: "/goodbye" },
    { name: "Hello", href: "/hello" },
    { name: "Program", href: "/program" },
    { name: "Leaderboard", href: "/leaderboard" },
  ];

  // Footer links data
  const footerLinks = [
    { name: "Terms & Condition" },
    { name: "Privacy Policy" },
  ];

  // Social media icons data
  const socialIcons = [
    { src: "/images/wa.svg", alt: "Whatsapp", link: "https://google.com" },
    { src: "/images/x.svg", alt: "X", link: "https://google.com" },
    { src: "/images/insta.svg", alt: "Instagram", link: "https://google.com" },
  ];

  return (
    <section className="w-full px-2 pb-2 lg:px-[30px] lg:pb-[330px] pt-20 ">
      <div className="w-full p-6 lg:p-[30px] rounded-[40px] bg-[linear-gradient(180deg,rgba(106,74,253,1)_0%,rgba(48,21,169,1)_100%)] relative overflow-hidden">
        {/* Decoration svg */}
        <div className="absolute max-lg:top-1/2 max-lg:-translate-y-1/2 max-lg:right-[-25px] 2xl:top-[96px] right-0 rotate-180 2xl:translate-x-[85px]">
          <SemiCircleIcon
            fillColor="#EE86E7"
            className="max-lg:w-[100px] max-lg:h-[100px] 2xl:w-[282px] 2xl:h-[282px]"
          />
        </div>

        <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row justify-between gap-10">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-[110px] 2xl:leading-[132px] mb-8 md:mb-10 lg:mb-[213px]">
              Don&apos;t miss your {/* <br /> */}
              spot. Join now.
            </h2>

            {/* Navigation Links */}
            <div className="inline-flex flex-col lg:flex-row flex-wrap lg:items-center gap-3 2xl:gap-[30px]">
              {navLinks.map((link, index) => {
                const isActive = link.href === pathname;
                return (
                  <Link
                    href={link.href}
                    key={`nav-link-${index}`}
                    className={`px-2.5 py-1 lg:px-5 lg:py-3.5 relative lg:text-lg text-white rounded-[60px] border w-fit ${
                      isActive
                        ? "bg-[#ffffff0d] rounded-[60px] border border-[#ffffff26] lg:underline lg:underline-offset-4"
                        : "border-transparent bg-transparent"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col justify-end items-start gap-10 max-w-[467px] lg:max-w-[350px] 2xl:max-w-[467px] w-full">
            <div className="relative w-full">
              <h3 className="text-white text-[22px] lg:text-[26px] 2xl:text-[36px] font-medium tracking-[0] mb-[15px]">
                Our newsletter
              </h3>
              <p className="text-white !leading-normal text-base lg:text-lg 2xl:text-[22px] ">
                Get planning tips, launch updates, and fun surprises delivered
                fresh to your inbox.
                <br />
                No spam. Just good vibes and better group hangs.
              </p>
            </div>

            <div className="flex w-full items-center relative rounded-[50px] bg-[linear-gradient(0deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.1)_100%)]">
              <Input
                className="flex-1 h-auto p-[26px] pr-4 border-none bg-transparent text-white !text-lg leading-normal border border-[#ffffff26] focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-white"
                placeholder="Enter Your Email"
              />
              <div className="h-20 py-2.5 px-2.5 aspect-square">
                <button className="p-0 aspect-square rounded-full w-full h-full shadow-[inset_-4px_-4px_4px_0px_#5134D2,inset_4px_4px_4px_0px_#623FFE] hover:shadow-[inset_-4px_-4px_4px_0px_#6043e0,inset_4px_4px_4px_0px_#7151ff] bg-[linear-gradient(180deg,_#6A4AFD_0%,_#3015A9_100%)] flex items-center justify-center">
                  <SendButtonIcon />
                </button>
              </div>
            </div>
          </div>

          {/* Responsive Social Media Icons */}
          <div className="flex items-center gap-4 lg:hidden">
            {socialIcons.map((icon, index) => (
              <Link href={icon.link} key={`social-icon-${index}`}>
                <Image
                  className="relative"
                  alt={icon.alt}
                  src={icon.src}
                  width={36}
                  height={36}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Bar */}
        <div className="flex mt-[60px] items-center w-full justify-between px-4 py-5 lg:px-11 lg:py-[15px] rounded-[50px] border border-[#ffffff26] bg-[linear-gradient(0deg,rgba(51,51,51,1)_0%,rgba(51,51,51,1)_100%)]">
          {/* Social Media Icons */}
          <div className="max-w-[327px] w-full items-center gap-5 relative hidden lg:flex">
            {socialIcons.map((icon, index) => (
              <Link href={icon.link} key={`social-icon-${index}`}>
                <Image
                  className="relative"
                  alt={icon.alt}
                  src={icon.src}
                  width={36}
                  height={36}
                />
              </Link>
            ))}
          </div>

          {/* Copyright Text */}
          <p className="text-white text-sm xl:text-lg text-center leading-[normal] max-lg:mx-auto ">
            Copyright | 2025 BONBON. All rights reserved.
          </p>

          {/* Footer Links */}
          <div className="items-center gap-10 relative hidden lg:inline-flex ">
            <div className="inline-flex items-center gap-5 xl:gap-[50px] relative flex-[0_0_auto]">
              {footerLinks.map((link, index) => (
                <div
                  key={`footer-link-${index}`}
                  className="text-white xl:text-lg text-center tracking-[0] leading-[normal]"
                >
                  {link.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
