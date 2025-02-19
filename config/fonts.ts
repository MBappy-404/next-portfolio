/* eslint-disable prettier/prettier */
import { Fira_Code as FontMono, Inter as FontSans, Rajdhani as FontRajdhani } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontRajdhani = FontRajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: ["300", "400", "500", "600", "700"], // Specify the weights you need
});
