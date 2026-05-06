import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import CustomCursor from "./_components/CustomCursor";
import ScrollEffects from "./_components/ScrollEffects";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "No Boundaries Dance Foundation",
  description:
    "A non-profit dedicated to expanding access to dance education for youth in Moreno Valley and the Inland Empire — removing financial barriers one dancer at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable} ${dmSerif.variable}`}
    >
      <body>
        <CustomCursor />
        {children}
        <ScrollEffects />
      </body>
    </html>
  );
}
