import { Hero } from "@/components/home/Hero";
import { Brands } from "@/components/home/Brands";
import { Services } from "@/components/home/Services"; // The Labs
import { QualityPromise } from "@/components/home/QualityPromise";
import { Sustainability } from "@/components/home/Sustainability";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { Membership } from "@/components/home/Membership";
import { Hygiene } from "@/components/home/Hygiene";
import { ControlDeck } from "@/components/home/ControlDeck";
import { Business } from "@/components/home/Business";
import { SmartSearch } from "@/components/home/SmartSearch";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { CallToAction } from "@/components/home/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Services />
      <QualityPromise />
      <Sustainability />
      <BeforeAfter />
      <Membership />
      <Hygiene />
      <ControlDeck />
      <Business />
      <SmartSearch />
      <Testimonials />
      <FAQ />
      <CallToAction />
    </>
  );
}
