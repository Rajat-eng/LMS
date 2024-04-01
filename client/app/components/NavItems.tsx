"use client";
import React, { useEffect, useState } from "react";
import { cn } from "../utils/Classes";
import Link from "next/link";
interface Props {
  activeItem: number;
  isMobile: boolean;
}

export const navItemsData = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Courses",
    link: "/courses",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Policy",
    link: "/policy",
  },
  {
    name: "FAQ",
    link: "/faq",
  },
];

const NavItems: React.FC<Props> = ({ activeItem, isMobile }) => {
  return (
    <>
      <div className="flex items-center gap-6">
        {navItemsData.map((item, index) => {
          return (
            <Link
              key={index}
              href={`${item.link}`}
              className={cn(
                `hidden sm:block sm:text-base md:text-lg font-[500] text-black dark:text-white hover:border-b-2 hover:border-pink-500`,
                {
                  hidden: isMobile,
                  "dark:text-purple-800 ": activeItem === index,
                }
              )}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      {isMobile && (
        <>
          <div className="sm:hidden">
            <div className="w-full text-center h-auto py-6 flex flex-col gap-16 my-[50%] ">
              {navItemsData.map((item, index) => {
                return (
                  <Link href="/" passHref key={index}>
                    <span
                      className={cn(
                        ` sm:flex flex-col sm:text-base md:text-lg font-[500] text-black dark:text-white hover:border-b-2 hover:border-pink-500`,
                        {
                          "dark:text-purple-800 ": activeItem === index,
                        }
                      )}
                    >
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NavItems;
