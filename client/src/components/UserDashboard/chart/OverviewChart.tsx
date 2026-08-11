// ==========================================
// 1. COMPONENT: SpendingChart.tsx
// ==========================================
"use client";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const spendingChartData = [
  { month: "Jan", spent: 4500 },
  { month: "Feb", spent: 0 },
  { month: "Mar", spent: 10000 },
  { month: "Apr", spent: 0 },
  { month: "May", spent: 10000 },
  { month: "Jun", spent: 4500 },
  { month: "Jul", spent: 18000 },
  { month: "Aug", spent: 10000 },
];

export function OverviewChart() {
  return (
    <section className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-slate-900">Spending Analytics</h2>
          <p className="text-xs text-slate-400 mt-0.5">Your monthly expenditure overview for 2026</p>
        </div>
        <div className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-100">
          Yearly View
        </div>
      </div>
      
      <div className="h-72 w-full pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={spendingChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorSpent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
            <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(val) => `৳${val}`} />
            <Tooltip 
              formatter={(value: any) => [`৳${value}`, "Spent"]}
              contentStyle={{ backgroundColor: "#ffffff", borderRadius: "16px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
              labelStyle={{ fontWeight: "bold", color: "#0f172a", marginBottom: "4px" }}
            />
            <Area type="monotone" dataKey="spent" stroke="#2563eb" strokeWidth={2.5} fillOpacity={1} fill="url(#colorSpent)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
