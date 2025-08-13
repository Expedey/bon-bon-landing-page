import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "BonBon - Start Living Stop Planning",
  description:
    "BonBon takes the hassle out of planning group experiences — from spontaneous outings to unforgettable get-togethers.",
};

const ownersTrial = localFont({
  src: [
    {
      path: "/fonts/OwnersTRIAL-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/OwnersTRIAL-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-owners-trial",
});

const ownersTrialWide = localFont({
  src: [
    {
      path: "/fonts/OwnersTRIALWide-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-owners-trial-wide",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ownersTrial.variable} ${ownersTrialWide.variable}`}>
        {children}
      </body>
    </html>
  );
}
