import { Alex_Brush } from "next/font/google";
import localFont from "next/font/local";

export const geist = localFont({
  src: "./GeistVF.woff",
  display: "swap",
});

export const alex = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
});
