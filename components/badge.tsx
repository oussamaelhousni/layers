import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import React from "react";
import { TbNorthStar } from "react-icons/tb";
import { BsStars } from "react-icons/bs";

const badgeCva = cva(
  "border-2 px-2 py-0.5 rounded-full w-fit flex items-center gap-2 text-xs font-semibold",
  {
    variants: {
      variant: {
        primary: "border-primary text-primary",
        colorful:
          "bg-gradient-to-r from-violet-400 to-pink-500 text-black border border-zinc-300",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);
function Badge({
  text,
  variant,
  className,
}: {
  text: string;
  variant?: "primary" | "colorful";
  className?: string;
}) {
  return (
    <div className={cn(badgeCva({ variant }), className)}>
      {variant === "primary" ? (
        <TbNorthStar className="-ms-1" />
      ) : (
        <BsStars className="text-yellow-300 font" />
      )}{" "}
      {text}
    </div>
  );
}

export default Badge;
