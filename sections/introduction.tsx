import Badge from "@/components/badge";
import React from "react";
const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

function Introduction() {
  return (
    <section className="py-[5rem]">
      <div className="container px-4 mx-auto max-w-[1000px] flex flex-col items-center gap-8">
        <Badge text={"INTRODUCTING LAYERS"} variant="primary" />

        <p className="text-4xl sm:text-5xl  max-w-4xl text-center leading-[130%] lg:leading-[140%] font-medium">
          <span className="text-white">
            Your creative process deserves better.&nbsp;
          </span>
          <span className="text-zinc-600">{text}</span>
          <br />
          <span className="text-primary">That's why we built layers</span>
        </p>
      </div>
    </section>
  );
}

export default Introduction;
