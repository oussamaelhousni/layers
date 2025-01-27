import Companies from "@/sections/companies";
import Hero from "@/sections/hero";
import Introduction from "@/sections/introduction";
import Features from "@/sections/features";
import Intergrations from "@/sections/intergrations";

export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <Introduction />
      <Features />
      <Intergrations />
    </main>
  );
}
