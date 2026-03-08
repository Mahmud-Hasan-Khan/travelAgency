import React from "react";
import TypewriterText from "../hero/TypewriterText";

export default function VideoHero() {
  return (
    <section className="relative w-full h-[75vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-black">
      {/* 1. CSS for the Gradient Animation (Works without tailwind.config.js) */}
      <style>
        {`
          @keyframes flow-gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .pro-text-gradient {
            background-size: 200% 200%;
            animation: flow-gradient 5s ease infinite;
          }
        `}
      </style>

      {/* 2. Optimized Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="object-cover w-full h-full opacity-80 scale-[1.01]" // Slight zoom to avoid edge gaps
          src="/hero-bg-cover.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        {/* Pro Overlay: Subtle radial gradient makes the center text pop */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </div>

      {/* 3. Main Content Layer */}
      <div className="relative z-10 w-full max-w-6xl px-6 text-center text-white">

        {/* Glassmorphic Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2 mb-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase opacity-90">
            The Travel Agency That Really Cares
          </span>
        </div>

        {/* Cinematic Main Heading */}
        <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter leading-[1.1]">
          Explore with <br />
          <span className="pro-text-gradient bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Wakia Travels
          </span>
        </h1>

        {/* Dynamic Subheading with Fixed Height (Prevents layout shift) */}
        {/* Typewriter text */}
        <div className="text-xl md:text-3xl font-light mb-8 text-gray-200 h-10 flex justify-center items-center gap-2">
          <span className="opacity-70">Expert in</span>

          <TypewriterText />
        </div>

        {/* High-Conversion CTA Buttons */}
        {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold text-lg shadow-xl hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300">
            Book Your Trip Now
          </button>

          <button className="w-full sm:w-auto px-10 py-4 rounded-2xl border border-white/30 bg-white/5 backdrop-blur-sm font-bold text-lg hover:bg-white/10 hover:border-white/60 transition-all duration-300">
            View Destinations
          </button>
        </div> */}
      </div>

      {/* 4. Bottom Fade-out (Seamless transition to the next section) */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    
    </section>
  );
}