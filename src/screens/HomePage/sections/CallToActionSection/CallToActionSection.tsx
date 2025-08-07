import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  // Card data for mapping
  const cards = [
    {
      title: "Claim your personal Invite Iink",
      description:
        "Once you join the waitlist, you'll get a unique referral link made just for you. It's your golden ticket to skip the line  and bring your friends with you.",
      buttonText: "Invite Now",
      position: "left-[50px]",
      rotation: "rotate-[-15deg]",
      shadow: "shadow-[0px_0px_100px_#6a4afd1a]",
      imageSrc: "/frame-42-4.svg",
      imageStyles:
        "w-[207px] h-[274px] top-[244px] left-[273px] rotate-[15deg]",
    },
    {
      title: "Share it Anywhere\n& Everywhere",
      description:
        "Send your link via WhatsApp, Instagram, Messenger, or even text. Every friend who signs up through you boosts your rank on the waitlist.",
      buttonText: "Share Now",
      position: "left-[408px]",
      rotation: "",
      shadow: "shadow-[0px_0px_100px_#76d9891a]",
      imageSrc: "/frame-42-3.svg",
      imageStyles: "w-[206px] h-[193px] top-[258px] left-[258px]",
    },
    {
      title: "Climb the ranks & Unlock Rewards",
      description:
        "The more people you bring, the faster you rise. Earn early access, unlock exclusive perks, and become a top-tier planner in the BonBon community.",
      buttonText: "Share Now",
      position: "left-[776px]",
      rotation: "rotate-[15deg]",
      shadow: "shadow-[0px_0px_100px_#eb612b1a]",
      imageSrc: "/frame-42-5.svg",
      imageStyles:
        "w-[278px] h-[191px] top-[277px] left-[249px] rotate-[-15deg]",
    },
  ];

  return (
    <section className="relative w-full h-[1000px] py-[138px]">
      <div className="container mx-auto">
        <div className="flex flex-col w-full max-w-[1320px] items-start gap-[30px] mb-[191px]">
          <h2 className="self-stretch [font-family:'OwnersTRIAL-Medium',Helvetica] font-medium text-white text-6xl tracking-[0] leading-[normal]">
            Bring Friends. Jump the Line
          </h2>
          <p className="self-stretch [font-family:'OwnersTRIAL-Regular',Helvetica] font-normal text-[#b0b0b0] text-[26px] tracking-[1.04px] leading-10">
            BonBon is better with your crew &amp; we&apos;ll reward you for it.
            <br />
            Invite friends to join the waitlist and earn perks while climbing
            your way to early access.
          </p>
        </div>

        <div className="relative h-[556px] max-w-[1291px] mx-auto">
          {cards.map((card, index) => (
            <Card
              key={index}
              className={`flex flex-col w-[465px] items-start gap-2.5 p-[50px] absolute top-[52px] ${card.position} rounded-[50px] overflow-hidden border border-solid border-[#ffffff1a] ${card.rotation} ${card.shadow} bg-[linear-gradient(0deg,rgba(30,30,30,1)_0%,rgba(30,30,30,1)_100%)]`}
            >
              <CardContent className="flex flex-col w-full items-start gap-10 p-0">
                <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
                  <h3 className="self-stretch mt-[-1.00px] [font-family:'OwnersTRIAL-Medium',Helvetica] font-medium text-white text-4xl tracking-[0] leading-[normal]">
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
                  <p className="self-stretch [font-family:'OwnersTRIAL-Regular',Helvetica] font-normal text-white text-[22px] tracking-[0.88px] leading-[normal]">
                    {card.description}
                  </p>
                </div>

                <Button className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-[40px] shadow-[inset_-4px_-4px_4px_#5034d1,inset_4px_4px_4px_#623ffd] bg-[linear-gradient(180deg,rgba(106,74,253,1)_0%,rgba(48,21,169,1)_100%)]">
                  <span className="w-fit mt-[-1.00px] [font-family:'Owners_TRIAL_Wide-Regular',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[normal]">
                    {card.buttonText}
                  </span>
                </Button>
              </CardContent>

              <img
                className={`absolute ${card.imageStyles}`}
                alt="Decorative frame"
                src={card.imageSrc}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
