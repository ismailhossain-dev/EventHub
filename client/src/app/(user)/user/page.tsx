"use client";
import {
  CalendarDays,
  Clock,
  CheckCircle,
  Wallet,
  Bell,
  Eye,
  ChevronRight,
} from "lucide-react";
import { OverviewChart } from "@/components/UserDashboard/chart/OverviewChart";
import { useSession } from "next-auth/react";

// --- MOCK DATA ---
const userProfile = {
  name: "Mohammad",
};

const statsData = [
  { title: "Total Bookings", value: "0", icon: CalendarDays, helper: "All time reservations", href: "/bookings" },
  { title: "Pending Bookings", value: "0", icon: Clock, helper: "Awaiting confirmation", href: "/bookings/pending" },
  { title: "Completed Bookings", value: "0", icon: CheckCircle, helper: "Successfully finished stays", href: "/bookings/completed" },
  { title: "Total Spent", value: "৳00", icon: Wallet, helper: "Lifetime expenditure", href: "/billing" },
];

const recentBookings = [
  { id: 1, room: "Deluxe Sea View Room", checkIn: "Aug 15, 2026", checkOut: "Aug 17, 2026", guests: 2, totalPrice: "৳10,000", status: "Pending" },
  { id: 2, room: "Executive King Suite", checkIn: "Jul 20, 2026", checkOut: "Jul 23, 2026", guests: 2, totalPrice: "৳18,000", status: "Completed" },
  { id: 3, room: "Standard Twin Room", checkIn: "Jun 05, 2026", checkOut: "Jun 06, 2026", guests: 1, totalPrice: "৳4,500", status: "Rejected" },
  { id: 4, room: "Oceanfront Deluxe", checkIn: "May 12, 2026", checkOut: "May 14, 2026", guests: 2, totalPrice: "৳10,000", status: "Completed" },
];

export default function UserDashboardOverview() {
  const {data:session, status} = useSession()
  if(status === "loading"){
    return <p>...</p>
  }
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Pending":
        return <span className="px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-xs font-semibold">Pending</span>;
      case "Completed":
        return <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-semibold">Completed</span>;
      case "Rejected":
        return <span className="px-3 py-1 bg-rose-50 text-rose-700 border border-rose-200 rounded-full text-xs font-semibold">Rejected</span>;
      default:
        return <span className="px-3 py-1 bg-slate-50 text-slate-700 border border-slate-200 rounded-full text-xs font-semibold">{status}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 p-4 sm:p-8 antialiased">
      <main className="max-w-7xl w-full mx-auto space-y-8">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
              Welcome back, {session?.user?.name}! 👋
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Here is a summary of your recent activities and bookings overview.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-3 rounded-2xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
              <Bell size={18} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            </button>
          </div>
        </div>

        {/* ================= STATISTICS GRID (CLICKABLE CARDS) ================= */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statsData.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                // href={stat.href}
                className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all flex items-center justify-between group"
              >
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide group-hover:text-blue-600 transition-colors">
                    {stat.title}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{stat.value}</h3>
                  <p className="text-[11px] text-slate-400 font-medium">{stat.helper}</p>
                </div>
                <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Icon size={24} />
                </div>
              </div>
            );
          })}
        </section>

        {/* ================= SPENDING ANALYTICS CHART ================= */}
        <OverviewChart/>

        {/* ================= RECENT BOOKINGS TABLE ================= */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900">Recent Bookings</h2>
            {/* <Link href="/bookings" className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
              View All <ChevronRight size={14} />
            </Link> */}
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-200">
                    <th className="py-4 px-6">Room</th>
                    <th className="py-4 px-6">Check In</th>
                    <th className="py-4 px-6">Check Out</th>
                    <th className="py-4 px-6">Guests</th>
                    <th className="py-4 px-6">Total Price</th>
                    <th className="py-4 px-6">Status</th>
                    <th className="py-4 px-6 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                  {recentBookings.map((b) => (
                    <tr key={b.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-slate-900">{b.room}</td>
                      <td className="py-4 px-6 text-slate-500">{b.checkIn}</td>
                      <td className="py-4 px-6 text-slate-500">{b.checkOut}</td>
                      <td className="py-4 px-6 text-slate-500">{b.guests}</td>
                      <td className="py-4 px-6 font-semibold text-slate-900">{b.totalPrice}</td>
                      <td className="py-4 px-6">{getStatusBadge(b.status)}</td>
                      <td className="py-4 px-6 text-right">
                        <div className="inline-block p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer">
                          <Eye size={15} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}