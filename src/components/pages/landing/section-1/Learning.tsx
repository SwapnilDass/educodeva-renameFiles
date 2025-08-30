import SectionHeader from "@/components/shared/SectionHeader";
import Branding from "./Branding";
import Feature1 from "./Feature1";
import Feature2 from "./Feature2";
import Feature3 from "./Feature3";
import Feature4 from "./Feature4";
import Feature5 from "./Feature5";
import MapIcon from "./MapIcon";

export default function Learning() {
  return (
    <section className="font-inter bg-[#050222] px-4 pb-10 pt-5 md:px-8 lg:px-12 xl:px-[64px] 2xl:px-[80px]">
      <SectionHeader
        badgeIcon={<MapIcon />}
        title="Learn new skills"
        highlight="faster, together."
        description="A new way to gather, expand, and put to practice your skills"
      />

      {/* Feature 1 & 2 */}
      <div className="mt-0 grid grid-cols-1 gap-4 md:mt-0 md:grid-cols-2 md:gap-5 lg:gap-6">
        <Feature1 />
        <Feature2 />
      </div>

      {/* Feature 3, Branding + Feature 4, Feature 5 */}
      <div className="mt-2 grid grid-cols-1 gap-4 md:mt-3 md:grid-cols-3 md:gap-5 lg:gap-6">
        <Feature3 />

        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
          <Branding />
          <Feature4 />
        </div>

        <Feature5 />
      </div>
    </section>
  );
}
