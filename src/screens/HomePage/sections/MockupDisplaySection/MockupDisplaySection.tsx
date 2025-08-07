import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const MockupDisplaySection = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { name: "Home", active: true },
    { name: "Works", active: false },
    { name: "Goodbye", active: false },
    { name: "Hello", active: false },
    { name: "Program", active: false },
    { name: "Leaderboard", active: false },
  ];

  // Footer links data
  const footerLinks = [
    { name: "Terms & Condition" },
    { name: "Privacy Policy" },
  ];

  // Social media icons data
  const socialIcons = [
    { src: "/mfzgwn-dvb368-6d-1.png", alt: "Mfzgwn" },
    { src: "/x-3d-icon-free-png-1.png", alt: "X icon free png" },
    { src: "/v9v8zsej-e1xyzdz-1.png", alt: "Vvzsej exyzdz" },
  ];

  return (
    <section className="w-full h-[846px] py-[30px] px-[30px]">
      <Card className="w-full h-[786px] rounded-[40px] bg-[linear-gradient(180deg,rgba(106,74,253,1)_0%,rgba(48,21,169,1)_100%)] relative overflow-hidden">
        <div className="absolute top-[99px] left-[210px] [font-family:'OwnersTRIAL-Medium',Helvetica] font-medium text-white text-[110px] tracking-[0] leading-[132px]">
          Don&apos;t miss your
          <br />
          spot. Join now.
        </div>

        {/* Navigation Links */}
        <div className="inline-flex items-center gap-10 absolute top-[577px] left-[210px]">
          <div className="inline-flex items-center gap-[50px] relative flex-[0_0_auto]">
            {navLinks.map((link, index) => (
              <div
                key={`nav-link-${index}`}
                className={`${
                  link.active
                    ? "inline-flex items-center justify-center gap-2.5 px-5 py-3.5 relative flex-[0_0_auto] bg-[#ffffff0d] rounded-[60px] border border-solid border-[#ffffff26]"
                    : ""
                }`}
              >
                <div
                  className={`relative w-fit ${link.active ? "mt-[-1.00px] [font-family:'Owners_TRIAL_Wide-Medium',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[normal] underline" : "[font-family:'Owners_TRIAL_Wide-Regular',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[normal]"}`}
                >
                  {link.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col w-[467px] items-start gap-10 absolute top-[328px] left-[1183px]">
          <div className="flex flex-col h-[185px] items-start gap-[15px] relative self-stretch w-full">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'OwnersTRIAL-Medium',Helvetica] font-medium text-white text-4xl tracking-[0] leading-[normal]">
              Our newsletter
            </div>
            <div className="relative self-stretch [font-family:'OwnersTRIAL-Regular',Helvetica] font-normal text-white text-[22px] tracking-[0.88px] leading-[normal]">
              Get planning tips, launch updates, and fun surprises delivered
              fresh to your inbox.
              <br />
              No spam. Just good vibes and better group hangs.
            </div>
          </div>

          <div className="flex w-[467px] h-[77px] items-center gap-2.5 pl-[26px] pr-1.5 py-[26px] relative rounded-[50px] border border-solid border-[#ffffff26] bg-[linear-gradient(0deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.1)_100%)]">
            <Input
              className="flex-1 border-none bg-transparent [font-family:'OwnersTRIAL-Regular',Helvetica] font-normal text-white text-lg tracking-[0.72px] leading-[normal] focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-white"
              placeholder="Enter Your Email"
            />
            <Button className="p-0 bg-transparent hover:bg-transparent">
              <img
                className="relative w-[65px] h-[65px] mt-[-20.00px] mb-[-20.00px]"
                alt="Frame"
                src="/frame-10.svg"
              />
            </Button>
          </div>
        </div>

        {/* Decorative Image */}
        <img
          className="absolute w-[178px] h-[383px] top-[54px] left-[1682px]"
          alt="Frame"
          src="/frame-42-1.svg"
        />

        {/* Footer Bar */}
        <div className="flex w-[1760px] h-[66px] items-center justify-between px-11 py-2.5 absolute bottom-[30px] left-[50px] rounded-[50px] border border-solid border-[#ffffff26] bg-[linear-gradient(0deg,rgba(51,51,51,1)_0%,rgba(51,51,51,1)_100%)]">
          {/* Social Media Icons */}
          <div className="flex w-[327px] items-center gap-5 relative">
            {socialIcons.map((icon, index) => (
              <img
                key={`social-icon-${index}`}
                className="relative w-9 h-9"
                alt={icon.alt}
                src={icon.src}
              />
            ))}
          </div>

          {/* Copyright Text */}
          <div className="relative w-fit [font-family:'Owners_TRIAL_Wide-Regular',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[normal]">
            Copyright | 2025 BONBON. All rights reserved.
          </div>

          {/* Footer Links */}
          <div className="inline-flex items-center gap-10 relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[50px] relative flex-[0_0_auto]">
              {footerLinks.map((link, index) => (
                <div
                  key={`footer-link-${index}`}
                  className="relative w-fit mt-[-1.00px] [font-family:'Owners_TRIAL_Wide-Regular',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[normal]"
                >
                  {link.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};
