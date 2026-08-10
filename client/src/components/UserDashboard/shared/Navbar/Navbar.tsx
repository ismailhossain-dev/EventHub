"use client";

import React from "react";
import Image from "next/image";
import { Menu, X, Bell, ShieldCheck } from "lucide-react";

interface NavbarProps {
  isOpen: boolean;
  onMenuToggle: () => void;
}

function Navbar({ isOpen, onMenuToggle }: NavbarProps) {
  return (
    <header className="h-20 w-full bg-white border-b border-gray-100 flex items-center justify-between px-4 sm:px-8 sticky top-0 z-30 font-sans text-gray-800 shadow-xs">
      
      {/* Left Section: Breadcrumbs / System Title */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
          <span>System</span>
          <span>/</span>
          <span className="text-[#ff2e63]">Dashboard</span>
        </div>
      </div>

      {/* Right Section: Notifications, Demo User Profile & Mobile Toggle Button */}
      <div className="flex items-center gap-3 sm:gap-6">
        
        {/* Notification Bell */}
        <button className="relative p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer">
          <Bell size={20} />
          <span className="absolute top-2 right-2 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff2e63]"></span>
          </span>
        </button>

        {/* User Profile Card (Demo Data) */}
        <div className="flex items-center gap-3 pl-3 sm:pl-4 border-l border-gray-200">
          <div className="text-right hidden sm:block">
            <div className="flex items-center justify-end gap-1.5">
              <p className="text-xs font-black uppercase tracking-tight text-gray-900 leading-none">
                Sabbir
              </p>
              <ShieldCheck className="w-3.5 h-3.5 text-[#ff2e63]" />
            </div>
            <p className="text-[10px] text-gray-400 font-medium truncate max-w-[150px] mt-0.5">
              Hello@gmail.com
            </p>
          </div>

          <div className="relative w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-[#ff2e63] to-rose-400 shadow-sm">
            <div className="w-full h-full rounded-full bg-white overflow-hidden relative flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop"
                alt="User Profile"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Mobile Responsive Menu / Close Toggle Button (Placed on the Right) */}
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2.5 bg-gray-50 text-gray-700 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer border border-gray-200 shadow-xs"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={20} className="text-[#ff2e63]" /> : <Menu size={20} />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;