'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Compass, 
  CalendarCheck, 
  SlidersHorizontal, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  HeartHandshake, 
  Lightbulb, 
  Sparkles,
  Ticket,
  Globe,
  Lock,
  Smile
} from 'lucide-react';
import Navbar from '@/components/shared/Navbar/Navbar';
import Footer from '@/components/shared/Footer/Footer';
import Container from '@/components/shared/Container/Container';

// প্রফেশনাল ফিচার কার্ড কম্পোনেন্ট
function FeatureCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(255,46,99,0.1)] hover:border-[#ff2e63]/30 transition-all flex flex-col items-start gap-4 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ff2e63]/5 to-transparent rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />
      <div className="w-12 h-12 rounded-xl bg-[#ff2e63]/10 text-[#ff2e63] flex items-center justify-center group-hover:bg-[#ff2e63] group-hover:text-white transition-colors duration-300">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-extrabold text-gray-900 tracking-tight">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </motion.div>
  );
}

// প্রিমিয়াম স্ট্যাট কার্ড কম্পোনেন্ট
function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-b from-[#16222c] to-[#0f171e] text-white flex flex-col items-center justify-center text-center shadow-xl border border-white/10 relative overflow-hidden group">
      <div className="absolute inset-0 bg-[#ff2e63]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="text-4xl lg:text-5xl font-black text-[#ff2e63] mb-2 tracking-tight">{number}</span>
      <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">{label}</span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-[#ff2e63] selection:text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-36 bg-gradient-to-b from-gray-50/50 via-white to-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-start gap-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff2e63]/10 text-[#ff2e63] text-xs font-extrabold uppercase tracking-wider border border-[#ff2e63]/20 shadow-sm">
                  <Sparkles size={14} />
                  <span>About EventHub</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1]">
                  We Make Every Event <span className="text-[#ff2e63]">Worth Remembering.</span>
                </h1>

                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
                  EventHub is your ultimate modern destination to discover, book, manage, and enjoy amazing live events seamlessly from a single unified platform.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link 
                    href="/all-events"
                    className="inline-flex items-center justify-center gap-2 bg-[#ff2e63] hover:bg-[#e02555] text-white px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-lg shadow-[#ff2e63]/25 cursor-pointer transform hover:-translate-y-0.5"
                  >
                    <span>Explore Events</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Link 
                    href="/login"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-sm cursor-pointer"
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative w-full h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop" 
                  alt="EventHub Platform Experience" 
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>

            </div>
          </Container>
        </section>

        {/* 2. OUR STORY SECTION */}
        <section className="py-24 border-y border-gray-100 bg-gray-50/40">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              <div className="relative w-full h-[360px] sm:h-[440px] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <Image 
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop" 
                  alt="Our Story Illustration" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col items-start gap-6">
                <div className="text-xs font-bold uppercase tracking-widest text-[#ff2e63] bg-[#ff2e63]/10 px-3 py-1 rounded-md">Our Journey</div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">Our Story</h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  EventHub was founded with a singular mission: to eliminate friction in event discovery and ticket booking. We envisioned a unified space where people could effortlessly connect with live entertainment, professional conferences, and cultural festivals.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Today, we proudly bridge the gap between creative event organizers and enthusiastic attendees looking for unforgettable concerts, workshops, and immersive experiences.
                </p>
                <Link 
                  href="/all-events"
                  className="inline-flex items-center gap-2 text-sm font-extrabold text-[#ff2e63] hover:text-[#e02555] transition-colors pt-2 cursor-pointer group"
                >
                  <span>Discover EventHub</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          </Container>
        </section>

        {/* 3. WHAT WE DO SECTION */}
        <section className="py-28">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff2e63]">Capabilities</span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2 mb-4">What We Do</h2>
              <p className="text-base text-gray-500">Everything you need to orchestrate or attend extraordinary events seamlessly.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard 
                icon={Compass} 
                title="Discover Events" 
                description="Explore handpicked events tailored precisely to your personal interests and location." 
              />
              <FeatureCard 
                icon={CalendarCheck} 
                title="Easy Booking" 
                description="Secure your spot instantly with streamlined reservation flows and instant confirmation." 
              />
              <FeatureCard 
                icon={SlidersHorizontal} 
                title="Event Management" 
                description="Empower organizers with full control over ticketing, schedules, and attendee metrics." 
              />
              <FeatureCard 
                icon={ShieldCheck} 
                title="Secure Experience" 
                description="Enjoy peace of mind with enterprise-grade data protection and validated tickets." 
              />
            </div>
          </Container>
        </section>

        {/* 4. OUR MISSION SECTION */}
        <section className="py-24 bg-[#121c24] text-white px-4 sm:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#ff2e63]/10 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff2e63] bg-white/5 px-4 py-1.5 rounded-full border border-white/10">Our Mission</span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              "Making Experiences More Accessible"
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
              Our mission is to make discovering and attending great events simple, convenient and enjoyable for everyone across the globe.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full pt-6">
              <div className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-[#ff2e63]/30 transition-colors">
                <CheckCircle2 className="text-[#ff2e63]" size={22} />
                <span className="font-bold text-sm tracking-wide">Simple & Easy</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-[#ff2e63]/30 transition-colors">
                <CheckCircle2 className="text-[#ff2e63]" size={22} />
                <span className="font-bold text-sm tracking-wide">Trusted Platform</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-[#ff2e63]/30 transition-colors">
                <CheckCircle2 className="text-[#ff2e63]" size={22} />
                <span className="font-bold text-sm tracking-wide">Better Experiences</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. HOW EVENTHUB WORKS */}
        <section className="py-28">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff2e63]">Workflow</span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2 mb-4">How EventHub Works</h2>
              <p className="text-base text-gray-500">Your journey to unforgettable experiences in 4 simple steps.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm relative flex flex-col gap-4">
                <span className="text-3xl font-black text-[#ff2e63]/30">01</span>
                <h3 className="text-lg font-bold text-gray-900">Discover</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Find events based on your exact interests, category, and preferred location.</p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm relative flex flex-col gap-4">
                <span className="text-3xl font-black text-[#ff2e63]/30">02</span>
                <h3 className="text-lg font-bold text-gray-900">Choose</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Explore comprehensive event details, time schedules, and available ticketing tiers.</p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm relative flex flex-col gap-4">
                <span className="text-3xl font-black text-[#ff2e63]/30">03</span>
                <h3 className="text-lg font-bold text-gray-900">Book</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Securely lock in your desired event bookings through robust payment integrations.</p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm relative flex flex-col gap-4">
                <span className="text-3xl font-black text-[#ff2e63]/30">04</span>
                <h3 className="text-lg font-bold text-gray-900">Enjoy</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Attend the live event, connect with communities, and create unforgettable memories.</p>
              </div>

            </div>
          </Container>
        </section>

  

        {/* 7. WHY CHOOSE EVENTHUB */}
        <section className="py-28">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff2e63]">Benefits</span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2 mb-4">Why Choose EventHub</h2>
              <p className="text-base text-gray-500">Designed from the ground up for modern event-goers and professionals.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard 
                icon={Globe} 
                title="Easy Event Discovery" 
                description="Smart curation ensures you never miss out on trending local happenings." 
              />
              <FeatureCard 
                icon={Lock} 
                title="Secure Booking" 
                description="Robust encryption and safe transactions keep your data completely secure." 
              />
              <FeatureCard 
                icon={Users} 
                title="Trusted Organizers" 
                description="Verified creators and hosts guarantee reliable, high-quality event experiences." 
              />
              <FeatureCard 
                icon={Smile} 
                title="User-Friendly Experience" 
                description="Clean interfaces, fast page loads, and intuitive navigation across all devices." 
              />
            </div>
          </Container>
        </section>

        {/* 8. OUR VALUES */}
        <section className="py-24 border-t border-gray-100 bg-gray-50/30">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff2e63]">Core Principles</span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2">Our Values</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-[#ff2e63]/10 text-[#ff2e63] flex items-center justify-center">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900">Trust</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  We believe every user deserves a safe, transparent, and completely reliable ticketing experience.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-[#ff2e63]/10 text-[#ff2e63] flex items-center justify-center">
                  <HeartHandshake size={28} />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900">Community</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  We connect people through shared passions, live concerts, and meaningful community events.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-[#ff2e63]/10 text-[#ff2e63] flex items-center justify-center">
                  <Lightbulb size={28} />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900">Innovation</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  We continuously improve the technology behind how people discover and attend live events.
                </p>
              </div>

            </div>
          </Container>
        </section>

      

      </main>

      <Footer />
    </div>
  );
}