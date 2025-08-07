import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  // Define testimonial data for mapping
  const testimonials = [
    {
      content: "Each referral gives the user points or XP",
      additionalContent: "",
    },
    {
      content:
        "Users are incentivized by both milestone rewards and relative ranking",
      additionalContent: "",
    },
    {
      content: "Specific thresholds unlock access to perks",
      additionalContent:
        "Example: 3 invites = early access\n10 invites = invite-only experiences\nTop 10% = special recognition or premium features",
    },
  ];

  return (
    <section className="flex flex-col w-full max-w-[588px] gap-[50px] rounded-[50px_50px_50px_0px] overflow-hidden">
      {testimonials.map((testimonial, index) => (
        <div
          key={`testimonial-${index}`}
          className="flex flex-col items-end gap-10 w-full"
        >
          <Card className="w-full border border-solid border-[#ffffff1a] rounded-[50px] bg-[linear-gradient(0deg,rgba(30,30,30,1)_0%,rgba(30,30,30,1)_100%)] shadow-[0px_0px_100px_#6a4afd1a]">
            <CardContent className="p-[50px]">
              <div className="[font-family:'OwnersTRIAL-Medium',Helvetica] font-medium text-4xl text-white tracking-[0] leading-[normal]">
                {testimonial.content}
              </div>
              {testimonial.additionalContent && (
                <div className="mt-2.5 [font-family:'OwnersTRIAL-Regular',Helvetica] font-normal text-white text-[22px] tracking-[0.88px] leading-[normal] whitespace-pre-line">
                  {testimonial.additionalContent}
                </div>
              )}
            </CardContent>
          </Card>

          <Badge className="px-5 py-2.5 rounded-[40px] shadow-[inset_-4px_-4px_4px_#5034d1,inset_4px_4px_4px_#623ffd] bg-[linear-gradient(180deg,rgba(106,74,253,1)_0%,rgba(48,21,169,1)_100%)]">
            <span className="[font-family:'Owners_TRIAL_Wide-Regular',Helvetica] font-normal text-lg text-center text-white tracking-[0] leading-[normal]">
              Each referral
            </span>
          </Badge>
        </div>
      ))}
    </section>
  );
};
