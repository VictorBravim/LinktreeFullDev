"use client";

interface SocialCardProps {
  handle: string;
  followers: string;
  imageUrl: string;
  url: string;
}

export default function SocialCard({
  handle,
  followers,
  imageUrl,
  url,
}: SocialCardProps) {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div className="border border-zinc-800 rounded-lg p-3 sm:p-4 bg-zinc-900/50 hover:border-orange-600 transition-colors">
      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
        <img
          src={imageUrl}
          alt={`${handle} logo`}
          className="w-8 h-8 sm:w-10 sm:h-10 bg-zinc-800 rounded-md"
        />
        <span className="text-sm sm:text-base text-gray-300">{handle}</span>
      </div>
      <button
        onClick={handleClick}
        className="w-full bg-orange-600 hover:bg-orange-700 text-white py-1 sm:py-2 px-3 sm:px-4 rounded-md text-xs sm:text-sm transition-colors"
      >
        Seguir {followers}
      </button>
    </div>
  );
}