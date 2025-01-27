import Badge from "@/components/badge";
import React from "react";
import Image from "next/image";

const integrations = [
  {
    name: "Figma",
    icon: "figma-logo.svg",
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: "notion-logo.svg",
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: "slack-logo.svg",
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: "relume-logo.svg",
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Framer",
    icon: "framer-logo.svg",
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "GitHub",
    icon: "github-logo.svg",
    description: "GitHub is the leading platform for code collaboration.",
  },
];

function Intergrations() {
  return (
    <section className="py-[5rem]">
      <div className="container max-w-[1000px] mx-auto px-4 flex flex-col md:flex-row md:gap-4 md:items-center">
        <div className="flex-1 shrink-0">
          <Badge text={"INTEGRATIONS"} variant="primary" className="mx-auto" />
          <h2 className="text-4xl font-semibold text-left text-white mt-8">
            Plays well with <span className="text-primary">others</span>
          </h2>

          <p className="description mt-4">
            layers seamlessly connects with favorite tools, making it easy to
            plug into any workflow and collaborate across platforms
          </p>
        </div>

        <div className="max-h-[400px] h-[400px] mt-8 overflow-y-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] flex-1 grid md:grid-cols-2 gap-4">
          <IntergrationColumn intergrations={integrations} />
          <IntergrationColumn intergrations={integrations.slice().reverse()} />
        </div>
      </div>
    </section>
  );
}

function Integration({
  name,
  description,
  icon,
}: {
  name: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="p-4 py-6 border border-neutral-600 rounded-2xl flex flex-col gap-4 items-center text-center">
      <Image src={`/${icon}`} alt={name} width={100} height={100} />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="description">{description}</p>
    </div>
  );
}

const IntergrationColumn = ({
  intergrations,
}: {
  intergrations: typeof integrations;
}) => {
  return (
    <div className="flex flex-col gap-4">
      {intergrations.map((el) => {
        return <Integration {...el} key={el.name} />;
      })}
    </div>
  );
};
export default Intergrations;
