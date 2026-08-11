"use client";

import React, { useState } from "react";
import useAxiosSecure from "@/hook/useAxiosSecure";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  ShieldCheck,
  Copy,
  Ticket,
  CalendarDays,
  Heart,
  Edit2,
  X,
  Loader2,
  User,
  Globe,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

interface UserProfileData {
  _id?: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  district?: string;
  division?: string;
  role?: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  image?: string;
}

interface FormData {
  name: string;
  phone: string;
  address: string;
  district: string;
  division: string;
}

const Profile = () => {
  const { data: session, status: sessionStatus } = useSession();
  const axiosSecure = useAxiosSecure();

  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Tanstack Query দিয়ে ইউজারের ডাটা ফেচ করা
  const {
    data: responseData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user-profile", session?.user?.email || ""],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/api/users?email=${session?.user?.email}`
      );
      return res.data;
    },
    enabled: !!session?.user?.email,
  });

  const user: UserProfileData = responseData?.data || responseData?.result || {};

  // React Hook Form সেটআপ
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    values: {
      name: user?.name || "",
      phone: user?.phone || "",
      address: user?.address || "",
      district: user?.district || "",
      division: user?.division || "",
    },
  });

  // প্রোফাইল আপডেট ফাংশন
  const onUpdateProfile = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const res = await axiosSecure.patch(
        `/api/users?email=${session?.user?.email}`,
        data
      );

      if (res.data.modifiedCount > 0 || res.data.success) {
        toast.success(res.data.message || "Profile updated successfully!");
        await refetch();
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Update failed:", error);
      toast.error("Something went wrong while updating profile.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (sessionStatus === "loading" || isLoading) {
    return (
      <div className="min-h-screen bg-gray-50/50 p-4 sm:p-8 flex items-center justify-center animate-pulse">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 space-y-6">
            <div className="h-72 bg-gray-200 rounded-3xl"></div>
            <div className="h-44 bg-gray-200 rounded-3xl"></div>
          </div>
          <div className="lg:col-span-8 h-[500px] bg-gray-200 rounded-3xl"></div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return "15 Jun 2026";
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const handleCopyId = (id?: string | null) => {
    if (id) {
      navigator.clipboard.writeText(id);
      toast.info("Account ID copied to clipboard!");
    }
  };

  const defaultEventImage =
    "https://res.cloudinary.com/ddfgi0gdr/image/upload/v1786468058/images_eogdtw.jpg";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/20 to-gray-100 text-gray-800 p-4 sm:p-8 lg:p-12 flex items-center justify-center selection:bg-purple-100">
      {/* Container with increased width (max-w-6xl) */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ================= LEFT SIDE (Avatar & Meta) ================= */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Profile Card */}
          <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-xl shadow-purple-900/5 relative group">
            <div className="h-72 w-full relative">
              <img
                src={user?.image || defaultEventImage}
                alt="EventHub User"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full flex items-center gap-1.5 text-white text-xs font-medium">
                <Sparkles size={12} className="text-purple-300" />
                <span>{user?.role || "MEMBER"}</span>
              </div>

              <div className="absolute bottom-5 left-6 right-6 space-y-1">
                <h3 className="text-2xl font-black text-white tracking-tight">
                  {user?.name || session?.user?.name || "Valued Attendee"}
                </h3>
                <p className="text-xs text-purple-200 truncate font-medium">
                  {user?.email || session?.user?.email}
                </p>
              </div>
            </div>
          </div>

          {/* Account Meta Status Card */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 space-y-5 shadow-xl shadow-purple-900/5 text-sm">
            <div className="space-y-2">
              <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block">
                Account ID
              </span>
              <div className="flex items-center justify-between bg-gray-50/80 border border-gray-200/60 px-3.5 py-2.5 rounded-2xl gap-2">
                <span className="text-gray-600 font-mono text-xs truncate select-all">
                  {user?._id || session?.user?.email || "EH-9837421"}
                </span>
                <button
                  type="button"
                  onClick={() => handleCopyId(user?._id ?? session?.user?.email)}
                  className="text-gray-400 hover:text-purple-600 transition-colors p-1 rounded-lg hover:bg-white cursor-pointer"
                  title="Copy ID"
                >
                  <Copy size={16} />
                </button>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Status</span>
                <span className="text-emerald-600 flex items-center gap-1.5 text-xs font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {user?.status || "ACTIVE"}
                </span>
              </div>

              <div className="flex justify-between items-center py-2">
                <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Role</span>
                <span className="text-purple-600 text-xs font-bold bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                  {user?.role || "USER"}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Action Navigation */}
          {/* <div className="grid grid-cols-3 gap-3">
            <Link
              href="/user/my-tickets"
              className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-gray-100 hover:border-purple-200 hover:bg-purple-50/30 text-gray-600 hover:text-purple-600 transition-all group cursor-pointer shadow-sm"
            >
              <Ticket size={20} className="mb-1.5 text-purple-600 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold">Tickets</span>
            </Link>
            <Link
              href="/user/booked-events"
              className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 text-gray-600 hover:text-blue-600 transition-all group cursor-pointer shadow-sm"
            >
              <CalendarDays size={20} className="mb-1.5 text-blue-600 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold">Events</span>
            </Link>
            <Link
              href="/user/favorites"
              className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-gray-100 hover:border-rose-200 hover:bg-rose-50/30 text-gray-600 hover:text-rose-600 transition-all group cursor-pointer shadow-sm"
            >
              <Heart size={20} className="mb-1.5 text-rose-600 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold">Saved</span>
            </Link>
          </div> */}
        </div>

        {/* ================= RIGHT SIDE (Details & Edit Form) ================= */}
        <div className="lg:col-span-8 bg-white border border-gray-100 rounded-3xl p-6 sm:p-10 relative shadow-xl shadow-purple-900/5 min-h-[520px] flex flex-col justify-between transition-all duration-300">
          
          {isEditing ? (
            /* ================= EDIT FORM WINDOW ================= */
            <form
              onSubmit={handleSubmit(onUpdateProfile)}
              className="space-y-6 w-full flex-1 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <div>
                    <h3 className="text-xl font-black text-gray-900 tracking-tight">
                      Edit Profile Information
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">Update your personal contact details below.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditing(false);
                      reset();
                    }}
                    className="p-2.5 bg-gray-50 border border-gray-200 text-gray-500 hover:text-gray-900 rounded-2xl cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700">
                      Full Name
                    </label>
                    <div className="relative flex items-center">
                      <User size={16} className="absolute left-4 text-gray-400" />
                      <input
                        {...register("name", { required: "Name is required" })}
                        type="text"
                        className="w-full bg-gray-50/60 border border-gray-200 focus:border-purple-600 focus:bg-white rounded-2xl py-3 pl-11 pr-4 text-sm outline-none text-gray-800 transition-all font-medium"
                      />
                    </div>
                    {errors.name && (
                      <span className="text-rose-500 text-xs font-medium">{errors.name.message}</span>
                    )}
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700">
                      Phone Number
                    </label>
                    <div className="relative flex items-center">
                      <Phone size={16} className="absolute left-4 text-gray-400" />
                      <input
                        {...register("phone")}
                        type="text"
                        placeholder="e.g., +8801XXXXXXXXX"
                        className="w-full bg-gray-50/60 border border-gray-200 focus:border-purple-600 focus:bg-white rounded-2xl py-3 pl-11 pr-4 text-sm outline-none text-gray-800 transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* District Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700">
                      District
                    </label>
                    <div className="relative flex items-center">
                      <MapPin size={16} className="absolute left-4 text-gray-400" />
                      <input
                        {...register("district")}
                        type="text"
                        placeholder="e.g., Dhaka"
                        className="w-full bg-gray-50/60 border border-gray-200 focus:border-purple-600 focus:bg-white rounded-2xl py-3 pl-11 pr-4 text-sm outline-none text-gray-800 transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Division Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700">
                      Division
                    </label>
                    <div className="relative flex items-center">
                      <Globe size={16} className="absolute left-4 text-gray-400" />
                      <input
                        {...register("division")}
                        type="text"
                        placeholder="e.g., Dhaka Division"
                        className="w-full bg-gray-50/60 border border-gray-200 focus:border-purple-600 focus:bg-white rounded-2xl py-3 pl-11 pr-4 text-sm outline-none text-gray-800 transition-all font-medium"
                      />
                    </div>
                  </div>
                </div>

                {/* Address Input */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700">
                    Street Address
                  </label>
                  <div className="relative flex items-center">
                    <MapPin size={16} className="absolute left-4 text-gray-400" />
                    <input
                      {...register("address")}
                      type="text"
                      placeholder="Street address or apartment area"
                      className="w-full bg-gray-50/60 border border-gray-200 focus:border-purple-600 focus:bg-white rounded-2xl py-3 pl-11 pr-4 text-sm outline-none text-gray-800 transition-all font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Form Buttons */}
              <div className="flex justify-end gap-3 pt-5 border-t border-gray-100 mt-6">
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => {
                    setIsEditing(false);
                    reset();
                  }}
                  className="px-5 py-2.5 bg-gray-100 border border-gray-200 hover:bg-gray-200 rounded-2xl text-xs font-bold text-gray-700 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white rounded-2xl text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer shadow-lg shadow-purple-600/20"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </button>
              </div>
            </form>
          ) : (
            /* ================= VIEW PROFILE WINDOW ================= */
            <>
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="absolute top-6 right-6 inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white rounded-2xl transition-all duration-200 cursor-pointer font-bold text-xs shadow-sm"
              >
                <Edit2 size={14} />
                <span>Edit Profile</span>
              </button>

              <div className="space-y-8 flex-1">
                {/* Full Name Section */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-xs font-bold text-purple-600 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-purple-600" />
                    Full Name
                  </span>
                  <p className="text-2xl font-black text-gray-900 tracking-tight">
                    {user?.name || session?.user?.name || "Attendee"}
                  </p>
                </div>

                {/* Email Section */}
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-purple-600 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-purple-600" />
                    Email Address
                  </span>
                  <p className="text-base font-bold text-gray-800">
                    {user?.email || session?.user?.email || "No Email Provided"}
                  </p>
                  <span className="text-xs text-gray-400 font-medium block">
                    Secured by authentication provider (non-editable)
                  </span>
                </div>

                {/* Grid Details Parameter */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 pt-4 border-t border-gray-100">
                  <div className="space-y-1.5 bg-gray-50/60 p-4 rounded-2xl border border-gray-100">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                      <Phone size={14} className="text-purple-600" />
                      Phone Number
                    </span>
                    <p className="text-sm font-bold text-gray-800">
                      {user?.phone || "Not set"}
                    </p>
                  </div>

                  <div className="space-y-1.5 bg-gray-50/60 p-4 rounded-2xl border border-gray-100">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                      <MapPin size={14} className="text-purple-600" />
                      Street Address
                    </span>
                    <p className="text-sm font-bold text-gray-800 truncate">
                      {user?.address || "Not set"}
                    </p>
                  </div>

                  <div className="space-y-1.5 bg-gray-50/60 p-4 rounded-2xl border border-gray-100">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                      <MapPin size={14} className="text-purple-600" />
                      District
                    </span>
                    <p className="text-sm font-bold text-gray-800">
                      {user?.district || "Not set"}
                    </p>
                  </div>

                  <div className="space-y-1.5 bg-gray-50/60 p-4 rounded-2xl border border-gray-100">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                      <Globe size={14} className="text-purple-600" />
                      Division
                    </span>
                    <p className="text-sm font-bold text-gray-800">
                      {user?.division || "Not set"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer Metadata */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100 text-xs mt-8">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar size={14} className="text-gray-400" />
                    Member Since
                  </span>
                  <p className="text-xs font-bold text-gray-700">
                    {formatDate(user?.createdAt)}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-gray-400" />
                    Last Updated
                  </span>
                  <p className="text-xs font-bold text-gray-700">
                    {formatDate(user?.updatedAt)}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;