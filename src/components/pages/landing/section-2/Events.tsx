import SectionHeader from "@/components/shared/SectionHeader";
import CalendarSvg from "./CalendarSvg";

export default function Events() {
  return (
    <section className="flex flex-col items-center justify-center bg-[#050222] py-28">
      <div className="h-[85%] w-[87%] sm:w-[80%]">
        <SectionHeader
          badgeIcon={<CalendarSvg />}
          title="Educative events,"
          highlight="Redesigned"
          description="Creating a more globally accessible way of participating, organizing, and managing events. All through one Platform."
        />

        <div className="grid min-h-screen grid-cols-1 gap-5 text-white md:grid-cols-3">
          <div className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-md">
            Card 1
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-md">
            Card 2
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-md">
            Card 3
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-md md:row-span-2">
            Tall Card
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-md md:col-span-2">
            Wide Card
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-md">
            Card 6
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-md">
            Card 7
          </div>
        </div>
      </div>
    </section>
  );
}
