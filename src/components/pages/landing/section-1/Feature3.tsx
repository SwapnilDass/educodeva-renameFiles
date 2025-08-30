export default function Feature3() {
  return (
    <div className="max-w-xl break-inside-avoid space-y-8 rounded-xl border-[1.6px] border-white/[8%] bg-white/10 p-6 md:p-8">
      <div className="max-w-prose space-y-2 text-left">
        <h3 className="text-xl font-medium leading-tight tracking-tighter text-white md:text-2xl">
          Compete & Reach the top!
        </h3>
        <p className="text-base leading-relaxed text-white/70">
          Any activity you do earns you XP, so gather as much as you can and
          compete in the leaderboard to win prizes!
        </p>
      </div>

      {/* Notifications Image */}
      <img
        src="/landing/notifications.png"
        alt="Notifications"
        className="h-auto w-full object-contain"
      />
    </div>
  );
}
