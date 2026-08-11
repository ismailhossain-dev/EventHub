"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import useAxiosSecure from "@/hook/useAxiosSecure";
import { Booking } from "@/types/room";
import { Trash2, CalendarCheck, Clock, CheckCircle2, ShieldAlert } from "lucide-react";
import { toast } from "react-toastify";

export default function Bookings() {
  const { data: session, status } = useSession();
  const axiosSecure = useAxiosSecure();

  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const getBookings = async () => {
      if (status !== "authenticated" || !session?.user?.email) {
        return;
      }

      try {
        const email = encodeURIComponent(session.user.email);
        const res = await axiosSecure.get(`/api/bookings/email/${email}`);

        if (res.data.success) {
          setBookings(res.data.data);
        }
      } catch (error: any) {
        console.error("❌ Booking fetch error:", error?.response?.data || error);
        // toast.error("Failed to load your bookings.");
      }
    };

    getBookings();
  }, [session, status, axiosSecure]);

  // Handle Delete Booking
  const handleDelete = async (id: string) => {
  

    try {
      const res = await axiosSecure.delete(`/api/bookings/${id}`);
      if (res.data.success || res.status === 200) {
        setBookings((prev) => prev.filter((item) => item.id !== id));
        toast.success("Booking cancelled successfully!");
      }
    } catch (error: any) {
      console.error("❌ Delete error:", error);
      toast.error(error?.response?.data?.message || "Failed to cancel booking");
    }
  };

  if (status === "loading") {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 font-sans">
      {/* Gorgeous Dashboard Header Banner */}
      <div className="bg-gradient-to-r from-[#1c2d37] to-[#121c24] rounded-3xl p-6 md:p-8 text-white shadow-xl mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-48 h-48 bg-[#ff2e63]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
            <CalendarCheck size={14} className="text-[#ff2e63]" />
            <span>User Dashboard</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black tracking-tight">
            My Room Bookings
          </h1>
          <p className="text-xs md:text-sm text-gray-300 max-w-lg leading-relaxed">
            View all your reserved rooms, check confirmation statuses, and manage your stay requests seamlessly.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/10 px-5 py-4 rounded-2xl flex items-center gap-4 relative z-10 self-start md:self-auto">
          <div className="w-12 h-12 rounded-xl bg-[#ff2e63]/20 flex items-center justify-center text-[#ff2e63] font-black text-xl">
            {bookings.length}
          </div>
          <div>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Total Booked</p>
            <p className="text-sm font-bold text-white">Reservations</p>
          </div>
        </div>
      </div>

      {/* Clean Table Container */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/80 text-gray-600 text-xs font-bold uppercase tracking-wider border-b border-gray-100">
                <th className="py-4 px-6">Room Title</th>
                <th className="py-4 px-6">Contact Details</th>
                <th className="py-4 px-6">Price</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {bookings.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-16 text-center text-gray-400 font-medium">
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <ShieldAlert size={36} className="text-gray-300" />
                      <p className="text-sm">You haven&apos;t booked any rooms yet.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                bookings.map((booking) => {
                  const isConfirmed = booking.status?.toUpperCase() === "CONFIRMED";

                  return (
                    <tr key={booking.id} className="hover:bg-gray-50/60 transition-colors">
                      {/* Room Title */}
                      <td className="py-4 px-6 font-extrabold text-gray-900 max-w-xs truncate">
                        {booking.roomTitle}
                      </td>

                      {/* Guest Info */}
                      <td className="py-4 px-6">
                        <div className="font-bold text-gray-800 text-xs">{booking.name}</div>
                        <div className="text-[11px] text-gray-500">{booking.email}</div>
                        <div className="text-[11px] text-gray-400">{booking.phone}</div>
                      </td>

                      {/* Price */}
                      <td className="py-4 px-6 font-bold text-gray-900 text-xs">
                        ৳ {booking.price}
                      </td>

                      {/* Status Badge (View Only for User) */}
                      <td className="py-4 px-6">
                        <span
                          className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border ${
                            isConfirmed
                              ? "bg-emerald-50 text-emerald-600 border-emerald-200"
                              : "bg-amber-50 text-amber-600 border-amber-200"
                          }`}
                        >
                          {isConfirmed ? <CheckCircle2 size={13} /> : <Clock size={13} />}
                          {booking.status || "PENDING"}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-6 text-center">
                        <button
                          onClick={() => handleDelete(booking.id)}
                          title="Cancel Booking"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors text-xs font-bold cursor-pointer"
                        >
                          <Trash2 size={14} />
                          <span>Cancel</span>
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}