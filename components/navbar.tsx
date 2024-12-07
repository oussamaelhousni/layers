import { cva } from "class-variance-authority";
import Image from "next/image";
import menu from "@/assets/images/menu.svg";
import logo from "@/assets/images/logo.svg";
import Button from "./button";
import Link from "next/link";
const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

function Navbar() {
  return (
    <header className="p-4 sticky top-0 left-0 w-full">
      <div className="flex items-center justify-between border border-zinc-500 rounded-full px-2 py-1.5 max-w-[1000px] mx-auto backdrop-blur-md">
        <Image src={logo} className=" -ms-2 h-9" alt={"Logo"} />

        <nav className="hidden lg:flex items-center gap-6 ">
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
        <button className="block sm:hidden">
          <Image src={menu} alt="menu icon" className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
