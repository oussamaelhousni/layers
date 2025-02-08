import Companies from "@/sections/companies";
import Hero from "@/sections/hero";
import Introduction from "@/sections/introduction";
import Features from "@/sections/features";
import Intergrations from "@/sections/intergrations";
import Faqs from "@/sections/faq";
import TrySection from "@/sections/try-section";
import Footer from "@/sections/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <Introduction />
      <Features />
      <Intergrations />
      <Faqs />
      <TrySection />
      <Footer />
    </main>
  );
}
