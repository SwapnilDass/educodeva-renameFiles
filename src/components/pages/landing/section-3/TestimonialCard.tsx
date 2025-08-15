interface TestimonialCardProps {
  username: string;
  handle: string;
  body: string;
  pfp?: string;
  image?: string;
}

export default function TestimonialCard({
  username,
  handle,
  body,
  pfp,
  image,
}: TestimonialCardProps) {
  return (
    <div className="break-inside-avoid rounded-xl border border-white/15 bg-white/10 px-5 py-4">
      <div className="space-y-4">
        {/* User information (pfp, username, handle) */}
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-white">
            {pfp && <img src={pfp}></img>}
          </div>
          <div>
            <p className="text-sm">{username}</p>
            <p className="text-xs text-gray-300">{handle}</p>
          </div>
        </div>

        {/* Body text and (optional) image*/}
        <div className="space-y-4">
          <p className="text-xs text-gray-300">{body}</p>
          {image !== undefined && (
            <div className="h-[13.75rem] w-full rounded-xl bg-white">
              {image && <img src={image}></img>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
