import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

type ButtonVariant = {
  variant?: "primary" | "outline";
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariant;

const buttonCva = cva(
  "px-4 py-2 rounded-full font-semibold text-base transition-colors duration-300",
  {
    variants: {
      variant: {
        primary: "bg-primary text-zinc-800 hover:bg-opacity-90",
        outline:
          "bg-transparent border-white border text-white hover:text-zinc-900 hover:bg-white",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const Button = ({ className, variant, ...props }: ButtonProps) => {
  return (
    <button {...props} className={cn(buttonCva({ variant }), className)} />
  );
};

export default Button;
