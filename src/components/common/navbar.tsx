"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

function Navbar({
  className,
  isVisible = true,
  activeSection = "Home",
}: {
  className?: string;
  isVisible?: boolean;
  activeSection?: string;
}) {
  const links = [
    {
      label: "Home",
      href: "#hero",
      section: "Home",
    },
    {
      label: "Works",
      href: "#works",
      section: "Works",
    },
    {
      label: "Goodbye",
      href: "#goodbye",
      section: "Goodbye",
    },
    {
      label: "Hello",
      href: "#goodbye",
      section: "Hello",
    },
    {
      label: "Program",
      href: "#program",
      section: "Program",
    },
    {
      label: "Leaderboard",
      href: "#leaderboard",
      section: "Leaderboard",
    },
    {
      label: "About",
      href: "#about",
      section: "About",
    },
  ];
  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-5 z-50 mx-auto max-w-full md:bottom-10 w-fit transition-opacity duration-300 max-lg:hidden",
        !isVisible && "opacity-0 pointer-events-none",
        className
      )}
    >
      <Menu
        setActive={() => {}}
        className="flex h-auto justify-start overflow-x-auto md:overflow-x-hidden items-center mx-auto w-[calc(100vw-32px)] md:w-full px-[15px] py-[10px]"
      >
        <Image
          src="/images/navbar-icon.svg"
          alt="logo"
          width={38}
          height={38}
          className="hidden lg:block"
        />
        <div className="!mx-10 hidden lg:block w-[1px] bg-[#48AF5E] h-10" />
        <div className="!ml-0 flex items-center gap-[20px] lg:gap-[50px]">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-white text-lg text-center tracking-[0] leading-[normal] transition-all duration-300",
                activeSection === link.section && "underline underline-offset-4"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Button className="!ml-10 hidden lg:block">Join Now</Button>
        {/* <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem> */}
      </Menu>
    </div>
  );
}

export default Navbar;
