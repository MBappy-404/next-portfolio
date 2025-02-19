/* eslint-disable prettier/prettier */
/* eslint-disable padding-line-between-statements */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
"use client";
import Link from "next/link";
import { ThemeSwitch } from "../theme-switch";
import { usePathname } from "next/navigation";
import Image from "next/image";
type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};
const Header = ({ session }: { session: UserProps | null }) => {
  const pathname = usePathname();

  return (
    <header className="z-50  border-b border-gray-200 dark:border-gray-700   bg-white dark:bg-gray-900 sticky top-0 pt-2">
      <div className="flex flex-wrap items-center w-full relative tracking-wide">
        <div className="flex items-center gap-y-6  z-50 w-full pb-2">
          <div className="flex items-center gap-4 w-full px-6 bg-white dark:bg-gray-900  min-h-[48px] sm:mr-20 rounded-md outline-none border-none">
            <h2 className=" hidden md:block text-sm md:text-base uppercase">
              {pathname.split("/")[2]}
            </h2>
          </div>

          <div className="flex items-center justify-end gap-6 ml-auto">
            <div className="flex items-center space-x-6">
              <Link
                href="/"
                className="w-9 h-[38px] flex items-center justify-center rounded-lg relative dark:bg-blue-950 bg-blue-200 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px] dark:fill-gray-300 fill-gray-800"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19.56 23.253H4.44a4.051 4.051 0 0 1-4.05-4.05v-9.115c0-1.317.648-2.56 1.728-3.315l7.56-5.292a4.062 4.062 0 0 1 4.644 0l7.56 5.292a4.056 4.056 0 0 1 1.728 3.315v9.115a4.051 4.051 0 0 1-4.05 4.05zM12 2.366a2.45 2.45 0 0 0-1.393.443l-7.56 5.292a2.433 2.433 0 0 0-1.037 1.987v9.115c0 1.34 1.09 2.43 2.43 2.43h15.12c1.34 0 2.43-1.09 2.43-2.43v-9.115c0-.788-.389-1.533-1.037-1.987l-7.56-5.292A2.438 2.438 0 0 0 12 2.377z"
                    data-original="#000000"
                  />
                  <path
                    d="M16.32 23.253H7.68a.816.816 0 0 1-.81-.81v-5.4c0-2.83 2.3-5.13 5.13-5.13s5.13 2.3 5.13 5.13v5.4c0 .443-.367.81-.81.81zm-7.83-1.62h7.02v-4.59c0-1.933-1.577-3.51-3.51-3.51s-3.51 1.577-3.51 3.51z"
                    data-original="#000000"
                  />
                </svg>
              </Link>

              <div className="w-9 h-[38px] flex items-center justify-center rounded-xl relative  bg-gray-100 dark:bg-gray-800   cursor-pointer">
                <ThemeSwitch />
              </div>
            </div>

            <div className="w-1 h-10 border-l border-gray-200 dark:border-gray-600 "></div>
            <div className="dropdown-menu relative flex shrink-0 group">
              <div className="flex items-center gap-4">
                <p className="dark:text-gray-200 text-gray-800  text-sm hidden md:block">
                  {session?.user?.name}
                </p>
                {session?.user?.image && (
                  <Image
                    src={session?.user?.image}
                    width={100}
                    height={100}
                    alt="profile-pic"
                    className="w-[38px] h-[38px] rounded-full border-2 border-gray-300 cursor-pointer"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
