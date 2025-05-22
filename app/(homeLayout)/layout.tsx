/* eslint-disable padding-line-between-statements */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import "@/styles/globals.css";
import { Metadata } from "next";
import clsx from "clsx";

import { Providers } from "./providers";
import image from "@/public/hero_image2.png";
import Footer from "@/components/footer";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Saroar Jahan Bappy | Full Stack Developer & MERN Expert",
  description:
    "Saroar Jahan Bappy is a skilled Full Stack Developer specializing in MERN stack, Next.js, and modern web technologies. Explore my portfolio, projects, and expertise.",
  metadataBase: new URL("https://dev-saroar-jahan.vercel.app"),
  keywords: [
    "sj bappy portfolio",
    "saroar jahan",
    "md saroar jahan",
    "dev saroar jahan",
    "dev bappy",
    "bappy dev",
    "saroar dev",
    "Bappy Dev",
    "Dev Bappy",
    "Md Saroar Jahan",
    "Saroar Jahan Bappy",
    "SJ Bappy",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React.js Developer",
    "JavaScript Expert",
    "Web Developer Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Freelance Web Developer",
    "Bangladesh Web Developer",
  ],
  openGraph: {
    title: "Saroar Jahan Bappy | Full Stack Developer & MERN Expert",
    description:
      "Explore my portfolio and projects. I'm a Full Stack Developer with expertise in MERN stack, Next.js, and scalable web applications.",
    url: "https://dev-saroar-jahan.vercel.app/",
    type: "website",
    images: [
      {
        url: `${image}`,
        width: 1200,
        height: 630,
        alt: "Saroar Jahan Bappy Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MD_Saroar_Jahan",
    title: "Saroar Jahan Bappy | Full Stack Developer & MERN Expert",
    description:
      "Experienced Full Stack Developer specializing in MERN stack and Next.js. Check out my portfolio and projects.",
    images: [`${image}`],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div>
            {/* <Navbar session={session} /> */}
            <main className="min-h-screen dark:bg-gray-950">{children}</main>
          </div>
          <Toaster
            richColors
            style={{
              textTransform: "uppercase",
            }}
          />
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
