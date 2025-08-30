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
    <section className="flex flex-col items-center justify-center bg-[#050222] py-40">
      <div className="h-[85%] w-[80%]">
        <SectionHeader
          badgeIcon={<MapIcon />}
          title="Learn new skills"
          highlight="faster, together."
          description="A new way to gather, expand, and put to practice your skills"
        />

        <div className="space-y-[1.375rem]">
          <div className="mt-0 grid grid-cols-1 gap-4 md:mt-0 md:grid-cols-2 md:gap-5 lg:gap-6">
            <Feature1 />
            <Feature2 />
          </div>

          <div className="columns-1 gap-x-[1.375rem] space-y-[1.625rem] md:columns-2 lg:columns-3">
            <Feature3 />
            <Branding />
            <Feature4 />
            <Feature5 />
          </div>
        </div>
      </div>
    </section>
  );
}
