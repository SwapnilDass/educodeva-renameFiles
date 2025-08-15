import { useState } from "react";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialGrid() {
  const entries = [
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "nah bro Codeva's too good i cant believe it...",
      pfp: "",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "Just reached top 3 in the weekly leaderboard",
      pfp: "",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "Looking for a way to learn coding, math, physics, and more, all through the comfort of your home? Codeva's what you need. Check it out right now and gain expertise in what YOU like. https://codeva.xyz/",
      pfp: "",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "My little bro just showed me Codeva and what he's been learning, he's doing way better in school especially in math, and he's making his own website now thanks to what he learned there!",
      pfp: "",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "This platform rocks man",
      pfp: "",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "Tbh yall gotta admit Codeva is the best learning platform out there at the moment. They teach math, coding, physics, and more for free through interactive courses, host events, alow you to host your own and earn through your own shop, discover events according to your needs, compete with other students on a leaderboard and get paid for courses. Damn man they really cracked the winning formula of Duolingo, can't wait to see where this goes!",
      pfp: "",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "Gained a ton of xp on Codeva by joining the summer hackathon on their platform, even got a certificate and gifts",
      pfp: "",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "nah bro Codeva's too good i cant believe it..",
      pfp: "",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "They rock so hard",
      pfp: "",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "Too good at their job fr",
      pfp: "",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "Yall gotta admit Codeva's the og",
      pfp: "",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "No way they teach all the math i need for free",
      pfp: "",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(9);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="relative">
      <div className="columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3">
        {entries.slice(0, visibleCount).map((entry, index) => (
          <TestimonialCard key={index} {...entry} />
        ))}

        {visibleCount < entries.length && (
          <>
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-[#050222] via-[#050222cc] to-transparent" />
            <div className="absolute bottom-6 left-1/2 z-20 flex w-full -translate-x-1/2 justify-center">
              <button
                className="rounded-lg bg-white/10 px-6 py-2 font-medium text-white shadow-lg transition hover:bg-white/20"
                onClick={handleShowMore}
              >
                Show More
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
