"use client";

export default function Hero() {
  return (
    <section className="relative bg-gray-50 w-full h-[95vh] overflow-hidden py-20 flex flex-col items-center text-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover object-top"
        src="/video/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
}
