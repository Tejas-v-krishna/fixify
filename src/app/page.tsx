import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { MajorAppliances } from "@/components/home/MajorAppliances";
import { HowItWorks } from "@/components/home/HowItWorks";
import { MapFeature } from "@/components/home/MapFeature";
import { GofexCommunity } from "@/components/home/GofexCommunity";
import { InsuranceSection } from "@/components/home/InsuranceSection";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { CallToAction } from "@/components/home/CallToAction";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <TrustStrip />
      <ProblemSolution />
      <MajorAppliances />
      <HowItWorks />
      <MapFeature />
      <GofexCommunity />
      <InsuranceSection />
      <FeatureHighlights />
      <Testimonials />
      <FAQ />
      <CallToAction />
    </div>
  );
}
