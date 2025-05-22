/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable import/order */
"use client";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";

import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "../config/site";
import { ThemeSwitch } from "./theme-switch";
import SignInModal from "./modal";
import { usePathname } from "next/navigation";
import { FaDownload } from "react-icons/fa6";
import { Button } from "@heroui/button";

type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};
export const Navbar = ({ session }: { session: UserProps | null }) => {
  // console.log(session);
  const pathname = usePathname();

  return (
    <HeroUINavbar
      classNames={{
        base: "bg-white dark:bg-gray-900  ",
        wrapper: "max-w-[1300px]",
      }}
      isBordered
      shouldHideOnScroll
      position="sticky"
    >
      <NavbarContent as="div">
        <NavbarContent justify="start">
          <NavbarBrand as="li" className="gap-3">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <p className="font-bold text-inherit">BAPPY</p>
            </NextLink>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="center">
          <ul className="hidden lg:flex gap-4 justify-center ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  data-active={pathname === item.href}
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden sm:flex gap-2">
            <ThemeSwitch />
          </NavbarItem>
          {/* <NavbarItem>
            <SignInModal session={session} />
          </NavbarItem> */}

          <Button
            className="text-base text-gray-800 dark:text-white"
            color="primary"
            variant="flat"
            endContent={<FaDownload />}
          >
            Resume
          </Button>
        </NavbarContent>

        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem className="text-base" key={`${item}-${index}`}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "  data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  data-active={pathname === item.href}
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarMenuItem>
            ))}
            {/* <SignInModal session={session} /> */}
          </div>
        </NavbarMenu>
      </NavbarContent>
    </HeroUINavbar>
  );
};
