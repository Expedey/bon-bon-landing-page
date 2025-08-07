import React from "react";

export const FooterSection = (): JSX.Element => {
  return (
    <section className="w-full py-24 relative">
      <div className="container mx-auto relative">
        <div className="relative">
          <h2 className="text-[86px] font-medium text-center tracking-normal leading-normal [font-family:'OwnersTRIAL-Medium',Helvetica]">
            <span className="text-white">We</span>
            <span className="text-white">
              {" "}
              help ambitious tech scale-ups thrive, through design
              and&nbsp;&nbsp;
              <br />
              development{" "}
            </span>
          </h2>

          <div className="absolute w-[7px] h-20 top-[341px] left-[187px] bg-[#6a4afd] shadow-[-20px_0px_94px_40px_#6a4afd66]" />
        </div>
      </div>
    </section>
  );
};
