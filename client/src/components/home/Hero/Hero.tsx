'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { Search, Calendar, Grid, Clock } from 'lucide-react';

const Hero = () => {
    // Default demo values state (matching your navbar/footer theme)
    const [searchTerm, setSearchTerm] = useState('Music Concert');
    const [purpose, setPurpose] = useState('Entertainment');
    const [location, setLocation] = useState('Jashore');

    // Search click handler
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({
            searchTerm,
            purpose,
            location
        });
        alert(`Searching for: "${searchTerm}" | Purpose: ${purpose} | Location: ${location}`);
    };

    return (
        <div className="relative w-full h-[550px] flex items-center justify-center font-sans">
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/assets/hero.avif" 
                    alt="hero-img" 
                    fill 
                    priority
                    className="w-full h-full object-cover brightness-[0.45]" 
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 w-full flex flex-col items-center text-center text-white mt-[-40px]">
                
                {/* Heading & Subtitle */}
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
                    Find Nearby Location
                </h1>
                <p className="text-gray-300 text-sm md:text-base mb-8 max-w-lg">
                    Explore top-rated attractions, activities and more!
                </p>

                {/* Search Bar Form (Matched with reference screenshot design: Left dark label block + pill/rounded wrapper + dark search button) */}
                <form 
                    onSubmit={handleSearch}
                    className="w-full bg-white text-black rounded-2xl lg:rounded-full p-2 shadow-2xl flex flex-col lg:flex-row items-center gap-2"
                >
                    
                    {/* Left Segment: Property Search / Title box */}
                    <div className="w-full lg:w-auto bg-[#121c24] text-white px-6 py-3.5 rounded-xl lg:rounded-l-full font-bold text-sm tracking-wide shrink-0 text-center lg:text-left">
                        Property Search
                    </div>

                    {/* What are you looking for input */}
                    <div className="flex items-center gap-2 px-4 py-3 w-full lg:flex-1 lg:border-l border-gray-200">
                        <Search size={18} className="text-gray-400 shrink-0" />
                        <input 
                            type="text" 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search for properties..." 
                            className="w-full bg-transparent text-sm focus:outline-none placeholder-gray-400 text-gray-700"
                        />
                    </div>

                    {/* Purpose Dropdown */}
                    <div className="w-full lg:w-[180px] px-4 py-3 lg:border-l border-gray-200 text-sm text-gray-600 flex items-center justify-between">
                        <select 
                            value={purpose}
                            onChange={(e) => setPurpose(e.target.value)}
                            className="w-full bg-transparent focus:outline-none cursor-pointer text-gray-700 truncate"
                        >
                            <option value="Entertainment">Entertainment</option>
                            <option value="Residential">Residential</option>
                            <option value="Commercial">Commercial</option>
                            <option value="Event Venue">Event Venue</option>
                        </select>
                    </div>

                    {/* Location Dropdown */}
                    <div className="w-full lg:w-[180px] px-4 py-3 lg:border-l border-gray-200 text-sm text-gray-600 flex items-center justify-between">
                        <select 
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full bg-transparent focus:outline-none cursor-pointer text-gray-700 truncate"
                        >
                            <option value="Jashore">Jashore</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chittagong">Chittagong</option>
                            <option value="Sylhet">Sylhet</option>
                        </select>
                    </div>

                    {/* Search Button (Dark pill style matching the screenshot reference) */}
                    <button 
                        type="submit"
                        className="w-full lg:w-auto bg-[#121c24] hover:bg-[#1e293b] text-white font-semibold px-7 py-3.5 rounded-xl lg:rounded-r-full transition-all text-sm tracking-wide shrink-0 flex items-center justify-center gap-2 shadow-md cursor-pointer"
                    >
                        <Search size={16} /> Search Property
                    </button>

                </form>

                {/* Filter Pills Below Search Bar */}
                <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                    <span className="text-xs text-gray-300 font-medium">Or browse event by feature:</span>
                    
                    <button onClick={() => alert("Upcoming Events clicked!")} className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-md transition-all cursor-pointer">
                        <Calendar size={14} className="text-pink-400" /> Upcoming Events
                    </button>

                    <button onClick={() => alert("Featured Events clicked!")} className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-md transition-all cursor-pointer">
                        <Clock size={14} className="text-yellow-400" /> Featured Events
                    </button>

                    <button onClick={() => alert("All Events clicked!")} className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-md transition-all cursor-pointer">
                        <Grid size={14} className="text-blue-400" /> All Events
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Hero;