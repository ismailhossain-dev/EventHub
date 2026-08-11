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
  ArrowLeft, 
  ShieldCheck 
} from 'lucide-react';
import Navbar from '@/components/shared/Navbar/Navbar';
import Footer from '@/components/shared/Footer/Footer';
import Container from '@/components/shared/Container/Container';
import BookingForm from '@/components/Forms/BookingForm/BookingForm';
import ReviewForm from '@/components/Forms/ReviewForm/ReviewForm';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

interface RoomDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function RoomDetailsPage({ params }: RoomDetailsPageProps) {
  const { id } = await params;
  
  console.log("details id", id);

  let room: any = null;

  try {
    const response = await axios.get(`${API_URL}/api/rooms/${id}`);
    room = response.data.data || response.data; // API স্ট্রাকচার অনুযায়ী
  } catch (err) {
    console.error("Error fetching room details:", err);
  }

  // ডেটা না পাওয়া গেলে ফলব্যাক বা এরর মেসেজ
  if (!room) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
        <Navbar />
        <Container>
          <div className="py-20 text-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Room Not Found</h2>
            <p className="text-gray-500">Could not load details for Room #{id}. Please try again later.</p>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#ff2e63] px-6 py-3 rounded-xl shadow-md"
            >
              <ArrowLeft size={16} /> Back to Listings
            </Link>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }

  const { 
    image, 
    title = 'Luxury Executive Suite', 
    roomNumber, 
    location = 'Chittagong, Bangladesh', 
    description = 'Experience unmatched comfort...', 
    category = 'Standard Room', 
    price = 4500, 
    amenities = [], 
    availability = true, 
    phone = '+880123456789', 
    capacity = '2 Persons',
    bedType = 'King Bed',
    size = '500 sq ft' 
  } = room;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />
      
      <Container>
        <div className="py-10 space-y-8">
          
          {/* Back Button */}
          <div>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-[#ff2e63] transition-colors bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100"
            >
              <ArrowLeft size={16} /> Back to Listings
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left & Center: Main Information & Forms */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Image Banner */}
              <div className="relative w-full h-[380px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
                {image ? (
                  <Image 
                    src={image} 
                    alt={title} 
                    fill 
                    className="object-cover"
                    priority
                  />
                ) : null}
                <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-white/20">
                  {category}
                </div>
              </div>

              {/* Title & Overview Card */}
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#ff2e63] bg-pink-50 px-3 py-1 rounded-full">
                      Room #{roomNumber || id}
                    </span>
                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2">
                      {title}
                    </h1>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-400 block font-medium">Price per night</span>
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

              {/* Booking Form Component */}
              <BookingForm  />

              {/* Review Form Component */}
              <ReviewForm />

            </div>

            {/* Right Column: Quick Info Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 sticky top-6 space-y-6">
                <h3 className="font-bold text-lg text-gray-900 border-b pb-3">
                  Reservation Summary
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex items-center justify-between text-gray-600">
                    <span className="flex items-center gap-2 font-medium">
                      <Bed size={16} className="text-gray-400" /> Bed Type:
                    </span>
                    <span className="font-bold text-gray-900">{bedType}</span>
                  </div>

                  <div className="flex items-center justify-between text-gray-600">
                    <span className="flex items-center gap-2 font-medium">
                      <Maximize size={16} className="text-gray-400" /> Room Size:
                    </span>
                    <span className="font-bold text-gray-900">{size}</span>
                  </div>

                  <div className="flex items-center justify-between text-gray-600">
                    <span className="flex items-center gap-2 font-medium">
                      <Tag size={16} className="text-gray-400" /> Capacity:
                    </span>
                    <span className="font-bold text-gray-900">{capacity}</span>
                  </div>

                  <div className="flex items-center justify-between text-gray-600">
                    <span className="flex items-center gap-2 font-medium">
                      <ShieldCheck size={16} className="text-gray-400" /> Status:
                    </span>
                    {availability ? (
                      <span className="inline-flex items-center gap-1 font-bold px-2.5 py-1 rounded-full text-xs bg-green-50 text-green-600">
                        <CheckCircle size={12} /> Available
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 font-bold px-2.5 py-1 rounded-full text-xs bg-red-50 text-red-600">
                        <XCircle size={12} /> Booked
                      </span>
                    )}
                  </div>
                </div>

                <hr className="border-gray-100" />

                {/* Direct Contact */}
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

              </div>
            </div>

          </div>

        </div>
      </Container>

      <Footer />
    </div>
  );
}