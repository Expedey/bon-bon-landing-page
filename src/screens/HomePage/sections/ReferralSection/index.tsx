"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { SemiCircleIcon } from "@/components/icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ReferralSection = (): JSX.Element => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const waitlistUrl = process.env.NEXT_PUBLIC_WAITLIST_LINK;

  // Card data for mapping
  const cards = [
    {
      title: "Claim your personal Invite Iink",
      description:
        "Once you join the waitlist, you'll get a unique referral link made just for you. It's your golden ticket to skip the line  and bring your friends with you.",
      buttonText: "Invite Now",
      buttonLink: waitlistUrl,
      shadow: "xl:shadow-[0px_0px_100px_#6a4afd1a]",
      imageSrc: "/frame-42-4.svg",
      index: "z-[1]",
      icon: <SemiCircleIcon />,
      initialRotation: -15,
    },
    {
      title: "Share it Anywhere\n& Everywhere",
      description:
        "Send your link via WhatsApp, Instagram, Messenger, or even text. Every friend who signs up through you boosts your rank on the waitlist.",
      buttonText: "Share Now",
      buttonLink: waitlistUrl,
      index: "z-[2]",
      shadow: "xl:shadow-[0px_0px_100px_#76d9891a]",
      imageSrc: "/frame-42-3.svg",
      icon: <SemiCircleIcon fillColor="#74DB8A" />,
      initialRotation: 0,
    },
    {
      title: "Climb the ranks & Unlock Rewards",
      description:
        "The more people you bring, the faster you rise. Earn early access, unlock exclusive perks, and become an Elite hangout curator in the BonBon community.",
      buttonText: "Share Now",
      buttonLink: waitlistUrl,
      index: "z-[3] xl:z-[1]",
      shadow: "xl:shadow-[0px_0px_100px_#eb612b1a]",
      imageSrc: "/frame-42-5.svg",
      icon: <SemiCircleIcon fillColor="#EB612B" />,
      initialRotation: 15,
    },
  ];

  useEffect(() => {
    if (!cardsRef.current) return;

    // Check if screen width is >= 1280px (xl breakpoint)
    const isLargeScreen = window.innerWidth >= 1280;

    console.log(isLargeScreen, "__isLargeScreen");

    if (!isLargeScreen) {
      // On smaller screens, just set cards to visible state without rotation animation
      gsap.set(cardRefs.current, {
        opacity: 1,
        rotation: 0,
        x: 0,
        y: 0,
      });
      return;
    }

    // Set initial positions with overlapping rotations (only on large screens)
    gsap.set(cardRefs.current, {
      rotation: (index) => (isLargeScreen ? cards[index].initialRotation : 0),
      x: (index) =>
        isLargeScreen ? (index === 0 ? 100 : index === 2 ? -100 : 0) : 0,
    });

    // Create the animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "25% 80%",
        end: "bottom 20%",
        toggleActions: "play reverse restart reverse",
        // toggleActions: "play none none reverse",
      },
    });

    // Animate cards to final positions
    tl.to(cardRefs.current, {
      rotation: 0,
      opacity: 1,
      y: 0,
      x: 0,
      duration: 0.6,
      ease: "power3.out",
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen py-20 lg:py-[100px] xl:py-[110px] 2xl:py-[140px] flex items-center">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col w-full max-w-[1320px] items-start gap-[30px] mb-10 xl:mb-[100px]">
          <h2 className="self-stretch">Bring Friends. Jump the Line</h2>
          <p className="self-stretch text-white lg:text-[#B1B1B1]">
            BonBon is better with your crew &amp; we&apos;ll reward you for it.
            <br />
            Invite friends to join the waitlist and earn perks while climbing
            your way to early access.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="relative max-w-[1320px] xl:gap-5 w-full mx-auto flex flex-col xl:flex-row"
        >
          {cards.map((card, index) => (
            <Card
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`flex flex-col relative items-start p-10 2xl:p-[50px] rounded-[50px] overflow-hidden border border-solid border-[#ffffff1a] ${card.shadow} ${card.index} bg-[linear-gradient(0deg,rgba(30,30,30,1)_0%,rgba(30,30,30,1)_100%)] max-lg:[&:nth-child(2)]:!rotate-[-6deg] max-xl:[&:nth-child(2)]:!rotate-[-4deg]`}
            >
              <CardContent className="flex flex-col gap-10 justify-between items-start p-0 w-full h-full">
                <div className="flex relative flex-col gap-4 items-start self-stretch w-full">
                  <h3 className="self-stretch font-medium text-white text-xl lg:text-2xl 2xl:text-4xl tracking-[0] leading-[normal]">
                    {card.title.includes("\n") ? (
                      <>
                        {card.title.split("\n")[0]}
                        <br />
                        {card.title.split("\n")[1]}
                      </>
                    ) : (
                      card.title
                    )}
                  </h3>
                  <p className="self-stretch text-white text-sm lg:text-lg 2xl:text-[22px] tracking-[0.88px] leading-[normal]">
                    {card.description}
                  </p>
                </div>
                <Link href={card.buttonLink || ""} target="_blank">
                  <Button>
                    <span className="w-fit text-white text-lg text-center leading-[normal]">
                      {card.buttonText}
                    </span>
                  </Button>
                </Link>
                <div className="absolute right-0 bottom-0 rotate-180 translate-y-1/2">
                  {card.icon}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferralSection;
