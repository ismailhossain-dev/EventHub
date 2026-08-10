
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { 
  MapPin, 
  Tag, 
  Phone, 
  CheckCircle, 
  XCircle, 
  Bed, 
  Maximize, 
  Calendar, 
  ArrowLeft, 
  ShieldCheck, 
  Wifi, 
  Tv, 
  Coffee, 
  Sparkles 
} from 'lucide-react';
import Navbar from '@/components/shared/Navbar/Navbar';
import Footer from '@/components/shared/Footer/Footer';
import Container from '@/components/shared/Container/Container';


const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

interface RoomDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const RoomDetailsPage = async ({ params }: RoomDetailsPageProps) => {
  const { id } = await params;
  
  console.log("details id", id);

  try {
    const response = await axios.get(`${API_URL}/api/rooms/${id}`);
    const room = response.data.data || response.data; // API স্ট্রাকচার অনুযায়ী

    const { 
      image, 
      title, 
      roomNumber, 
      location, 
      description, 
      category, 
      price, 
      amenities = [], 
      availability, 
      phone, 
      createdAt,
      capacity,
      bedType,
      size 
    } = room;

    return (
      <div>
        <Navbar/>
        {/* main details */}
        <Container>
            <div className="min-h-screen bg-gray-50 py-10 font-sans">
        <div className="">
          
          {/* Back Button */}
          <div className="mb-6">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-[#ff2e63] transition-colors bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100"
            >
              <ArrowLeft size={16} /> Back to Listings
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left & Center: Main Information (2 Columns on large screens) */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Image Banner */}
              <div className="relative w-full h-[380px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
                <Image 
                  src={image || '/assets/hero.avif'} 
                  alt={title || 'Room Image'} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-white/20">
                  {category || 'Standard'}
                </div>
              </div>

              {/* Title & Overview Card */}
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#ff2e63] bg-pink-50 px-3 py-1 rounded-full">
                      Room #{roomNumber || '101'}
                    </span>
                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2">
                      {title}
                    </h1>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-400 block">Price per night</span>
                    <span className="text-2xl md:text-3xl font-extrabold text-[#ff2e63]">
                      ৳{price}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <MapPin size={16} className="text-[#ff2e63]" />
                  <span>{location}</span>
                </div>

                <hr className="border-gray-100 my-4" />

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Description</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>

              {/* Amenities Section */}
              {amenities.length > 0 && (
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Sparkles size={18} className="text-[#ff2e63]" /> Amenities & Features
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {amenities.map((amenity: string, index: number) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-2.5 bg-gray-50 px-4 py-3 rounded-2xl text-xs font-semibold text-gray-700 border border-gray-100"
                      >
                        <CheckCircle size={14} className="text-[#ff2e63]" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Booking / Quick Info Sidebar */}
            <div className="space-y-6">
              
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 sticky top-6 space-y-6">
                <h3 className="font-bold text-lg text-gray-900 border-b pb-3">
                  Reservation Summary
                </h3>

                {/* Quick Info Grid */}
                <div className="space-y-4 text-sm">
                  <div className="flex items-center justify-between text-gray-600">
                    <span className="flex items-center gap-2 font-medium">
                      <Bed size={16} className="text-gray-400" /> Bed Type:
                    </span>
                    <span className="font-bold text-gray-900">{bedType || 'King Bed'}</span>
                  </div>

                  <div className="flex items-center justify-between text-gray-600">
                    <span className="flex items-center gap-2 font-medium">
                      <Maximize size={16} className="text-gray-400" /> Room Size:
                    </span>
                    <span className="font-bold text-gray-900">{size || '500 sq ft'}</span>
                  </div>

                  <div className="flex items-center justify-between text-gray-600">
                    <span className="flex items-center gap-2 font-medium">
                      <Tag size={16} className="text-gray-400" /> Capacity:
                    </span>
                    <span className="font-bold text-gray-900">{capacity || 2} Persons</span>
                  </div>

                  <div className="flex items-center justify-between text-gray-600">
                    <span className="flex items-center gap-2 font-medium">
                      <Calendar size={16} className="text-gray-400" /> Listed On:
                    </span>
                    <span className="font-bold text-gray-900">
                      {createdAt ? new Date(createdAt).toLocaleDateString() : 'N/A'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-gray-600">
                    <span className="flex items-center gap-2 font-medium">
                      <ShieldCheck size={16} className="text-gray-400" /> Status:
                    </span>
                    <span className={`inline-flex items-center gap-1 font-bold px-2.5 py-1 rounded-full text-xs ${availability ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                      {availability ? <CheckCircle size={12} /> : <XCircle size={12} />}
                      {availability ? 'Available' : 'Booked'}
                    </span>
                  </div>
                </div>

                <hr className="border-gray-100" />

                {/* Contact Host / Phone */}
                {phone && (
                  <div className="bg-gray-50 p-4 rounded-2xl flex items-center justify-between border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#ff2e63]/10 flex items-center justify-center text-[#ff2e63]">
                        <Phone size={18} />
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-400 block font-semibold uppercase">Direct Call</span>
                        <span className="text-xs font-bold text-gray-800">{phone}</span>
                      </div>
                    </div>
                    <a 
                      href={`tel:${phone}`} 
                      className="text-xs font-bold bg-[#ff2e63] text-white px-3 py-2 rounded-xl shadow-sm hover:bg-[#e02454] transition-all"
                    >
                      Call Now
                    </a>
                  </div>
                )}

                {/* Get Ticket / Book Button */}
                <button 
                  disabled={!availability}
                  className={`w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all shadow-md ${
                    availability 
                      ? 'bg-[#ff2e63] hover:bg-[#e02454] text-white cursor-pointer shadow-pink-500/20' 
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {availability ? 'Get Ticket / Book Now' : 'Currently Unavailable'}
                </button>

              </div>

            </div>

          </div>

        </div>
      </div>
        </Container>
        <Footer/>
      </div>
    );

  } catch (error) {
    console.error("Failed to fetch room details:", error);

    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">Room Not Found</h1>
        <p className="text-gray-500 text-sm mb-6">The room you are looking for might have been removed or does not exist.</p>
        <Link 
          href="/" 
          className="bg-[#ff2e63] text-white font-bold px-6 py-3 rounded-full text-sm shadow-md hover:bg-[#e02454] transition-all"
        >
          Back to Home
        </Link>
      </div>
    );
  }
};

export default RoomDetailsPage;