"use client";

interface SocialGridProps {
  handle: string;
  followers: string;
  imageUrl: string;
  url: string;
  recentImages: string[];
}

export default function SocialGrid({
  handle,
  followers,
  imageUrl,
  url,
  recentImages,
}: SocialGridProps) {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div className="border border-zinc-800 rounded-lg p-4 sm:p-4 bg-zinc-900/50 hover:border-orange-600 transition-colors">
      <div className="flex flex-col">
        <div className="flex items-center gap-3 mb-3 sm:mb-4">
          <img
            src={imageUrl}
            alt={`${handle} logo`}
            className="w-8 h-8 sm:w-10 sm:h-10 bg-zinc-800 rounded-md"
          />
          <span className="text-sm sm:text-base text-gray-300">{handle}</span>
        </div>
        <button
          onClick={handleClick}
          className="bg-orange-600 cursor-pointer hover:bg-orange-700 text-white py-1 sm:py-2 px-3 sm:px-4 rounded-md text-xs sm:text-sm mb-4 sm:mb-5 transition-colors"
        >
          Seguir {followers}
        </button>
        <div className="grid grid-cols-3 gap-2 sm:gap-8">
          {recentImages.slice(0, 6).map((imgUrl, index) => (
            <img
              key={index}
              src={imgUrl}
              alt={`Imagem ${index + 1} de ${handle}`}
              className="w-full aspect-square rounded-md object-cover hover:bg-zinc-700 transition-colors"
            />
          ))}
        </div>
      </div>
    </div>
  );
}