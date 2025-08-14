import TestimonialCard from "./TestimonialCard";

export default function TestimonialGrid() {
  const entries = [
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "nah bro Codeva's too good i cant believe it...",
      pfp: "",
      className: "col-span-1",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "Just reached top 3 in the weekly leaderboard",
      pfp: "",
      className: "col-span-1",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "Looking for a way to learn coding, math, physics, and more, all through the comfort of your home? Codeva's what you need. Check it out right now and gain expertise in what YOU like. https://codeva.xyz/",
      pfp: "",
      className: "col-span-2 row-span-2",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "My little bro just showed me Codeva and what he's been learning, he's doing way better in school especially in math, and he's making his own website now thanks to what he learned there!",
      pfp: "",
      className: "col-span-2",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "This platform rocks man",
      pfp: "",
      className: "col-span-1",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "Tbh yall gotta admit Codeva is the best learning platform out there at the moment. They teach math, coding, physics, and more for free through interactive courses, host events, alow you to host your own and earn through your own shop, discover events according to your needs, compete with other students on a leaderboard and get paid for courses. Damn man they really cracked the winning formula of Duolingo, can't wait to see where this goes!",
      pfp: "",
      className: "col-span-2 row-span-3",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "Gained a ton of xp on Codeva by joining the summer hackathon on their platform, even got a certificate and gifts",
      pfp: "",
      className: "col-span-1",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "nah bro Codeva's too good i cant believe it..",
      pfp: "",
      className: "col-span-1",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "They rock so hard",
      pfp: "",
      className: "col-span-1",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "Too good at their job fr",
      pfp: "",
      className: "col-span-1",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "Yall gotta admit Codeva's the og",
      pfp: "",
      className: "col-span-1",
    },
    {
      name: "Steven Tey",
      handle: "@steventey",
      body: "No way they teach all the math i need for free",
      pfp: "",
      className: "col-span-1",
    },
  ];

  return (
    <div className="relative overflow-hidden" style={{}}>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {entries.map((entry, index) => (
          <TestimonialCard key={index} {...entry} />
        ))}
      </div>
      <button className="absolute bottom-5 left-auto right-auto">
        Show more
      </button>
    </div>
  );
}
