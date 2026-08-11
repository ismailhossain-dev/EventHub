"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  User,
  Mail,
  Lock,
  ArrowRight,
  Calendar,
  Eye,
  EyeOff,
  ArrowLeft,
} from "lucide-react";
import Container from "@/components/shared/Container/Container";
import useAxiosSecure from "@/hook/useAxiosSecure";
// import bcrypt from "bcryptjs";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
const RegisterForm = () => {
  // State for registration inputs and password visibility
  const [name, setName] = useState("ismailcodes");
  const [email, setEmail] = useState("ismailcodes@gmail.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
 const axiosSecure = useAxiosSecure();
const router = useRouter()
const handleSubmit = async (e: React.FormEvent) => {
  
  e.preventDefault();

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // const hashedPassword = await bcrypt.hash(password, 10);
  const userData = {
    name,
    email,
      // password: hashedPassword,//password convert hash
      password
  };

  try {
    const res = await axiosSecure.post("/api/users", userData);

    console.log("User created:", res.data);

    toast.success(`Account created successfully for: ${name} (${email})`);
    router.push("/login")
  } catch (error: any) {
    console.log("Registration error:", error);
  }
};

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col justify-center py-8 px-4 font-sans">
      <Container>
        {/* Main Card Wrapper */}
        <div className="w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 border border-gray-100">
          {/* Left Side: Image, Back Button & Branding Overlay */}
          <div className="relative hidden lg:flex flex-col justify-between p-10 text-white overflow-hidden bg-gray-900 min-h-[600px]">
            <div className="absolute inset-0 z-0">
              <Image
                src="/assets/hero.avif"
                alt="Event Hub Register"
                fill
                priority
                className="w-full h-full object-cover brightness-[0.5]"
              />
            </div>

            {/* Back to Home Button Inside Image */}
            <div className="relative z-10">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#ff2e63] transition-colors bg-black/40 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-white/20"
              >
                <ArrowLeft size={16} /> Back to Home
              </Link>
            </div>

            {/* Bottom Branding */}
            <div className="relative z-10 space-y-3">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold border border-white/20">
                <Calendar size={14} className="text-[#ff2e63]" /> Event Hub
                Platform
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight">
                Join Our Community Today.
              </h2>
              <p className="text-gray-300 text-xs leading-relaxed">
                Create an account to book event tickets, explore local venues,
                and get personalized updates instantly.
              </p>
            </div>
          </div>

          {/* Right Side: Register Form */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            {/* Mobile Back Button (Only shows on small screens where left image is hidden) */}
            <div className="lg:hidden mb-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-[#ff2e63] transition-colors bg-gray-50 px-4 py-2 rounded-full border border-gray-200"
              >
                <ArrowLeft size={16} /> Back to Home
              </Link>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                Create Account
              </h2>
              <p className="text-gray-500 text-xs mt-1">
                Please fill in your details to get started.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name Field */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Full Name
                </label>
                <div className="relative flex items-center">
                  <User size={18} className="absolute left-4 text-gray-400" />
                  <input
                    type="text"
                    // value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="ismailcodes"
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-3 pl-12 pr-4 text-sm text-gray-800 focus:outline-none focus:border-[#ff2e63] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Email Address
                </label>
                <div className="relative flex items-center">
                  <Mail size={18} className="absolute left-4 text-gray-400" />
                  <input
                    type="email"
                    // value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ismailcodes@gmail.com"
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-3 pl-12 pr-4 text-sm text-gray-800 focus:outline-none focus:border-[#ff2e63] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Password
                </label>
                <div className="relative flex items-center">
                  <Lock size={18} className="absolute left-4 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-3 pl-12 pr-12 text-sm text-gray-800 focus:outline-none focus:border-[#ff2e63] focus:bg-white transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Confirm Password
                </label>
                <div className="relative flex items-center">
                  <Lock size={18} className="absolute left-4 text-gray-400" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-3 pl-12 pr-12 text-sm text-gray-800 focus:outline-none focus:border-[#ff2e63] focus:bg-white transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#ff2e63] hover:bg-[#e02454] text-white font-bold py-3.5 rounded-2xl transition-all shadow-lg shadow-pink-500/20 text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                Sign Up <ArrowRight size={16} />
              </button>
            </form>

            {/* Footer Login Link */}
            <div className="mt-6 text-center text-xs text-gray-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-bold text-[#ff2e63] hover:underline"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RegisterForm;
