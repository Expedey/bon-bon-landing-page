import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { SemiCircleIcon } from "@/components/icons";

export const UserStatsSection = (): JSX.Element => {
  // Data for stats cards to enable mapping
  const statsCards = [
    {
      value: "16",
      description: (
        <>
          Years of
          <br />
          agency experience
        </>
      ),
      shadow: "shadow-[0px_0px_100px_#76d9891a]",
      icon: (
        <SemiCircleIcon fillColor="#74DB8A" className="w-[156px] h-[156px]" />
      ),
    },
    {
      value: "4.7",
      description: (
        <>
          Our clients happily rate us a
          <br />
          4.7 out of 5
        </>
      ),
      shadow: "shadow-[0px_0px_100px_#6a4afd1a]",
      icon: <SemiCircleIcon className="w-[156px] h-[156px]" />,
    },
    {
      value: "150+",
      description: (
        <>
          Happy clients
          <br />
          successfully served
        </>
      ),
      shadow: "shadow-[0px_0px_100px_#eb612b1a]",
      icon: (
        <SemiCircleIcon fillColor="#EB612B" className="w-[156px] h-[156px]" />
      ),
    },
    {
      value: "81%",
      description: (
        <>
          Most clients start another
          <br />
          project with us
        </>
      ),
      shadow: "shadow-[0px_0px_100px_#ee86e71a]",
      icon: (
        <SemiCircleIcon fillColor="#EE86E7" className="w-[156px] h-[156px]" />
      ),
    },
  ];

  return (
    <section className="w-full py-20 lg:px-[30px] ">
      <div className="w-full px-4 relative mx-auto border border-[#ffffff1a] rounded-[50px] bg-[linear-gradient(0deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.02)_100%)]">
        <div className="max-w-[1440px] mx-auto py-5 lg:py-[120px]">
          <div className="flex flex-col w-full lg:max-w-[800px] xl:max-w-[1024px] 2xl:max-w-[1320px] items-center gap-[24px] mx-auto">
            <h2 className="w-full text-center">Tried, tested, trusted</h2>
            <p className="w-full text-[#b0b0b0] text-center ">
              With almost 2 decades of experience, we know all about the
              challenges tech companies face. But most importantly we know
              exactly how to overcome them. And our track record shows.
            </p>
          </div>

          <div className="mt-20 lg:mt-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 xl:gap-4 2xl:gap-5 w-full">
            {statsCards.map((card, index) => (
              <Card
                key={`stat-card-${index}`}
                className={`relative overflow-hidden rounded-[50px] border border-solid border-[#ffffff1a] ${card.shadow} bg-[linear-gradient(0deg,rgba(30,30,30,1)_0%,rgba(30,30,30,1)_100%)]`}
              >
                <div className="absolute top-[0px] left-[-40px] -translate-y-1/2">
                  {card.icon}
                </div>
                <CardContent className="flex flex-col items-start gap-4 px-10 py-[50px] h-full">
                  <h2 className="w-full text-white xl:text-[56px] text-center">
                    {card.value}
                  </h2>
                  <p className="w-full text-white text-lg xl:text-[22px] text-center">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="absolute top-[118px] right-0 hidden lg:block rotate-180">
          <SemiCircleIcon fillColor="#74DB8A" />
        </div>
      </div>
    </section>
  );
};
