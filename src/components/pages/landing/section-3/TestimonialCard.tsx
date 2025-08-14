interface TestimonialCardProps {}

export default function TestimonialCard({}: TestimonialCardProps) {
  return (
    <div className="rounded-lg border border-white/15 bg-white/10 p-5">
      {/* Header */}
      <div>
        <img className="m-1 h-10 w-10 rounded-full bg-white"></img>
      </div>
    </div>
  );
}
