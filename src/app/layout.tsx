import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BonBon - Start Living Stop Planning",
  description:
    "BonBon takes the hassle out of planning group experiences — from spontaneous outings to unforgettable get-togethers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
