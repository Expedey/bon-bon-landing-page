import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const UserStatsSection = (): JSX.Element => {
  // Data for stats cards to enable mapping
  const statsCards = [
    {
      value: "16",
      description: "Years of\nagency experience",
      shadow: "shadow-[0px_0px_100px_#76d9891a]",
    },
    {
      value: "4.7",
      description: "Our clients happily rate us a\n4.7 out of 5",
      shadow: "shadow-[0px_0px_100px_#6a4afd1a]",
    },
    {
      value: "150+",
      description: "Happy clients\nsuccessfully served",
      shadow: "shadow-[0px_0px_100px_#eb612b1a]",
    },
    {
      value: "81%",
      description: "Most clients start another\nproject with us",
      shadow: "shadow-[0px_0px_100px_#ee86e71a]",
    },
  ];

  return (
    <section className="relative w-full py-[120px] px-6 md:px-12 lg:px-[210px] rounded-[50px] border border-solid border-[#ffffff1a] bg-[linear-gradient(0deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.02)_100%)]">
      <div className="flex flex-col w-full max-w-[1440px] mx-auto items-center gap-20">
        <div className="flex flex-col w-full max-w-[1320px] items-center gap-[30px]">
          <h2 className="w-full [font-family:'OwnersTRIAL-Medium',Helvetica] font-medium text-white text-6xl text-center tracking-[0] leading-[normal]">
            Tried, tested, trusted
          </h2>

          <p className="w-full [font-family:'OwnersTRIAL-Regular',Helvetica] font-normal text-[#b0b0b0] text-[26px] text-center tracking-[1.04px] leading-10">
            With almost 2 decades of experience, we know all about the
            challenges tech companies face. But most importantly we know exactly
            how to overcome them. And our track record shows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {statsCards.map((card, index) => (
            <Card
              key={`stat-card-${index}`}
              className={`relative overflow-hidden rounded-[50px] border border-solid border-[#ffffff1a] ${card.shadow} bg-[linear-gradient(0deg,rgba(30,30,30,1)_0%,rgba(30,30,30,1)_100%)]`}
            >
              <img
                className="absolute w-[150px] h-[143px] top-0 left-0"
                alt="Frame"
                src="/frame-74.svg"
              />
              <CardContent className="flex flex-col items-start gap-4 p-10">
                <div className="w-full [font-family:'OwnersTRIAL-Medium',Helvetica] font-medium text-white text-[56px] text-center tracking-[0] leading-[normal]">
                  {card.value}
                </div>
                <div className="w-full [font-family:'OwnersTRIAL-Regular',Helvetica] font-normal text-white text-[22px] text-center tracking-[0.88px] leading-[normal] whitespace-pre-line">
                  {card.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <img
        className="absolute w-[117px] h-[252px] top-[90px] right-[30px]"
        alt="Frame"
        src="/frame-42-1.svg"
      />
    </section>
  );
};
