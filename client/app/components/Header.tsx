"use client";
import React, { useEffect, useState } from "react";
import { cn } from "../utils/Classes";
import CustomModal from "../utils/CustomModal";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Verification from "../components/Verification";
import Link from "next/link";
import NavItems from "./NavItems";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
  route: string;
  setRoute: (route: string) => void;
}
const Header: React.FC<Props> = ({
  activeItem,
  open,
  setOpen,
  route,
  setRoute,
}) => {
  const [active, setActive] = useState(true);
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.id === "screen") {
      setOpenSidebar(false);
    }
  };

  return (
    <div className="w-full relative">
      <div
        className={cn(
          "sticky top-0 left-0 w-full h-[80px] z-[80] border-b-1 border-white",
          {
            "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black  border-b dark:border-[#ffffff1c] shadow-xl transition duration-500":
              active,
            "dispaly:hidden": !active,
          }
        )}
      >
        <div className="w-[95%] sm:w-[92%] m-auto py-2 h-full">
          <div className="w-full h-auto flex items-center justify-between p-2 gap-12">
            {/* Logo */}

            <Link
              href={"/"}
              className={`text-lg font-[500] text-black dark:text-yellow-400 text-nowrap`}
            >
              E Learning
            </Link>

            {/* Links */}
            <div className="flex items-center lg:gap-8 sm:gap-2 xs:gap-8 justify-between min-w-[100px]">
              <NavItems isMobile={false} activeItem={activeItem} />
              <div className="sm:hidden">
                <HiOutlineMenuAlt3
                  size={25}
                  className="dark:text-white cursor-pointer text-black"
                  onClick={() => setOpenSidebar(true)}
                />
              </div>
              <HiOutlineUserCircle
                size={25}
                className="dark:text-white cursor-pointer text-black"
                onClick={() => setOpen(true)}
              />
            </div>
          </div>
        </div>

        {openSidebar && (
          <>
            <div
              className="relative w-full h-screen inset-0 dark:bg-[unset] bg-[#00000024] transition duration-1000"
              onClick={handleClose}
              id="screen"
            >
              <div className="fixed w-[70%] z-[999999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 right-0 top-0 ">
                <NavItems isMobile={true} activeItem={activeItem} />
              </div>
            </div>
          </>
        )}
      </div>
      {route === "Sign-Up" && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              Component={SignUp}
            />
          )}
        </>
      )}
      {route === "Login" && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              Component={Login}
            />
          )}
        </>
      )}

      {route === "Verification" && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              Component={Verification}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Header;
