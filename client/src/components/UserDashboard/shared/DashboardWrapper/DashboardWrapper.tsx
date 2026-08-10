"use client";
import Navbar from "@/components/UserDashboard/shared/Navbar/Navbar";
import Sidebar from "@/components/UserDashboard/shared/Sidebar/Sidebar";
import React, { useState } from "react";

interface childrenProps {
  children?: React.ReactNode;
}

const DashboardWrapper = ({ children }: childrenProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-gray-50 overflow-hidden font-sans">

      {/* মোবাইল ওভারলে */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 lg:hidden"
        />
      )}

      {/* Sidebar - লাইট থিম স্টাইল */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white text-gray-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 border-r border-gray-100 shadow-sm ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden lg:ml-64 w-full">
        <Navbar isOpen={isOpen} onMenuToggle={() => setIsOpen(!isOpen)} />

        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50/50 w-full">
          {children}
        </main>
      </div>

    </div>
  );
};

export default DashboardWrapper;