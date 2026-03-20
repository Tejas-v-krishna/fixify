import { Hero } from "@/components/home/Hero";
import { CommonProblems } from "@/components/home/CommonProblems";
import { MajorAppliances } from "@/components/home/MajorAppliances";
import { FindNearMe } from "@/components/home/FindNearMe";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Resources } from "@/components/home/Resources";
import { FAQ } from "@/components/home/FAQ";
import { NeighborlySection } from "@/components/home/NeighborlySection";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <CommonProblems />
      <MajorAppliances />
      <FindNearMe />
      <WhyChooseUs />
      <Resources />
      <FAQ />
      <NeighborlySection />
    </div>
  );
}
