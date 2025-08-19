import SectionHeader from "@/components/shared/SectionHeader";
import CalendarSvg from "./CalendarSvg";

export default function Events() {
  return (
    <section className="flex flex-col items-center justify-center bg-[#050222] py-28">
      <div className="h-[85%] w-[80%]">
        <SectionHeader
          badgeIcon={<CalendarSvg />}
          title="Educative events,"
          highlight="Redesigned"
          description="Creating a more globally accessible way of participating, organizing, and managing events. All through one Platform."
        />

        <div className="grid min-h-screen grid-cols-1 gap-5 md:grid-cols-3">
          {/* Event Preview */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-md backdrop-blur-md">
            <div className="mb-3 h-40 w-full rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-800"></div>
            <div className="flex justify-between text-sm text-gray-300">
              <span>12 Dec, 2024</span>
              <span>8:00 PM</span>
            </div>
            <h3 className="mt-2 text-lg font-semibold">Codeva Launch Event</h3>
            <p className="text-sm text-gray-400">Networking · Tech</p>
            <button className="mt-3 w-full rounded-xl bg-purple-600 py-2 text-sm font-semibold hover:bg-purple-700">
              Join Event
            </button>
          </div>

          {/* Organizer Menu */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-md backdrop-blur-md">
            <h3 className="mb-3 text-lg font-semibold">Codeva</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Dashboard</li>
              <li>Analytics</li>
              <li>Members</li>
              <li>Invoices</li>
              <li>Events</li>
              <li>Settings</li>
            </ul>
          </div>

          {/* Organizer CTA */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-md backdrop-blur-md">
            <h3 className="mb-2 text-lg font-semibold">Organize your own Events</h3>
            <p className="text-sm text-gray-300">
              Bring your ideas to reality. Host, share, and grow your
              professional profile with our simplified event tools.
            </p>
            <button className="mt-4 w-full rounded-xl bg-pink-600 py-2 text-sm font-semibold hover:bg-pink-700">
              Become an Organizer
            </button>
          </div>

          {/* Profile Preview (Tall card w/ phone img) */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-md backdrop-blur-md md:row-span-2">
            <img
              src="/brand/png/phone.png"
              alt="Event"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>

          {/* Wide Card - Team / Invoices */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-md backdrop-blur-md md:col-span-2">
            <h3 className="mb-3 text-lg font-semibold">Team</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-400">Limit of members</p>
                <p className="text-lg font-semibold">50</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Current members</p>
                <p className="text-lg font-semibold">37</p>
              </div>
            </div>
            <h4 className="mt-5 text-md font-semibold">Invoices</h4>
            <ul className="mt-2 space-y-2 text-sm text-gray-300">
              <li>Invoice #034 · Jan 2024</li>
              <li>Invoice #035 · Jan 2024</li>
              <li>Invoice #036 · Jan 2024</li>
            </ul>
          </div>

          {/* Description */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-md backdrop-blur-md">
            <h3 className="mb-2 text-lg font-semibold">Description</h3>
            <p className="text-sm text-gray-300">
              Welcome to Airo, the team that loves coding. At Airo, we’re
              dedicated to creating powerful and fun projects in math, physics,
              biology, and design. We’re a talented team of developers eager to
              learn, discover, all through events.
            </p>
          </div>

          {/* User Info */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-md backdrop-blur-md">
            <h3 className="mb-2 text-lg font-semibold">Your Profile</h3>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-purple-600"></div>
              <div>
                <p className="text-sm font-semibold">Ismael Baygun</p>
                <p className="text-xs text-gray-400">Organizer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
