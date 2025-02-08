"use client";
import React from "react";
import Image from "next/image";
import quantum from "@/assets/images/quantum.svg";
import twice from "@/assets/images/twice.svg";
import echoValley from "@/assets/images/echo-valley.svg";
import acmeCorp from "@/assets/images/acme-corp.svg";
import apex from "@/assets/images/apex.svg";
import { motion } from "motion/react";

function Companies() {
  return (
    <section className="pt-[8rem] pb-[4rem] mt-24">
      <div className="container relative text-center max-w-[1000px] mx-auto overflow-hidden">
        <p className="description text-center">
          Already chosen by these market leaders
        </p>
        <div className="h-full w-1/4 shrink-0 absolute left-0 bg-gradient-to-r from-zinc-950 to-transparent z-10"></div>
        <div className="h-full w-1/4 shrink-0 absolute right-0 bg-gradient-to-r to-zinc-950 from-transparent z-10"></div>

        <div className="w-full flex flex-none">
          <motion.div
            className="flex flex-none items-center gap-8 py-8 pr-8"
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
              bounce: 0,
            }}
          >
            <Image src={quantum} className="h-8 sm:h-10 w-auto" alt="" />
            <Image src={twice} className="h-8 sm:h-10 w-auto" alt="" />
            <Image src={echoValley} className="h-8 sm:h-10 w-auto" alt="" />
            <Image src={acmeCorp} className="h-8 sm:h-10 w-auto" alt="" />
            <Image src={apex} className="h-8 sm:h-10 w-auto" alt="" />
            <Image src={quantum} className="h-8 sm:h-10 w-auto" alt="" />
            <Image src={twice} className="h-8 sm:h-10 w-auto" alt="" />
            <Image src={echoValley} className="h-8 sm:h-10 w-auto" alt="" />
            <Image src={acmeCorp} className="h-8 sm:h-10 w-auto" alt="" />
            <Image src={apex} className="h-8 sm:h-10 w-auto" alt="" />

            <Image src={quantum} className="h-8 sm:h-10 w-auto" alt="" />
            <Image src={twice} className="h-8 sm:h-10 w-auto" alt="" />
            <Image src={echoValley} className="h-8 sm:h-10 w-auto" alt="" />
            <Image src={acmeCorp} className="h-8 sm:h-10 w-auto" alt="" />
            <Image src={apex} className="h-8 sm:h-10 w-auto" alt="" />
            <Image src={quantum} className="h-8 sm:h-10 w-auto" alt="" />
            <Image src={twice} className="h-8 sm:h-10 w-auto" alt="" />
            <Image src={echoValley} className="h-8 sm:h-10 w-auto" alt="" />
            <Image src={acmeCorp} className="h-8 sm:h-10 w-auto" alt="" />
            <Image src={apex} className="h-8 sm:h-10 w-auto" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Companies;
