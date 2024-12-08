import React from "react";
import Image from "next/image";
import quantum from "@/assets/images/quantum.svg";
import twice from "@/assets/images/twice.svg";
import echoValley from "@/assets/images/echo-valley.svg";
import acmeCorp from "@/assets/images/acme-corp.svg";
import apex from "@/assets/images/apex.svg";

function Companies() {
  return (
    <section className="py-[2rem] md:py-[5rem] md:mt-24">
      <div className="container relative text-center max-w-[1000px] mx-auto overflow-hidden">
        <p className="description">Already chosen by these market leaders</p>

        <div className="relative">
          <div className="h-full w-1/4 shrink-0 absolute left-0 bg-gradient-to-r from-zinc-950 to-transparent z-10"></div>
          <div className="h-full w-1/4 shrink-0 absolute right-0 bg-gradient-to-r to-zinc-950 from-transparent z-10"></div>
          <div className="flex items-center gap-8  py-8 relative">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Companies;
