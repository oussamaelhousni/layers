"use client";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Button from "./button";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/utils/cn";

import { AnimatePresence, motion } from "motion/react";
const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <header className="p-4 sticky top-0 left-0 w-full z-[100]">
      <div className="border border-zinc-500 rounded-[20px] md:rounded-full px-4 py-1.5 max-w-[1000px] mx-auto  backdrop-blur-md">
        <div className="flex items-center justify-between py-1">
          <Image src={logo} className=" -ms-2 h-9" alt={"Logo"} />

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(({ label, href }) => {
              return (
                <Link
                  href={href}
                  key={href}
                  className="font-semibold text-zinc-300 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          <div className="hidden sm:flex items-center gap-4">
            <Button variant={"outline"}>Log in</Button>
            <Button variant={"primary"}>Sign up</Button>
          </div>
          <button
            className="block sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line
                x1="3"
                y1="6"
                x2="21"
                y2="6"
                className={cn(
                  "origin-left transition",
                  isOpen && "origin-left rotate-45 -translate-y-1"
                )}
              ></line>
              <line
                x1="3"
                y1="12"
                x2="21"
                y2="12"
                className={cn(isOpen && "opacity-0")}
              ></line>
              <line
                x1="3"
                y1="18"
                x2="21"
                y2="18"
                className={cn(
                  "origin-left transition",
                  isOpen && "origin-left -rotate-45 translate-y-1"
                )}
              ></line>
            </svg>
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="overflow-hidden px-4 sm:hidden"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
            >
              <ul className="flex flex-col gap-4 items-center py-4">
                {navLinks.map(({ label, href }) => {
                  return (
                    <li>
                      <Link
                        href={href}
                        key={href + "mobnav"}
                        className="font-semibold text-zinc-300 hover:text-white transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
                <Button variant={"outline"}>Log in</Button>
                <Button variant={"primary"}>Sign up</Button>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Navbar;
