"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
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
import { SemiCircleIcon } from "@/components/icons";
import { gsap } from "gsap";
import { useLeaderboard } from "@/hooks/useLeaderboard";
import { LeaderboardService } from "@/services/leaderboardService";

type TCardWithButton = {
  title: string;
  description?: string | React.ReactNode;
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
      <div className="bg-[#1E1E1E] p-4 2xl:p-[50px] border border-[#FFFFFF1A] rounded-[20px] xl:rounded-[50px] shadow-[0px_0px_100px_0px_#76D9891A] lg:shadow-none">
        <h3 className="text-base font-medium md:text-2xl xl:text-3xl 2xl:text-4xl">
          {title}
        </h3>
        {description && (
          <div className="mt-5 text-base text-white break-words whitespace-pre-line 2xl:text-lg">
            {description}
          </div>
        )}
      </div>
      <a
        target="_blank"
        href={buttonLink}
        className="mr-auto lg:mr-0 lg:ml-auto w-fit"
      >
        <Button>{buttonText}</Button>
      </a>
    </div>
  );
};

const AppShowcaseSection = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tableRowRefs = useRef<(HTMLTableRowElement | null)[]>([]);
  const [prevLeaderboard, setPrevLeaderboard] = useState<any[]>([]);
  
  // Use real-time leaderboard data
  const { leaderboard, loading, error } = useLeaderboard(5);

  // Transform leaderboard data for the table - memoized to prevent infinite re-renders
  const tableData = useMemo(() => {
    return leaderboard.map((entry, index) => ({
      id: (index + 1).toString().padStart(2, '0'),
      avatar: entry.avatar_image_url || `/images/default-avatar.png`,
      username: entry.username || "Anonymous",
      inviteCount: LeaderboardService.formatReferralCount(entry.total_referrals),
      tierBadge: LeaderboardService.getTierBadge(entry.total_referrals),
      rank: entry.rank,
      userId: entry.id, // For tracking changes
    }));
  }, [leaderboard]);

  // Animate leaderboard updates
  useEffect(() => {
    if (prevLeaderboard.length > 0 && tableData.length > 0) {
      // Find only the rows that actually have updated data (referral count changes)
      const changes = tableData.map((newItem, newIndex) => {
        const oldItem = prevLeaderboard.find(item => item.userId === newItem.userId);
        if (oldItem && oldItem.inviteCount !== newItem.inviteCount) {
          const oldIndex = prevLeaderboard.findIndex(item => item.userId === newItem.userId);
          return { newIndex, oldIndex, item: newItem, hasUpdate: true };
        }
        return null;
      }).filter((change): change is { newIndex: number; oldIndex: number; item: any; hasUpdate: boolean } => 
        change !== null && change.hasUpdate
      );

      if (changes.length > 0) {
        // Only animate the specific rows that have data updates
        changes.forEach(change => {
          const rowElement = tableRowRefs.current[change.newIndex];
          if (rowElement) {
            // Bouncy 3D jump effect with glowing for updated rows
            gsap.timeline()
              .to(rowElement, {
                y: -15,
                scale: 1.05,
                rotateX: 8,
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(118, 217, 137, 0.6), 0 0 40px rgba(118, 217, 137, 0.3)",
                filter: "drop-shadow(0 0 8px rgba(118, 217, 137, 0.8))",
                duration: 0.5,
                ease: "power2.out"
              })
              .to(rowElement, {
                y: 0,
                scale: 1,
                rotateX: 0,
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1), 0 0 10px rgba(118, 217, 137, 0.4)",
                filter: "drop-shadow(0 0 4px rgba(118, 217, 137, 0.6))",
                duration: 0.5,
                ease: "bounce.out"
              })
              .to(rowElement, {
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0)",
                filter: "none",
                duration: 0.5,
                ease: "power2.out"
              });
          }
        });
      }
    }
    setPrevLeaderboard(tableData);
  }, [tableData]);

  // Fallback data if no real data is available
  const fallbackData = [
    {
      id: "01",
      userId: "fallback-1",
      avatar: "/images/avatar-1.png",
      username: "Lorem Ipsum",
      inviteCount: "100K+",
      tierBadge: "/images/gold-badge.svg",
    },
    {
      id: "02",
      userId: "fallback-2",
      avatar: "/images/avatar-2.png",
      username: "Dolor Site",
      inviteCount: "99K+",
      tierBadge: "/images/gold-badge.svg",
    },
    {
      id: "03",
      userId: "fallback-3",
      avatar: "/images/avatar-3.png",
      username: "Obama",
      inviteCount: "98K+",
      tierBadge: "/images/silver-badge.svg",
    },
    {
      id: "04",
      userId: "fallback-4",
      avatar: "/images/avatar-4.png",
      username: "Tony",
      inviteCount: "97.8K+",
      tierBadge: "/images/silver-badge.svg",
    },
    {
      id: "05",
      userId: "fallback-5",
      avatar: "/images/avatar-5.png",
      username: "Tenos",
      inviteCount: "97.5K+",
      tierBadge: "/images/iron-badge.svg",
    },
  ];

  // Use real data if available, otherwise fallback
  const displayData = tableData.length > 0 ? tableData : fallbackData;

  const cards = [
    {
      title: "Live leaderboard",
      description: (
        <>
          <p className="text-base text-white 2xl:text-lg">
            Ranked in realtime by <i>successful referrals.</i>
            <br />
            <span className="text-sm">
              #1 = most referrals, #2 = next most, etc.
            </span>
          </p>
        </>
      ),
      buttonText: "Dashboard",
      buttonLink: "https://referral-system-demo.netlify.app/dashboard",
    },
    {
      title: "Every referral moves you up",
      description: (
        <>
          <p className="text-base text-white 2xl:text-lg">
            Share your link. Each <i>successful referral</i> boosts your rank
            toward the Top 30.
          </p>
        </>
      ),
      buttonText: "Share Now",
      buttonLink: "https://referral-system-demo.netlify.app/signin",
    },
    {
      title: "Top 30 win from the Reward Pool",
      description: (
        <ul className="space-y-2 list-none list-inside">
          <li>
            &#xFE0F; Waitlist leaderboard + referral link (everyone on signup)
          </li>
          <li>💸 €10 off your first BonBon booking</li>
          <li>🎉 Priority early access before public launch</li>
          <li>👯 “Bring a Friend” bonus (you +1 to a surprise experience)</li>
          <li>🥂 Invite to BonBon’s private launch party</li>
          <li>🎁 Free curated group experience (you + 3 friends)</li>
        </ul>
      ),
      buttonText: "Claim Now",
      buttonLink: "https://referral-system-demo.netlify.app/signup",
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
    const interval = setInterval(animateToNext, 5000);

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
          <div className="relative flex-[3] px-4 lg:px-0 lg:pb-10">
            <div className="relative bg-[#1C1E20] rounded-tl-[32px] rounded-tr-[32px]">
              {/* Window control buttons */}
              <div className="flex items-center gap-12 py-5 px-9">
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
              <div className="bg-[#26292c] overflow-hidden rounded-bl-[32px] rounded-br-[32px] p-2.5 lg:p-5 relative">
                {loading && leaderboard.length === 0 ? (
                  <div className="flex items-center justify-center h-64">
                    <div className="text-center">
                      <div className="w-8 h-8 mx-auto border-b-2 border-green-400 rounded-full animate-spin"></div>
                      <p className="mt-2 text-sm text-white">Loading leaderboard...</p>
                    </div>
                  </div>
                ) : error ? (
                  <div className="flex items-center justify-center h-64">
                    <div className="text-center">
                      <p className="text-sm text-red-400">Failed to load leaderboard</p>
                      <p className="mt-1 text-xs text-white">Using demo data</p>
                    </div>
                  </div>
                ) : (
                  <Table className="overflow-hidden">
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
                      {displayData.map((row, index) => (
                        <TableRow
                          key={row.userId || row.id}
                          ref={(el) => (tableRowRefs.current[index] = el)}
                          className="hover:bg-transparent min-h-[34px] lg:min-h-[65px] transition-all duration-500 ease-out transform-gpu"
                          style={{ transformStyle: 'preserve-3d' }}
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
                              alt="Tier badge"
                              src={row.tierBadge}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
                {/* Left SVG */}
                <div className="absolute left-0 hidden rotate-180 -translate-x-full top-1/2 lg:block">
                  <SemiCircleIcon fillColor="#EB612B" />
                </div>
              </div>
            </CardContent>
          </div>
          <div
            ref={containerRef}
            className="flex flex-[2] lg:flex-col lg:overflow-hidden max-lg:px-4 min-h-[400px] lg:min-h-[auto] lg:px-0 max-w-[588px] w-full mx-auto lg:mx-0 relative"
          >
            {cards.map((card, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`absolute ${
                  index === 0 ? "opacity-100" : "opacity-0"
                }`}
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
