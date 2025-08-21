import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { SemiCircleIcon } from "@/components/icons";

const StatsSection = (): JSX.Element => {
  // Data for stats cards to enable mapping
  const statsCards = [
    {
      value: "30+",
      description: (
        <>
          Curated experiences in the
          <br />
          pipeline
        </>
      ),
      shadow: "shadow-[0px_0px_100px_#76d9891a]",
      icon: (
        <SemiCircleIcon fillColor="#74DB8A" className="w-[156px] h-[156px]" />
      ),
    },
    {
      value: "+25",
      description: (
        <>
          Early venues queued for
          <br />
          partnership
        </>
      ),
      shadow: "shadow-[0px_0px_100px_#6a4afd1a]",
      icon: <SemiCircleIcon className="w-[156px] h-[156px]" />,
    },
    {
      value: "3",
      description: (
        <>
          Cities planned
          <br />
          for expansion after launch
        </>
      ),
      shadow: "shadow-[0px_0px_100px_#eb612b1a]",
      icon: (
        <SemiCircleIcon fillColor="#EB612B" className="w-[156px] h-[156px]" />
      ),
    },
    {
      value: "1000+",
      description: (
        <>
          spots to claim before
          <br />
          launch
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
            <h2 className="w-full text-center">
              Tried, Tested, Trusted — Soon by You
            </h2>
            <p className="w-full text-[#b0b0b0] text-center ">
              BonBon is about to change how you plan unforgettable outings.
              Here’s what we’ve built before you even join:
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
                <CardContent className="flex flex-col items-start gap-4 px-9 py-[50px] h-full">
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

export default StatsSection;
