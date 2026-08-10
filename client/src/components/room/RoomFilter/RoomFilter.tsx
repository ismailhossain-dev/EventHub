"use client";

import { Search, SlidersHorizontal, ChevronDown, X, Building2, Users } from "lucide-react";
import { useMemo, useState } from "react";
import RoomCard from "../RoomCard/RoomCard";
import { Room } from "@/types/room";

interface RoomFilterProps {
  rooms: Room[];
}

export default function RoomFilter({ rooms = [] }: RoomFilterProps) {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState("");
  const [category, setCategory] = useState("");

  // Unique locations with safe handling
  const locations = useMemo(() => {
    return [...new Set(rooms.map((room) => room.location).filter(Boolean))];
  }, [rooms]);

  // Unique categories with safe handling
  const categories = useMemo(() => {
    return [...new Set(rooms.map((room) => room.category).filter(Boolean))];
  }, [rooms]);

  // Filter rooms logic with type safety
  const filteredRooms = useMemo(() => {
    return rooms.filter((room) => {
      const searchValue = search.toLowerCase().trim();

      const matchesSearch =
        !searchValue ||
        room.title?.toLowerCase().includes(searchValue) ||
        room.location?.toLowerCase().includes(searchValue) ||
        room.category?.toLowerCase().includes(searchValue);

      const matchesLocation =
        !location || room.location === location;

      // Safe number conversion to resolve comparison warnings
      const roomCapacity = Number(room.capacity) || 0;
      const targetCapacity = Number(capacity) || 0;
      const matchesCapacity =
        !capacity || roomCapacity >= targetCapacity;

      const matchesCategory =
        !category || room.category === category;

      return (
        matchesSearch &&
        matchesLocation &&
        matchesCapacity &&
        matchesCategory
      );
    });
  }, [rooms, search, location, capacity, category]);

  // Clear all filters
  const clearFilters = () => {
    setSearch("");
    setLocation("");
    setCapacity("");
    setCategory("");
  };

  const hasActiveFilters = search || location || capacity || category;

  return (
    <div className="space-y-10">

      {/* ================= MODERN FILTER BAR ================= */}
      <div className="w-full overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)]">
        <div className="flex flex-col lg:flex-row items-stretch">

          {/* Filter Header Brand Box */}
          <div className="flex min-h-[96px] items-center gap-4 bg-[#1c313c] px-7 py-5 text-white lg:w-[280px]">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#ff2e63] shadow-inner">
              <SlidersHorizontal size={22} />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-widest font-extrabold text-[#ff2e63]">
                Smart Filter
              </span>
              <h2 className="text-lg font-black tracking-tight text-white">
                Find Spaces
              </h2>
            </div>
          </div>

          {/* Search Input Box */}
          <div className="flex flex-1 items-center border-b border-gray-100 px-6 py-4 lg:border-b-0 lg:border-r bg-gray-50/50 hover:bg-gray-50 transition-colors">
            <Search size={20} className="mr-3 shrink-0 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search title, location..."
              className="w-full bg-transparent text-sm font-semibold text-gray-800 outline-none placeholder:text-gray-400"
            />
            {search && (
              <button 
                onClick={() => setSearch("")} 
                className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 flex items-center justify-center transition-colors"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Location Select */}
          <div className="flex items-center border-b border-gray-100 px-6 py-4 lg:border-b-0 lg:border-r relative bg-gray-50/50 hover:bg-gray-50 transition-colors">
            <Building2 size={18} className="mr-3 shrink-0 text-gray-400" />
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full min-w-[150px] cursor-pointer appearance-none bg-transparent text-sm font-semibold text-gray-700 outline-none pr-8"
            >
              <option value="">All Locations</option>
              {locations.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-6 pointer-events-none text-gray-400" />
          </div>

          {/* Capacity Select */}
          <div className="flex items-center border-b border-gray-100 px-6 py-4 lg:border-b-0 lg:border-r relative bg-gray-50/50 hover:bg-gray-50 transition-colors">
            <Users size={18} className="mr-3 shrink-0 text-gray-400" />
            <select
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              className="w-full min-w-[140px] cursor-pointer appearance-none bg-transparent text-sm font-semibold text-gray-700 outline-none pr-8"
            >
              <option value="">Guests Capacity</option>
              <option value="1">1+ Guest</option>
              <option value="2">2+ Guests</option>
              <option value="3">3+ Guests</option>
              <option value="4">4+ Guests</option>
              <option value="5">5+ Guests</option>
            </select>
            <ChevronDown size={16} className="absolute right-6 pointer-events-none text-gray-400" />
          </div>

          {/* Category Select */}
          <div className="flex items-center border-b border-gray-100 px-6 py-4 lg:border-b-0 lg:border-r relative bg-gray-50/50 hover:bg-gray-50 transition-colors">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full min-w-[140px] cursor-pointer appearance-none bg-transparent text-sm font-semibold text-gray-700 outline-none pr-8"
            >
              <option value="">All Categories</option>
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-6 pointer-events-none text-gray-400" />
          </div>

          {/* Reset Filters Action */}
          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="flex items-center justify-center gap-1.5 px-7 py-4 text-xs font-bold uppercase tracking-wider text-[#ff2e63] hover:bg-rose-50/50 transition-colors"
            >
              <X size={15} />
              Reset
            </button>
          )}

        </div>
      </div>

      {/* ================= RESULT COUNT HEADER ================= */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-4 px-2">
        <div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">
            Available Rooms
          </h2>
          <p className="text-xs font-bold text-gray-400 mt-1">
            Showing <span className="text-[#ff2e63]">{filteredRooms.length}</span> matching spaces available right now
          </p>
        </div>
      </div>

      {/* ================= ROOM CARDS GRID ================= */}
      {filteredRooms.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-3 ">
          {filteredRooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
            />
          ))}
        </div>
      ) : (
        <div className="flex min-h-[380px] items-center justify-center rounded-3xl border border-dashed border-gray-200 bg-gray-50/50 p-8">
          <div className="text-center max-w-sm">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-100 text-gray-400 flex items-center justify-center mx-auto mb-4">
              <Search size={28} />
            </div>
            <h3 className="text-lg font-black text-gray-900">
              No rooms found
            </h3>
            <p className="text-xs text-gray-500 mt-1.5 mb-6 leading-relaxed font-medium">
              We couldn't find any rooms matching your selected criteria. Try resetting or tweaking your search settings.
            </p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center justify-center rounded-xl bg-[#ff2e63] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#ff2e63]/25 transition hover:bg-[#e02555]"
            >
              Clear All Filters
            </button>
          </div>
        </div>
      )}

    </div>
  );
}