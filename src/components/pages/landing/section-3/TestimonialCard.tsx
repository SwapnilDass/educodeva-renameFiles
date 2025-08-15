interface TestimonialCardProps {
  name: string;
  handle: string;
  body: string;
}

export default function TestimonialCard({
  name,
  handle,
  body,
}: TestimonialCardProps) {
  return (
    <div className="break-inside-avoid rounded-lg border border-white/15 bg-white/10 p-6">
      {/* Header */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <img className="m-1 h-10 w-10 rounded-full bg-white"></img>
          <div className="">
            <p>{name}</p>
            <p>{handle}</p>
          </div>
        </div>
        <p>{body}</p>
      </div>
    </div>
  );
}
