interface TestimonialCardProps {
  name: string;
  handle: string;
  image?: string;
  body: string;
}

export default function TestimonialCard({
  name,
  handle,
  image,
  body,
}: TestimonialCardProps) {
  return (
    <div className="break-inside-avoid rounded-xl border border-white/15 bg-white/10 px-5 py-4">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-white">
            <img className=""></img>
          </div>
          <div>
            <p>{name}</p>
            <p className="text-sm text-gray-300">{handle}</p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-gray-300">{body}</p>
          {image !== undefined && (
            <div className="h-60 w-full rounded-xl bg-white">
              <img></img>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
