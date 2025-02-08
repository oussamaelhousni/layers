import React from "react";

function TrySection() {
  return (
    <section className="">
      <div className="container mx-auto px-4 max-w-[1000px] py-32 overflow-x-hidden">
        <div className="flex flex-none gap-8">
          {Array.from({ length: 8 }).map((_, index) => {
            return (
              <div
                className="text-nowrap flex items-center gap-4 text-4xl md:text-6xl lg:text-7xl"
                key={index.toString() + "try"}
              >
                <span className="text-primary">&#10040;</span>
                <span className="font-semibold">Try it for free</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TrySection;
