import SectionIntro from './SectionIntro';
import Feature1 from './Feature1';
import Feature2 from './Feature2';
import Feature3 from './Feature3';
import Feature4 from './Feature4';
import Feature5 from './Feature5';
import Branding from './Branding';

export default function Learning() {
  return (
    <section
      className=" bg-[#050222] pt-0 pb-10 px-4 md:px-8 lg:px-12 xl:px-[64px] 2xl:px-[80px] font-inter"
    >

      <SectionIntro />

      {/* Feature 1 & 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6 mt-0 md:mt-0">
        <Feature1 />
        <Feature2 />
      </div>

      {/* Feature 3, Branding + Feature 4, Feature 5 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6 mt-2 md:mt-3">
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
