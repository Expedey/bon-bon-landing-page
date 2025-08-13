"use client";
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SemiCircleIcon } from "@/components/icons";
import { gsap } from "gsap";

type TCardWithButton = {
  title: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
};

const CardWithButton = ({
  title,
  description,
  buttonText,
  buttonLink,
}: TCardWithButton) => {
  return (
    <div className="flex flex-col gap-6 text-white lg:gap-10">
      <div className="bg-[#1E1E1E] p-[30px] xl:p-[50px] border border-[#FFFFFF1A] rounded-[20px] xl:rounded-[50px] shadow-[0px_0px_100px_0px_#76D9891A] lg:shadow-none">
        <h3 className="text-2xl font-medium xl:text-4xl">{title}</h3>
        {description && (
          <p className="text-white text-base xl:text-[22px] mt-5 break-words whitespace-pre-line">
            {description}
          </p>
        )}
      </div>
      <Link href={buttonLink} className="mr-auto lg:mr-0 lg:ml-auto w-fit">
        <Button>{buttonText}</Button>
      </Link>
    </div>
  );
};

const AppShowcaseSection = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Data for the table rows
  const tableData = [
    {
      id: "01",
      avatar: "/images/avatar-1.png",
      username: "Lorem Ipsum",
      inviteCount: "100K+",
      tierBadge: "/images/gold-badge.svg",
    },
    {
      id: "02",
      avatar: "/images/avatar-2.png",
      username: "Dolor Site",
      inviteCount: "99K+",
      tierBadge: "/images/gold-badge.svg",
    },
    {
      id: "03",
      avatar: "/images/avatar-3.png",
      username: "Obama",
      inviteCount: "98K+",
      tierBadge: "/images/silver-badge.svg",
    },
    {
      id: "04",
      avatar: "/images/avatar-4.png",
      username: "Tony",
      inviteCount: "97.8K+",
      tierBadge: "/images/silver-badge.svg",
    },
    {
      id: "05",
      avatar: "/images/avatar-5.png",
      username: "Tenos",
      inviteCount: "97.5K+",
      tierBadge: "/images/iron-badge.svg",
    },
  ];

  const cards = [
    {
      title: "Specific thresholds unlock access to perks",
      description: `
        Example:
        3 invites = early access
        10 invites = invite only-experiences
        Top 10% = special recognition or premium features
      `,
      buttonText: "Each referral",
      buttonLink: "/",
    },
    {
      title: "Earn referral gives the user points or XP",
      buttonText: "Join the waitlist",
      buttonLink: "/",
    },
    {
      title: "Earn referral gives the user points or XP",
      buttonText: "Join the waitlist",
      buttonLink: "/",
    },
    {
      title: "Earn referral gives the user points or XP",
      buttonText: "Join the waitlist",
      buttonLink: "/",
    },
  ];

  useEffect(() => {
    if (!containerRef.current || cardRefs.current.length === 0) return;

    // Check screen size
    const isLargeScreen = window.innerWidth >= 1024;
    let currentCardIndex = 0;

    // Set initial positions based on screen size
    gsap.set(cardRefs.current, {
      [isLargeScreen ? "y" : "x"]: (index: number) =>
        index === 0 ? 0 : isLargeScreen ? 400 : 400,
      opacity: (index: number) => (index === 0 ? 1 : 0),
    });

    const animateToNext = () => {
      const nextIndex = (currentCardIndex + 1) % cards.length;

      // Get current and next card elements
      const currentCard = cardRefs.current[currentCardIndex];
      const nextCard = cardRefs.current[nextIndex];

      if (!currentCard || !nextCard) return;

      // Create timeline
      const tl = gsap.timeline();

      // First, position the next card outside the viewport
      gsap.set(nextCard, {
        [isLargeScreen ? "y" : "x"]: isLargeScreen ? 400 : 400,
        opacity: 0,
      });

      // Animate current card out (slide up/left and fade out)
      tl.to(
        currentCard,
        {
          [isLargeScreen ? "y" : "x"]: isLargeScreen ? -400 : -400,
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
        },
        0
      );

      // Animate next card in (slide up/left from bottom/right and fade in)
      tl.to(
        nextCard,
        {
          [isLargeScreen ? "y" : "x"]: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.inOut",
        },
        0
      );

      // After animation, reset all cards except the active one
      tl.call(
        () => {
          cardRefs.current.forEach((card, index) => {
            if (card && index !== nextIndex) {
              gsap.set(card, {
                [isLargeScreen ? "y" : "x"]: isLargeScreen ? 400 : 400,
                opacity: 0,
              });
            }
          });
        },
        [],
        0.8
      );

      // Update the current index
      currentCardIndex = nextIndex;
    };

    // Start the interval
    const interval = setInterval(animateToNext, 3000);

    // Cleanup
    return () => {
      clearInterval(interval);
    };
  }, [cards.length]);

  return (
    <div className="relative w-full mx-auto lg:px-[30px]">
      <Card className="bg-[#FFFFFF05] rounded-[50px] overflow-hidden py-10 lg:py-[86px] border border-[#FFFFFF1A]">
        <div className="text-center max-w-[1320px] w-full mx-auto mb-10 px-4">
          <h2>Top Sharers Get First Access</h2>
          <p className="mt-10">
            "Each invite boosts your rank. The higher you climb, the better your
            rewards.
          </p>
        </div>
        {/* Browser-like header */}
        <div className="max-w-[1440px] w-full mx-auto flex flex-col gap-10 lg:flex-row justify-between lg:px-[100px]">
          <div className="relative flex-[3] px-4 lg:px-0">
            <div className="relative bg-[#1C1E20] rounded-tl-[32px] rounded-tr-[32px]">
              {/* Window control buttons */}
              <div className="flex gap-12 items-center px-9 py-5">
                <div className="inline-flex h-[19px] items-center gap-[11px]">
                  <div className="relative w-[14px] h-[14px] bg-[#f45952] rounded-[6px]" />
                  <div className="relative w-[14px] h-[14px] bg-[#dfb94e] rounded-[6px]" />
                  <div className="relative w-[14px] h-[14px] bg-[#5ab748] rounded-[6px]" />
                </div>

                {/* Address bar */}
                <div className=" max-w-[442px] w-full bg-[#26292C] rounded-[6px] py-[7px] px-[10px]">
                  <p className="text-white text-xs tracking-[0] leading-[normal]">
                    BONBON
                  </p>
                </div>
              </div>
            </div>
            {/* Table content */}
            <CardContent className="p-0">
              <div className="bg-[#26292c] rounded-bl-[32px] rounded-br-[32px] p-2.5 lg:p-5 relative">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-[#ffffff05] rounded-[20px] hover:bg-transparent h-[65px]">
                      <TableHead className="text-[10px] lg:text-lg text-center text-white rounded-tl-[20px] rounded-bl-[20px]">
                        No
                      </TableHead>
                      <TableHead className="text-[10px] lg:text-lg text-center text-white">
                        Avatar
                      </TableHead>
                      <TableHead className="text-[10px] lg:text-lg text-white">
                        Username
                      </TableHead>
                      <TableHead className="text-[10px] lg:text-lg text-white">
                        Invite count
                      </TableHead>
                      <TableHead className="text-[10px] lg:text-lg text-center text-white rounded-tr-[20px] rounded-br-[20px]">
                        Tier badge
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tableData.map((row) => (
                      <TableRow
                        key={row.id}
                        className="hover:bg-transparent min-h-[34px] lg:min-h-[65px]"
                      >
                        <TableCell className="text-[9px] lg:text-base text-center text-white">
                          {row.id}
                        </TableCell>
                        <TableCell className="text-center">
                          <img
                            className="object-cover mx-auto w-[30px] lg:w-14 h-[30px] lg:h-14 rounded-full"
                            alt="User avatar"
                            src={row.avatar}
                          />
                        </TableCell>
                        <TableCell className="text-[9px] lg:text-base text-white">
                          {row.username}
                        </TableCell>
                        <TableCell className="text-[9px] lg:text-base text-white">
                          {row.inviteCount}
                        </TableCell>
                        <TableCell className="text-center">
                          <img
                            className="w-8 lg:w-[60px] h-8 lg:h-[60px] mx-auto"
                            alt="Gold tier"
                            src={row.tierBadge}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {/* Left SVG */}
                <div className="hidden absolute left-0 top-1/2 rotate-180 -translate-x-full lg:block">
                  <SemiCircleIcon fillColor="#EB612B" />
                </div>
              </div>
            </CardContent>
          </div>
          <div
            ref={containerRef}
            className="flex flex-[2] lg:flex-col lg:overflow-hidden px-4 min-h-[350px] lg:min-h-[auto] lg:px-0 max-w-[588px] w-full mx-auto lg:mx-0 lg:mt-20 relative"
          >
            {cards.map((card, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`absolute ${
                  index === 0 ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  top: "0",
                  left: "0",
                  right: "0",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                }}
              >
                <CardWithButton {...card} />
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AppShowcaseSection;
