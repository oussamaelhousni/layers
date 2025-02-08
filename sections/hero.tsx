"use client";
import Badge from "@/components/badge";
import Button from "@/components/button";
import React, { useEffect } from "react";
import Image from "next/image";
import design1 from "@/assets/images/design-example-1.png";
import design2 from "@/assets/images/design-example-2.png";
import cursor1 from "@/assets/images/cursor-you.svg";
import { motion, useAnimate } from "motion/react";
function Hero() {
  const [leftImageScope, leftImageAnimate] = useAnimate();
  const [leftPointereScope, leftPointerAnimate] = useAnimate();
  const [rightImageScope, rightImageAnimate] = useAnimate();
  const [rightPointereScope, rightPointerAnimate] = useAnimate();
  useEffect(() => {
    leftImageAnimate([
      [leftImageScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftImageScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    leftPointerAnimate([
      [leftPointereScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointereScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
      [
        leftPointereScope.current,
        { y: [0, 30, 0], x: 300 },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);

    rightImageAnimate([
      [rightImageScope.current, { opacity: 1 }, { duration: 0.5 }],
      [rightImageScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    rightPointerAnimate([
      [rightPointereScope.current, { opacity: 1 }, { duration: 0.5 }],
      [rightPointereScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
      [
        rightPointereScope.current,
        { y: [0, 30, 0], x: -200 },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);
  }, []);
  return (
    <section className="py-[2rem] pt-[5rem] sm:md:py-[5rem]">
      <div className="container px-4 mx-auto relative ">
        <motion.div
          className="absolute hidden lg:block top-32 lg:-left-[8rem] xl:left-[0rem]"
          ref={leftImageScope}
          initial={{ opacity: 0, y: -100, x: -100 }}
          drag
          dragSnapToOrigin
        >
          <Image src={design1} alt="design image 1" draggable="false" />
        </motion.div>
        <motion.div
          className="w-[400px] absolute hidden lg:block -top-16 lg:-right-[20rem] xl:-right-[8rem]"
          ref={rightImageScope}
          initial={{ x: 150, y: 50, opacity: 0 }}
          drag
          dragSnapToOrigin
        >
          <Image src={design2} alt="design image 2" draggable="false" />
        </motion.div>

        <motion.div
          className="absolute  hidden lg:block md:left-[100px] xl:left-[200px]  top-[420px]"
          initial={{ opacity: 0, y: -100, x: -100 }}
          ref={leftPointereScope}
        >
          <Image src={cursor1} alt="cursor you" draggable="false" />
        </motion.div>
        <motion.div
          className="absolute hidden lg:block right-0 xl:right-[150px] top-[0]"
          ref={rightPointereScope}
          initial={{ x: 150, y: 50, opacity: 0 }}
        >
          <Image src={cursor1} alt="cursor you" />
        </motion.div>
        <Badge
          text="$7.5M seed round raised"
          variant={"colorful"}
          className="mx-auto"
        />

        <div className="w-full mt-8 px-2">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center leading-[120%]">
            Impactfull design,
            <br /> created effortlessly
          </h1>

          <p className="text-center description mt-8 max-w-xl mx-auto">
            Design tools shouldn't slow you down. Layers combines powerful
            features with an intuitive interface that keeps you in your creative
            flow
          </p>
        </div>

        <form
          action="#"
          className="flex border border-zinc-500 px-1 ps-4 py-1 rounded-full mx-auto mt-8 max-w-sm w-full"
        >
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-transparent outline-none border-none flex-1"
          />
          <Button className="py-1">Sign up</Button>
        </form>
      </div>
    </section>
  );
}

export default Hero;
