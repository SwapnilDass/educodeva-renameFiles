import SectionHeader from "@/components/shared/SectionHeader";
import CalendarSvg from "./CalendarSvg";

export default function Events() {
  return (
    <section className="flex flex-col items-center justify-center bg-[#050222] py-40">
      <div className="h-[85%] w-[80%]">
        <SectionHeader
          badgeIcon={<CalendarSvg />}
          title="Educative events,"
          highlight="Redesigned"
          description="Creating a more globally accessible way of participating, organizing, and managing events. All through one Platform."
        />

        <div className="columns-1 gap-x-[1.375rem] space-y-[1.625rem] md:columns-2 lg:columns-3">
          {/* Column 1 */}
          <Feature1 />
          <Feature4 />
          <Feature7 />

          {/* Column 2 */}
          <Feature2 />
          <Feature5 />
          <Feature8 />

          {/* Column3 */}
          <Feature3 />
          <Feature6 />
          <Feature9 />
        </div>

        <div className="mt-32">
          <h2 className="text-center text-lg font-medium sm:text-xl md:text-[1.45rem] lg:text-[1.7rem]">
            Think it's too good to be true?{" "}
            <span className="bg-gradient-to-b from-[#ED066B] from-20% to-white to-[92%] bg-clip-text text-transparent">
              Check it out!
            </span>
          </h2>

          <TestimonialCard />
        </div>
      </div>
    </section>
  );
}

function Feature1() {
  return (
    <img src="/landing/feature1.png" alt="Feature 1" className="max-w-full" />
  );
}

function Feature2() {
  return (
    <img
      src="/landing/feature2.png"
      alt="codeva-sidebar"
      className="max-w-full"
    />
  );
}

function Feature3() {
  return (
    <img src="/landing/feature3.png" alt="Feature 3" className="max-w-full" />
  );
}

function Feature4() {
  return (
    <img src="/landing/feature4.png" alt="Feature 4" className="max-w-full" />
  );
}

function Feature5() {
  return (
    <img src="/landing/feature5.png" alt="Feature 5" className="max-w-full" />
  );
}

function Feature7() {
  return (
    <img src="/landing/feature7.png" alt="Feature 7" className="max-w-full" />
  );
}

function Feature8() {
  return (
    <img src="/landing/feature8.png" alt="Feature 8" className="max-w-full" />
  );
}

function Feature6() {
  return (
    <img src="/landing/feature6.png" alt="Feature 6" className="max-w-full" />
  );
}

function Feature9() {
  return (
    <img src="/landing/feature9.png" alt="Feature 9" className="max-w-full" />
  );
}

function TestimonialCard() {
  return (
    <div className="relative mx-auto mt-12 flex max-w-3xl items-center justify-center">
      {/* Background Cards */}
      <div
        className="absolute h-full w-[75%] rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-lg"
        style={{ transform: "translateY(-16px) scale(0.90)", zIndex: 10 }}
      />
      <div
        className="absolute h-full w-[80%] rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-lg"
        style={{ transform: "translateY(-8px) scale(0.95)", zIndex: 20 }}
      />

      {/* Front Card */}
      <div className="relative z-30 w-full max-w-2xl rounded-2xl bg-gradient-to-b from-white/20 to-white/5 p-6 shadow-lg backdrop-blur-lg">
        <div className="flex items-start gap-4">
          <img
            src="/landing/ismael.png"
            alt="Ismael's avatar"
            className="h-12 w-12 rounded-full border-2 border-white/20"
          />
          <div className="flex-1">
            <div className="flex items-baseline gap-2">
              <h3 className="font-semibold text-white">Ismael</h3>
              <p className="text-xs text-white/60">4:19 PM</p>
            </div>
            <p className="mt-1 text-white/80">
              We have dedicated an entire tab on the user Dashboard to creating
              and managing events, check our socials to see more...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
