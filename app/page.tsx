import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import TestiSection from "@/components/TestiSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
     <HeroSection/>
     <Features/>
     <TestiSection/>
     <PricingSection/>
    </>
  );
}
