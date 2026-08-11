'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogOut, Menu, X, ChevronRight, User, CalendarCheck, Heart } from 'lucide-react';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'EVENTS', path: '/all-events' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'DASHBOARD', path: '/user' },
  ];

  const dashboardLinks = [
    { name: 'Booking', path: '/user/my-booking', icon: CalendarCheck },
    { name: 'Profile', path: '/user/my-profile', icon: User },
    // { name: 'Wishlist', path: '/user/wishlist', icon: Heart },
  ];

  const { data: session, status } = useSession();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (status === "loading") {
    return <p className="text-white bg-[#121c24] p-4 text-center">Loading....</p>;
  }

  return (
    <header className="w-full sticky top-0 z-50 bg-[#1c2d37] text-white shadow-md border-b border-white/10 font-sans">
      <Container>
        <div className="flex items-center justify-between h-20">
        
          {/* Logo Section */}
          <Logo />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-sm font-bold tracking-wider uppercase transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-[#cbd5e1] hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop & Mobile Wrapper with Single Dropdown Ref */}
          <div className="flex items-center gap-3" ref={dropdownRef}>
            
            {/* Desktop Auth / Profile Section */}
            <div className="hidden lg:flex items-center relative">
              {session?.user ? (
                <div className="relative">
                  {/* Profile Avatar Trigger */}
                  <button
                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                    className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#ff2e63] bg-[#1e293b] flex items-center justify-center hover:scale-105 transition-all cursor-pointer shadow-sm"
                    aria-label="User Profile Menu"
                  >
                    {session.user.image ? (
                      <Image
                        src={session.user.image}
                        alt={session.user.name || "User"}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <User size={20} className="text-gray-200" />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {isProfileDropdownOpen && (
                    <div className="absolute right-0 mt-3 w-60 bg-white text-gray-800 border border-gray-100 rounded-2xl shadow-2xl py-2 z-50">
                      
                      {/* User Info Header */}
                      <div className="px-4 py-3 border-b border-gray-100 mb-1 bg-gray-50/60 pointer-events-none">
                        <p className="text-xs font-black uppercase tracking-tight text-gray-900 truncate">
                          {session.user.name || "User"}
                        </p>
                        <p className="text-[10px] text-gray-500 font-medium truncate mt-0.5">
                          {session.user.email}
                        </p>
                      </div>

                      {/* Links */}
                      {dashboardLinks.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <Link
                            key={item.path}
                            href={item.path}
                            onClick={() => setIsProfileDropdownOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
                          >
                            <IconComponent size={16} className="text-[#ff2e63]" />
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}

                      <div className="my-1 border-t border-gray-100" />

                      {/* Logout Option */}
                      <button
                        onClick={() => {
                          setIsProfileDropdownOpen(false);
                          signOut();
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer text-left"
                      >
                        <LogOut size={16} />
                        <span>Logout</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 text-white border border-[#334155] bg-transparent px-5 py-2.5 rounded-full text-sm font-semibold no-underline transition-all hover:bg-[#1e293b] hover:border-[#475569]"
                >
                  <LogOut size={16} />
                  Login
                </Link>
              )}
            </div>

            {/* Mobile Profile Avatar & Dropdown */}
            <div className="lg:hidden flex items-center">
              {session?.user && (
                <div className="relative mr-2">
                  <button
                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                    className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-[#ff2e63] bg-[#1e293b] flex items-center justify-center shadow-sm cursor-pointer"
                    aria-label="Toggle Mobile Profile Menu"
                  >
                    {session.user.image ? (
                      <Image src={session.user.image} alt="User" fill className="object-cover" />
                    ) : (
                      <User size={18} className="text-gray-200" />
                    )}
                  </button>

                  {/* Mobile Dropdown Menu */}
                  {isProfileDropdownOpen && (
                    <div className="absolute right-0 mt-3 w-60 bg-white text-gray-800 border border-gray-100 rounded-2xl shadow-2xl py-2 z-50">
                      
                      {/* User Info Header */}
                      <div className="px-4 py-3 border-b border-gray-100 mb-1 bg-gray-50/60 pointer-events-none">
                        <p className="text-xs font-black uppercase tracking-tight text-gray-900 truncate">
                          {session.user.name || "User"}
                        </p>
                        <p className="text-[10px] text-gray-500 font-medium truncate mt-0.5">
                          {session.user.email}
                        </p>
                      </div>

                      {/* Links */}
                      {dashboardLinks.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <Link
                            key={item.path}
                            href={item.path}
                            onClick={() => setIsProfileDropdownOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
                          >
                            <IconComponent size={16} className="text-[#ff2e63]" />
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}

                      <div className="my-1 border-t border-gray-100" />

                      {/* Logout Option */}
                      <button
                        onClick={() => {
                          setIsProfileDropdownOpen(false);
                          signOut();
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer text-left"
                      >
                        <LogOut size={16} />
                        <span>Logout</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2 focus:outline-none hover:text-gray-300 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>
        </div>
      </Container>

      {/* Mobile Drawer Overlay for Hamburger Menu */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar Navigation (Main Hamburger Menu) */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#121c24] z-[70] shadow-2xl border-l border-white/10 transition-transform duration-300 ease-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6 text-white overflow-y-auto">
          <div className="flex justify-between items-center pb-4 border-b border-white/10">
            <span className="text-white font-extrabold text-xs uppercase tracking-widest">
              Navigation
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-400 hover:text-white focus:outline-none cursor-pointer"
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex flex-col space-y-3 mt-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight size={16} />
                </Link>
              );
            })}
          </div>

          <div className="mt-auto pt-4 border-t border-white/10">
            {session?.user ? (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  signOut();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider text-white border border-red-500/50 bg-red-500/10 rounded-full hover:bg-red-500/20 transition-colors cursor-pointer"
              >
                <LogOut size={15} /> Logout
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider text-white border border-[#334155] rounded-full hover:bg-[#1e293b] transition-colors"
              >
                <LogOut size={15} /> Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}