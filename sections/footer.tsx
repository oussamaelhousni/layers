import React from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

function Footer() {
  return (
    <footer>
      <div className="container max-w-[1000px] mx-auto px-4 py-8">
        <div className="flex items-center justify-between flex-col sm:flex-row gap-8">
          <Image src={logo} alt="layers logo" className="w-34" />

          <nav className="flex items-center gap-6 ">
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
