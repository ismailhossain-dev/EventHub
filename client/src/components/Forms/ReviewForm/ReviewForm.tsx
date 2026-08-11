'use client';

import { useState } from 'react';
import { Star, User, Mail, MessageSquare } from 'lucide-react';

export default function ReviewForm() {
  const [reviewData, setReviewData] = useState({
    name: '',
    email: '',
    rating: 5,
    message: '',
  });

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("--- Review Form Data ---", reviewData);
    alert("Review submitted successfully! Check console for data.");
    setReviewData({ name: '', email: '', rating: 5, message: '' });
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 space-y-6">
      <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
        <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
          <Star size={20} />
        </div>
        <div>
          <h3 className="font-extrabold text-lg text-gray-900">Leave a Review</h3>
          <p className="text-xs text-gray-400">Share your experience about this stay</p>
        </div>
      </div>

      <form onSubmit={handleReviewSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-600 mb-1.5">Your Name</label>
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus-within:border-[#ff2e63] transition-colors">
              <User size={16} className="text-gray-400 mr-2.5" />
              <input 
                type="text" 
                required
                placeholder="Jane Doe" 
                value={reviewData.name}
                onChange={(e) => setReviewData({...reviewData, name: e.target.value})}
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
                placeholder="jane@example.com" 
                value={reviewData.email}
                onChange={(e) => setReviewData({...reviewData, email: e.target.value})}
                className="w-full bg-transparent text-sm text-gray-800 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Star Rating Select */}
        <div>
          <label className="block text-xs font-bold uppercase text-gray-600 mb-1.5">Event / Room Rating (Up to 5)</label>
          <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
            <Star size={18} className="text-amber-500" />
            <select 
              value={reviewData.rating}
              onChange={(e) => setReviewData({...reviewData, rating: Number(e.target.value)})}
              className="w-full bg-transparent text-sm font-bold text-gray-800 outline-none cursor-pointer"
            >
              <option value="5">5 Stars - Excellent</option>
              <option value="4">4 Stars - Very Good</option>
              <option value="3">3 Stars - Good</option>
              <option value="2">2 Stars - Fair</option>
              <option value="1">1 Star - Poor</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-gray-600 mb-1.5">Your Review Message</label>
          <div className="flex items-start bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus-within:border-[#ff2e63] transition-colors">
            <MessageSquare size={16} className="text-gray-400 mr-2.5 mt-1" />
            <textarea 
              rows={3}
              required
              placeholder="Write your feedback here..." 
              value={reviewData.message}
              onChange={(e) => setReviewData({...reviewData, message: e.target.value})}
              className="w-full bg-transparent text-sm text-gray-800 outline-none resize-none"
            />
          </div>
        </div>

        <button 
          type="submit"
          className="w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider bg-[#ff2e63] hover:bg-[#e02454] text-white shadow-lg shadow-pink-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <Star size={16} /> Submit Review
        </button>
      </form>
    </div>
  );
}