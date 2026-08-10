import Container from "@/components/shared/Container/Container";
import axios from "axios";
import Link from "next/link";
import React from "react";
import {
  HeartHandshake,
  PartyPopper,
  Briefcase,
  Music,
  UtensilsCrossed,
  GraduationCap,
  Building2,
  Layers,
  Sparkles,
  CalendarCheck,
} from "lucide-react";
import { TiHomeOutline } from "react-icons/ti";
import { MdFamilyRestroom } from "react-icons/md";
import { SiInfluxdb } from "react-icons/si";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const findCategories = async () => {
  try {
    const res = await axios.get(`${API_URL}/rooms`);
    return res.data?.data || res.data || [];
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return [];
  }
};

// উপলব্ধ আইকনগুলোর একটি লিস্ট, যাতে প্রতিটি কার্ডে ভিন্ন ভিন্ন আইকন আসে
const categoryIcons = [
  <TiHomeOutline key="1" size={28} />,
  <PartyPopper key="2" size={28} />,
  <Briefcase key="3" size={28} />,
  <Music key="4" size={28} />,
  <SiInfluxdb key="5" size={28} />,
  <GraduationCap key="6" size={28} />,
];

const PopularCategories = async () => {
  const categories = await findCategories();

  // ইউনিক ক্যাটাগরি বের করা
  const allCategories = categories
    .map((item: any) => item?.category || item?.categoryName || item?.type)
    .filter(Boolean);
  const finalCategory: string[] = Array.from(new Set(allCategories));

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50/50">
      <Container>
        {/* সেকশন হেডার */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide text-gray-900 uppercase">
            Popular Categories
          </h2>
          <div className="w-16 h-1 bg-[#ff2e63] mx-auto mt-2 rounded-full"></div>
          <p className="text-gray-500 text-xs md:text-sm mt-3 max-w-lg mx-auto">
            Explore our top-rated event categories and find the best spaces and
            venues tailored for your special gatherings.
          </p>
        </div>

        {/* ক্যাটাগরি কার্ড গ্রিড ও লেআউট */}
        {finalCategory.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {finalCategory.map((category, index) => {
              // ইনডেক্স অনুযায়ী তালিকা থেকে ভিন্ন ভিন্ন আইকন অ্যাসাইন করা
              const currentIcon = categoryIcons[index % categoryIcons.length];

              return (
                <Link
                  key={index}
                  href={`/all-events?category=${encodeURIComponent(category)}`}
                  className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#ff2e63]/40 transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center cursor-pointer relative overflow-hidden"
                >
                  {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff2e63]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* আইকন কন্টেইনার */}
                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-gray-50 text-[#ff2e63] flex items-center justify-center mb-4 group-hover:bg-[#ff2e63] group-hover:text-white transition-all duration-300 shadow-inner">
                    {currentIcon}
                  </div>

                  {/* ক্যাটাগরি নাম */}
                  <h3 className="relative z-10 font-bold text-gray-800 text-xs md:text-sm tracking-wide group-hover:text-[#ff2e63] transition-colors line-clamp-1">
                    {category}
                  </h3>

                  <span className="relative z-10 text-[10px] text-gray-400 mt-1 group-hover:text-gray-600 transition-colors">
                    View Events &rarr;
                  </span>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 shadow-sm text-gray-400 text-sm">
            No categories found right now.
          </div>
        )}
      </Container>
    </section>
  );
};

export default PopularCategories;
