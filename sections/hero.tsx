import Badge from "@/components/badge";
import Button from "@/components/button";
import React from "react";
import Image from "next/image";
import design1 from "@/assets/images/design-example-1.png";
import design2 from "@/assets/images/design-example-2.png";
import cursor1 from "@/assets/images/cursor-you.svg";
function Hero() {
  return (
    <section className="py-[8rem] min-h-[48rem] overflow-x-hidden">
      <div className="container px-4 mx-auto relative">
        <Image
          src={design1}
          alt="design image 1"
          className="absolute hidden lg:block top-32 lg:-left-[8rem] xl:left-[4rem]"
        />
        <Image
          src={design2}
          alt="design image 2"
          className="w-[400px] absolute hidden lg:block -top-16 lg:-right-[20rem] xl:-right-[0rem]"
        />

        <Image
          src={cursor1}
          alt="cursor you"
          className="absolute  hidden lg:block left-[290px] xl:left-[500px] top-[420px]"
        />
        <Image
          src={cursor1}
          alt="cursor you"
          className="absolute hidden lg:block right-[290px] xl:right-[450px] top-[0]"
        />
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

          <p className="text-center font-semibold text-base mt-8 text-zinc-400 max-w-xl mx-auto">
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
