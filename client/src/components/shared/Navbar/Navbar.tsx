'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogOut, LayoutDashboard, Menu, X, ChevronRight } from 'lucide-react';
import Container from '../Container/Container';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'PROPERTIES', path: '/properties' },
    { name: 'NEWS', path: '/news' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'DASHBOARD', path: '/dashboard' },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-[#121c24] text-white shadow-md border-b border-white/10 font-sans">
      <Container>
        <div className=" flex items-center justify-between h-20">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="text-white">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 10L12 3L21 10V20C21 20.5523 20.5523 21 20 21H15V15H9V21H4C3.44772 21 3 20.5523 3 20V10Z" fill="white"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-[18px] md:text-[22px] font-extrabold tracking-wider">EventHub</span>
            <span className="text-[#94a3b8] text-[9px] md:text-[10px] font-semibold tracking-wide">LIVING SOLUTIONS</span>
          </div>
        </Link>

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

        {/* Desktop Right Side: Log Out Button */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-white border border-[#334155] bg-transparent px-5 py-2.5 rounded-full text-sm font-semibold no-underline transition-all hover:bg-[#1e293b] hover:border-[#475569]"
          >
            <LogOut size={16} />
            Login
          </Link>
        </div>

        {/* Mobile Menu Hamburger Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 focus:outline-none hover:text-gray-300 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
      </Container>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#121c24] z-[70] shadow-2xl border-l border-white/10 transition-transform duration-300 ease-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6 text-white">
          <div className="flex justify-between items-center pb-4 border-b border-white/10">
            <span className="text-white font-extrabold text-xs uppercase tracking-widest">
              Navigation
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex flex-col space-y-3 mt-6">
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
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider text-white border border-[#334155] rounded-full hover:bg-[#1e293b] transition-colors"
            >
              <LogOut size={15} /> Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}