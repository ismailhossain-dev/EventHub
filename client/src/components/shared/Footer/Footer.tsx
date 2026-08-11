'use client';

import Link from 'next/link';
import { ArrowUp, MapPin, Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';
import Logo from '../Logo/Logo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#121c24] text-white font-sans border-t border-white/10 pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand & Info Column (Span 6) */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <div className="flex items-center gap-3 no-underline">
             <Logo/>
            </div>

            <p className="text-[#94a3b8] text-sm max-w-md leading-relaxed">
              EventHub simplifies event planning, ticket booking, and unforgettable gatherings with verified venues, secure transactions, and expert support making your experience easy and stress-free.
            </p>

            {/* Social Icons & Back to Top */}
            <div className="flex items-center justify-between pt-4 max-w-md">
              <div className="flex items-center space-x-3 text-white/80">
                {/* Github Link */}
                <a 
                  href="https://github.com/ismailhossain-dev" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Github" 
                  className="p-2.5 rounded-full border border-white/10 hover:bg-white/5 hover:text-white transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
                {/* LinkedIn Link */}
                <a 
                  href="https://www.linkedin.com/in/mohammad-ismail-hossain-sabbir" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Linkedin" 
                  className="p-2.5 rounded-full border border-white/10 hover:bg-white/5 hover:text-white transition-colors"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
                {/* Instagram Link */}
                <a 
                  href="https://www.instagram.com/sabbir.69k" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram" 
                  className="p-2.5 rounded-full border border-white/10 hover:bg-white/5 hover:text-white transition-colors"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
                {/* Facebook Link */}
                <a 
                  href="https://www.facebook.com/md.sabbir.926093" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook" 
                  className="p-2.5 rounded-full border border-white/10 hover:bg-white/5 hover:text-white transition-colors"
                >
                  <FaFacebookF className="w-4 h-4" />
                </a>
              </div>

              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-white border border-[#334155] bg-transparent px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all hover:bg-[#1e293b] hover:border-[#475569] cursor-pointer"
              >
                <ArrowUp size={14} /> Back to Top
              </button>
            </div>
          </div>

          {/* Quick Links Column (Span 3) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h3 className="text-white font-bold text-base uppercase tracking-wider">Quick Links</h3>
            <ul className="flex flex-col space-y-2.5 text-sm text-[#cbd5e1]">
              <li><Link href="/" className="hover:text-white transition-colors">HOME</Link></li>
              <li><Link href="/all-events" className="hover:text-white transition-colors">EVENTS</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">ABOUT US</Link></li>
            </ul>
          </div>

          {/* Connect Information Column (Span 3) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h3 className="text-white font-bold text-base uppercase tracking-wider">Connect Info</h3>
            <ul className="flex flex-col space-y-3 text-sm text-[#cbd5e1]">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#ff2e63] shrink-0 mt-0.5" />
                <span>Rangamati, Chittagong Division, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#ff2e63] shrink-0" />
                <a href="mailto:ismail.dev69k@gmail.com" className="hover:text-white transition-colors">
                  ismail.dev69k@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#ff2e63] shrink-0" />
                <a href="tel:+8801619408991" className="hover:text-white transition-colors">
                  +880 1619408991
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#94a3b8]">
          <p>© 2026 EVENTHUB. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            This site developed by{' '}
            <a href="https://github.com/ismailcodes" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:underline">
               ismailcodes
            </a>.
          </p>
        </div>

      </div>
    </footer>
  );
}