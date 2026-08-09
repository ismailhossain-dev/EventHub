import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { Room } from '@/types/room';

interface RoomCardProps {
  room: Room;
}

const RoomCard = ({ room }: RoomCardProps) => {
  // room ডাটার ভেতর id, date, description ইত্যাদি না থাকলে ফলব্যাক হ্যান্ডেল করার জন্য
  const { id, image, title, location, price, date = "FEB 14-2028" } = room as any;

  return (
    <Link 
      href={`/rooms/${id || 'details'}`} 
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full cursor-pointer no-underline text-inherit"
    >
      {/* Image Container */}
      <div className="relative w-full h-[220px] overflow-hidden bg-gray-100">
        <Image 
          src={image || '/assets/hero.avif'} 
          alt={title || 'Room Image'} 
          fill 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Date Badge (Matched with reference design) */}
        <div className="absolute left-4 bottom-[-20px] w-16 h-16 bg-[#ff2e63] text-white rounded-full flex flex-col items-center justify-center text-center shadow-lg border-2 border-white z-10 text-[10px] font-bold uppercase tracking-wider leading-tight">
          <span className="text-[11px] font-extrabold">{date.split(' ')[0] || 'FEB'}</span>
          <span>{date.split(' ')[1] || '14-2028'}</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 pt-8 flex flex-col flex-grow justify-between">
        
        <div className="space-y-2">
          {/* Title */}
          <h3 className="font-bold text-lg text-gray-900 group-hover:text-[#ff2e63] transition-colors line-clamp-1">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">
            {room.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque."}
          </p>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-gray-500 text-xs pt-1">
            <MapPin size={14} className="text-[#ff2e63] shrink-0" />
            <span className="truncate">{location}</span>
          </div>
        </div>

        {/* Footer / Get Ticket Bar */}
        <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-700">
            Get Ticket
          </span>
          <span className="text-sm font-extrabold text-[#ff2e63]">
            {price || '$5-$10'}
          </span>
        </div>

      </div>
    </Link>
  );
};

export default RoomCard;