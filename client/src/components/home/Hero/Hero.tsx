"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Sparkles, Compass, ArrowRight, Info } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center font-sans overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero.avif"
          alt="hero-img"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full object-cover brightness-[0.4] scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Subtle Gradient Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/40 via-transparent to-indigo-950/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 w-full flex flex-col items-center text-center text-white">
        
        {/* Floating Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md transition-all mb-6 shadow-lg shadow-black/10 animate-fade-in">
          <Sparkles size={14} className="text-amber-400 animate-pulse" />
          <span className="tracking-wide">Discover Extraordinary Experiences</span>
        </div>

        {/* Heading & Subtitle */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-[1.15]">
          Find Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-200">Adventure</span> Nearby
        </h1>
        <p className="text-slate-300 text-sm sm:text-base md:text-lg mb-8 max-w-xl font-normal leading-relaxed">
          Explore top-rated attractions, hidden gems, cultural hotspots, and unforgettable activities around you.
        </p>

        {/* Action Buttons with Links */}
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <Link
            href="/all-events"
            className="flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-2xl shadow-xl shadow-blue-600/30 transition-all text-xs sm:text-sm tracking-wide cursor-pointer group"
          >
            <Compass size={16} className="group-hover:rotate-45 transition-transform duration-300" />
            All Events
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="/about"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-2xl border border-white/20 backdrop-blur-md transition-all text-xs sm:text-sm tracking-wide cursor-pointer shadow-lg shadow-black/10"
          >
            <Info size={16} />
            About Us
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Hero;