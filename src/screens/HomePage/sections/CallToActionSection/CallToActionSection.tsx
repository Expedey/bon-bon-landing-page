import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { SemiCircleIcon } from "@/components/icons";

export const CallToActionSection = (): JSX.Element => {
  // Card data for mapping
  const cards = [
    {
      title: "Claim your personal Invite Iink",
      description:
        "Once you join the waitlist, you'll get a unique referral link made just for you. It's your golden ticket to skip the line  and bring your friends with you.",
      buttonText: "Invite Now",
      // translate: "translate-x-[160px]",
      // rotation: "xl:rotate-[-15deg]",
      shadow: "xl:shadow-[0px_0px_100px_#6a4afd1a]",
      imageSrc: "/frame-42-4.svg",
      index: "z-[1]",
      icon: <SemiCircleIcon />,
    },
    {
      title: "Share it Anywhere\n& Everywhere",
      description:
        "Send your link via WhatsApp, Instagram, Messenger, or even text. Every friend who signs up through you boosts your rank on the waitlist.",
      buttonText: "Share Now",
      // translate: "translate-x-[0]",
      index: "z-[2]",
      // rotation: "rotate-[-6deg] xl:rotate-0",
      shadow: "xl:shadow-[0px_0px_100px_#76d9891a]",
      imageSrc: "/frame-42-3.svg",
      icon: <SemiCircleIcon fillColor="#74DB8A" />,
    },
    {
      title: "Climb the ranks & Unlock Rewards",
      description:
        "The more people you bring, the faster you rise. Earn early access, unlock exclusive perks, and become a top-tier planner in the BonBon community.",
      buttonText: "Share Now",
      // translate: "translate-x-[-160px]",
      index: "z-[3] xl:z-[1]",
      // rotation: "xl:rotate-[15deg]",
      shadow: "xl:shadow-[0px_0px_100px_#eb612b1a]",
      imageSrc: "/frame-42-5.svg",
      icon: <SemiCircleIcon fillColor="#EB612B" />,
    },
  ];

  return (
    <section className="relative w-full min-h-screen py-20 lg:py-[100px] xl:py-[110px] 2xl:py-[140px]">
      <div className="container mx-auto">
        <div className="flex flex-col w-full max-w-[1320px] items-start gap-[30px] mb-10 xl:mb-[100px]">
          <h2 className="self-stretch">Bring Friends. Jump the Line</h2>
          <p className="self-stretch text-white lg:text-[#B1B1B1]">
            BonBon is better with your crew &amp; we&apos;ll reward you for it.
            <br />
            Invite friends to join the waitlist and earn perks while climbing
            your way to early access.
          </p>
        </div>

        <div className="relative max-w-[1320px] md:gap-5 lg:gap-8 xl:gap-5 w-full mx-auto flex flex-col xl:flex-row">
          {cards.map((card, index) => (
            <Card
              key={index}
              className={`flex flex-col relative items-start p-10 2xl:p-[50px] rounded-[50px] overflow-hidden border border-solid border-[#ffffff1a] ${card.shadow} ${card.index} bg-[linear-gradient(0deg,rgba(30,30,30,1)_0%,rgba(30,30,30,1)_100%)]`}
            >
              <CardContent className="flex flex-col w-full items-start gap-10 p-0 h-full justify-between">
                <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
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

                <Button>
                  <span className="w-fit text-white text-lg text-center leading-[normal]">
                    {card.buttonText}
                  </span>
                </Button>
                <div className="absolute bottom-0 right-0 rotate-180 translate-y-1/2">
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
