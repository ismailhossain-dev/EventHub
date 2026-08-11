'use client';

import { useState } from 'react';
import { Calendar, User, Mail, Phone, MessageSquare, Send } from 'lucide-react';

export default function BookingForm() {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("--- Booking Form Data ---", bookingData);
    alert("Booking form submitted successfully! Check console for data.");
    setBookingData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 space-y-6">
      <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
        <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-[#ff2e63]">
          <Calendar size={20} />
        </div>
        <div>
          <h3 className="font-extrabold text-lg text-gray-900">Book This Room</h3>
          <p className="text-xs text-gray-400">Fill up the details below to reserve your stay</p>
        </div>
      </div>

      <form onSubmit={handleBookingSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-600 mb-1.5">Full Name</label>
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus-within:border-[#ff2e63] transition-colors">
              <User size={16} className="text-gray-400 mr-2.5" />
              <input 
                type="text" 
                required
                placeholder="John Doe" 
                value={bookingData.name}
                onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                className="w-full bg-transparent text-sm text-gray-800 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-600 mb-1.5">Email Address</label>
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus-within:border-[#ff2e63] transition-colors">
              <Mail size={16} className="text-gray-400 mr-2.5" />
              <input 
                type="email" 
                required
                placeholder="john@example.com" 
                value={bookingData.email}
                onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                className="w-full bg-transparent text-sm text-gray-800 outline-none"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-gray-600 mb-1.5">Phone Number</label>
          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus-within:border-[#ff2e63] transition-colors">
            <Phone size={16} className="text-gray-400 mr-2.5" />
            <input 
              type="tel" 
              required
              placeholder="+880 1XXXXXXXXX" 
              value={bookingData.phone}
              onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
              className="w-full bg-transparent text-sm text-gray-800 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-gray-600 mb-1.5">Special Message / Requests</label>
          <div className="flex items-start bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus-within:border-[#ff2e63] transition-colors">
            <MessageSquare size={16} className="text-gray-400 mr-2.5 mt-1" />
            <textarea 
              rows={3}
              placeholder="Any special instructions..." 
              value={bookingData.message}
              onChange={(e) => setBookingData({...bookingData, message: e.target.value})}
              className="w-full bg-transparent text-sm text-gray-800 outline-none resize-none"
            />
          </div>
        </div>

        <button 
          type="submit"
          className="w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider bg-[#ff2e63] hover:bg-[#e02454] text-white shadow-lg shadow-pink-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <Send size={16} /> Confirm Booking
        </button>
      </form>
    </div>
  );
}