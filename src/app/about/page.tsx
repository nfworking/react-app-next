import { Banner } from "@/components/about/Banner";
import { Navbar } from "@/components/about/Navbar";
import { Hero } from "@/components/about/Hero";
import { LogoTicker } from "@/components/about/LogoTicker";
import { Features } from "@/components/about/Features";
import { ProductShowcase } from "@/components/about/ProductShowcase";
import { FAQs } from "@/components/about/FAQs";
import { CallToAction } from "@/components/about/CallToAction";
import { Footer } from "@/components/about/Footer";

export default function about() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <FAQs />
      <CallToAction />
      <Footer />
    </>
  );
}
