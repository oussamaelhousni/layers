import Badge from "@/components/badge";
import React from "react";
import Image from "next/image";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { MdStars } from "react-icons/md";

import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar3 from "@/assets/images/avatar-owen-garcia.jpg";

const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

function Features() {
  return (
    <section className="py-[5rem]">
      <div className="container mx-auto px-4 max-w-[1000px] flex flex-col items-center">
        <Badge text="FEATURES" variant="primary" />
        <h2 className="text-4xl font-semibold text-center text-white mt-8">
          Where power meets <span className="text-primary">simplicity</span>
        </h2>

        <div className="flex justify-center flex-wrap lg:flex-nowrap gap-6 mt-8">
          <div className="border border-zinc-700 px-6 py-8 rounded-2xl  bg-zinc-900/90 flex flex-col gap-6 mt-8">
            <div className="flex justify-center items-center">
              <Image
                src={avatar1}
                alt="avatar 1"
                className="w-14 aspect-square rounded-full relative outline outline-blue-500  border-2 border-black z-30"
              />
              <Image
                src={avatar2}
                alt="avatar 2"
                className="w-14 aspect-square rounded-full relative outline outline-violet-500  border-2 border-black -left-2 z-20"
              />
              <Image
                src={avatar3}
                alt="avatar 3"
                className="w-14 aspect-square rounded-full relative outline outline-orange-500  border-2 border-black -left-4 z-10"
              />

              <div className="relative w-12 h-12 aspect-square bg-zinc-700 rounded-full -left-6 flex justify-center items-center">
                <IoEllipsisHorizontal size={20} />
              </div>
            </div>
            <div className="w-[90%]">
              <h3 className="text-2xl">Real-time Collaboration</h3>
              <p className="text-sm text-zinc-400 mt-2">
                Work toghter seamlessly with conflict-free team editing
              </p>
            </div>
          </div>

          <div className="border border-zinc-700 px-6 py-8 rounded-2xl  bg-zinc-900/90 flex flex-col gap-6 mt-8">
            <div className="flex justify-center items-center">
              <h3 className="text-3xl font-bold text-center text-zinc-500">
                We have achieved
                <span className="block bg-gradient-to-r from-violet-500 to-pink-400 bg-clip-text text-transparent">
                  incredicle
                </span>
                growth this year
              </h3>
            </div>
            <div className="w-[90%]">
              <h3 className="text-2xl">Interactive Prototyping</h3>
              <p className="text-sm text-zinc-400 mt-2">
                Enage your clinets with prototypes that react to user actions
              </p>
            </div>
          </div>

          <div className="border border-zinc-700 px-6 py-8 rounded-2xl  bg-zinc-900/90 flex flex-col gap-6 mt-8">
            <div className="flex justify-center items-center gap-4 flex-1">
              <div className="px-4 py-2 bg-zinc-200 text-zinc-900 font-semibold rounded-xl">
                shift
              </div>

              <div className="px-4 py-2 bg-zinc-200 text-zinc-900 font-semibold rounded-xl">
                alt
              </div>

              <div className="px-4 py-2 bg-zinc-200 text-zinc-900 font-semibold rounded-xl">
                C
              </div>
            </div>
            <div className="w-[90%]">
              <h3 className="text-2xl">Interactive Prototyping</h3>
              <p className="text-sm text-zinc-400 mt-2">
                Enage your clinets with prototypes that react to user actions
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center gap-6 flex-wrap mt-12">
          {features.map((feature) => {
            return (
              <div
                key={feature}
                className="border px-3 py-1.5 rounded-2xl flex gap-2 items-center shrink-0 bg-zinc-900 border-zinc-500 text-primary"
              >
                <MdStars size={20} />
                <span className="text-white font-semibold">{feature}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
