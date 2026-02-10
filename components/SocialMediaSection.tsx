"use client";

import { useEffect, useRef, useState } from "react";

interface SocialMediaPost {
  id: number;
  platform: "instagram" | "facebook";
  title: string;
  subtitle?: string;
  badge?: string;
  videoUrl?: string;
  embedCode?: string;
  thumbnail?: string;
}

const SocialMediaSection = () => {
  const cardVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Social media posts with video URLs
  const socialPosts: SocialMediaPost[] = [
    {
      id: 1,
      platform: "instagram",
      title: "Design Inspiration Daily",
      subtitle: "See how real homes use our tiles",
      badge: "Instagram",
      videoUrl: "/videos/vieo_sample1.mp4",
    },
    {
      id: 2,
      platform: "instagram",
      title: "Showroom Highlights",
      subtitle: "Vertical videos from our latest collections",
      badge: "Featured Reel",
      videoUrl: "/videos/video_sample2.mp4",
    },
    {
      id: 3,
      platform: "facebook",
      title: "Customer Project Stories",
      subtitle: "Before & after transformations",
      badge: "Facebook",
      videoUrl: "/videos/video-sample3.mp4",
    },
    {
      id: 4,
      platform: "instagram",
      title: "Installation Tips",
      subtitle: "Short clips from our experts",
      videoUrl: "/videos/video_sample4.mp4",
    },
    {
      id: 5,
      platform: "facebook",
      title: "New Arrivals & Offers",
      subtitle: "Stay updated with the latest designs",
      videoUrl: "/videos/video_sample5.mp4",
    },
  ];

  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(
    null,
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Keyboard controls: Esc to close, arrows to navigate, space to play/pause
  useEffect(() => {
    if (selectedVideoIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === " ") {
        e.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedVideoIndex]);

  // Sync HTML5 video element with play state
  useEffect(() => {
    if (!videoRef.current) return;

    if (isPlaying) {
      void videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying, selectedVideoIndex]);

  const openModal = (index: number) => {
    setSelectedVideoIndex(index);
    setIsPlaying(true);
  };

  const closeModal = () => {
    setIsPlaying(false);
    setSelectedVideoIndex(null);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const goToPrevious = () => {
    if (selectedVideoIndex === null) return;
    setSelectedVideoIndex((prev) => {
      if (prev === null) return prev;
      return prev === 0 ? socialPosts.length - 1 : prev - 1;
    });
    setIsPlaying(true);
  };

  const goToNext = () => {
    if (selectedVideoIndex === null) return;
    setSelectedVideoIndex((prev) => {
      if (prev === null) return prev;
      return prev === socialPosts.length - 1 ? 0 : prev + 1;
    });
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const currentPost =
    selectedVideoIndex !== null ? socialPosts[selectedVideoIndex] : null;

  // Get previous and next posts for side previews
  const previousIndex =
    selectedVideoIndex !== null
      ? selectedVideoIndex === 0
        ? socialPosts.length - 1
        : selectedVideoIndex - 1
      : null;
  const nextIndex =
    selectedVideoIndex !== null
      ? selectedVideoIndex === socialPosts.length - 1
        ? 0
        : selectedVideoIndex + 1
      : null;

  const previousPost = previousIndex !== null ? socialPosts[previousIndex] : null;
  const nextPost = nextIndex !== null ? socialPosts[nextIndex] : null;

  return (
    <>
      <section className="py-16 md:py-24 bg-[#f7f7f9]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-heading mb-3 text-center">
            Find Us On Social Media
          </h2>
          <p className="section-caption text-center max-w-3xl mx-auto">
              Follow us for the latest tile designs, installation tips, and
              inspiration for your next project.
          </p>
        </div>

          {/* Bento grid: DJI-style asymmetric layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[260px] gap-5 lg:gap-6">
          {socialPosts.map((post, index) => {
              const isTallCenterCard = index === 1; // Middle column, spans 2 rows on desktop

              return (
                <article
                  key={post.id}
                  onClick={() => openModal(index)}
                  className={`relative flex flex-col overflow-hidden rounded-none bg-white shadow-sm ring-1 ring-slate-100/70 cursor-pointer ${
                    isTallCenterCard
                      ? "lg:row-span-2 lg:min-h-[540px]"
                      : "min-h-[260px]"
                  }`}
                >
                  {/* Video Background */}
                  {post.videoUrl && (
                    <video
                      ref={(el) => {
                        cardVideoRefs.current[index] = el;
                      }}
                      src={post.videoUrl}
                      className="absolute inset-0 w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      onMouseEnter={(e) => {
                        e.currentTarget.play();
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    />
                  )}

                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-1 flex-col p-5 md:p-6 lg:p-7">
                    {/* Top meta row */}
                    <div className="mb-4 flex items-center justify-between gap-3 text-xs font-medium">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 shadow-sm backdrop-blur">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            post.platform === "instagram"
                              ? "bg-pink-500"
                              : "bg-blue-500"
                          }`}
                        />
                        <span className="uppercase tracking-wide text-slate-900">
                          {post.platform}
                        </span>
                      </div>
                      {post.badge && (
                        <span className="hidden rounded-full bg-slate-900/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white sm:inline-flex">
                          {post.badge}
                        </span>
                      )}
                    </div>

                    {/* Main copy - positioned at bottom */}
                    <div className="mt-auto">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold tracking-tight text-white mb-2">
                        {post.title}
                      </h3>
                      {post.subtitle && (
                        <p className="text-sm md:text-[15px] text-gray-200">
                          {post.subtitle}
                        </p>
                      )}
                    </div>

                    {/* Bottom-right circular arrow button */}
                    <div className="mt-6 flex justify-end">
                      <button
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-md backdrop-blur transition-all hover:bg-white"
                      >
                        <svg
                          className="h-4 w-4 -translate-x-px translate-y-px transform"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.8}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h13" />
                          <path d="M13 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideoIndex !== null && currentPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20"
            aria-label="Close video"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Navigation Arrow - Far Left */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20"
            aria-label="Previous video"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Navigation Arrow - Far Right */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20"
            aria-label="Next video"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Main Container with Previous, Center, Next - Centered */}
          <div className="flex items-center justify-center gap-4 w-full max-w-5xl mx-auto px-4">
            {/* Previous Video Card (Left) */}
            {previousPost && (
              <div
                onClick={goToPrevious}
                className="hidden lg:flex flex-col items-center justify-center w-36 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
              >
                <div className="relative aspect-[9/16] w-full bg-black rounded-lg overflow-hidden shadow-lg">
                  <video
                    src={previousPost.videoUrl}
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-sm font-semibold text-white truncate">
                      {previousPost.title}
                    </h4>
                  </div>
                </div>
              </div>
            )}

            {/* Center Video Container */}
            <div className="relative w-full max-w-[460px] max-h-[85vh] flex-shrink-0">
              <div className="relative aspect-[9/16] bg-black rounded-lg overflow-hidden max-h-[85vh] shadow-2xl">
                {/* Video Element */}
                <video
                  ref={videoRef}
                  src={currentPost.videoUrl}
                  className="h-full w-full object-contain"
                  loop
                  playsInline
                  onEnded={() => setIsPlaying(false)}
                />

                {/* Play/Pause Overlay Button */}
                <button
                  type="button"
                  onClick={togglePlayPause}
                  className="absolute inset-0 flex items-center justify-center"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {!isPlaying && (
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all hover:bg-white/30">
                      <svg
                        className="h-8 w-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  )}
                </button>

                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                  <h3 className="mb-1 text-xl font-semibold text-white">
                    {currentPost.title}
                  </h3>
                  {currentPost.subtitle && (
                    <p className="text-sm text-gray-200">
                      {currentPost.subtitle}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Next Video Card (Right) */}
            {nextPost && (
              <div
                onClick={goToNext}
                className="hidden lg:flex flex-col items-center justify-center w-36 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
              >
                <div className="relative aspect-[9/16] w-full bg-black rounded-lg overflow-hidden shadow-lg">
                  <video
                    src={nextPost.videoUrl}
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-sm font-semibold text-white truncate">
                      {nextPost.title}
                    </h4>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SocialMediaSection;
