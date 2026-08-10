import Container from "@/components/shared/Container/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const placesData = [
  {
    id: 1,
    title: "Texas",
    image:
      "https://images.unsplash.com/photo-1531219436234-97593c1533fb?q=80&w=1000&auto=format&fit=crop",
    size: "col-span-1 lg:col-span-7 row-span-2", // বড় কার্ড
    height: "h-[300px] lg:h-[480px]",
  },
  {
    id: "2",
    title: "California",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1000&auto=format&fit=crop",
    size: "col-span-1 lg:col-span-5", // ডানপাশের ওপরের ছোট কার্ড
    height: "h-[220px] lg:h-[225px]",
  },
  {
    id: "3",
    title: "Washington",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop",
    size: "col-span-1 sm:col-span-1 lg:col-span-2 sm:col-start-1 lg:col-start-8", // নিচের বামের ছোট কার্ড
    height: "h-[220px] lg:h-[235px]",
  },
  {
    id: "4",
    title: "Los Angeles",
    image:
      "https://images.unsplash.com/photo-1580655653885-65763b2597d0?q=80&w=1000&auto=format&fit=crop",
    size: "col-span-1 sm:col-span-1 lg:col-span-3", // নিচের ডানের ছোট কার্ড
    height: "h-[220px] lg:h-[235px]",
  },
];

function MostVisitedPlaces() {
  return (
    <section className="py-16 bg-white">
      <Container>
        {/* সেকশন হেডার */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-wider text-gray-900 uppercase">
            MOST VISITED PLACES
          </h2>
          <p className="text-gray-400 text-xs md:text-sm mt-1 tracking-wide">
            Browse Popular Location
          </p>
          <div className="w-16 h-1 bg-[#ff2e63] mx-auto mt-2 rounded-full"></div>
        </div>

        {/* গ্রিড লেআউট */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {placesData.map((place) => (
            <Link
              key={place.id}
              href={`/all-events?location=${encodeURIComponent(place.title)}`}
              className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer ${place.size} ${place.height}`}
            >
              {/* ব্যাকগ্রাউন্ড ইমেজ */}
              <img
                src={place.image}
                alt={place.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* ডার্ক গ্রেডিয়েন্ট ওভারলে (টেক্সট ফুটিয়ে তোলার জন্য) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors duration-300"></div>

              {/* কার্ডের টাইটেল টেক্সট */}
              <div className="absolute bottom-6 left-6 z-10">
                <h3 className="text-white text-xl md:text-2xl font-bold tracking-wide drop-shadow-md">
                  {place.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default MostVisitedPlaces;
