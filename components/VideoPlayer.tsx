"use client";

import { useState } from "react";

const PlayIcon = () => (
  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

export default function VideoPlayerButton() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  const videoId = "dQw4w9WgXcQ";

  return (
    <div className="flex gap-3 items-center">
      <button
        onClick={openPopup}
        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-zinc-800 rounded-md flex-shrink-0 hover:bg-zinc-700 transition-colors flex items-center justify-center"
      >
        <PlayIcon />
      </button>
      <span
        onClick={openPopup}
        className="text-xs sm:text-sm md:text-base font-medium cursor-pointer hover:underline"
      >
        Video de Apresentação
      </span>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <div
            className="relative bg-zinc-900 p-4 rounded-lg max-w-3xl w-full max-h-[80vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl"
            >
              X
            </button>
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
