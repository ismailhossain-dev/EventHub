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

  // আপনার API রেসপন্স স্ট্রাকচার অনুযায়ী ডাটা ম্যাপ করা
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

  // লোডিং স্টেট বা স্কেলিটন
  if (sessionStatus === "loading" || isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 sm:p-8 flex items-center justify-center animate-pulse">
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div className="h-64 bg-gray-200 rounded-xl"></div>
            <div className="h-40 bg-gray-200 rounded-xl"></div>
          </div>
          <div className="md:col-span-2 h-[420px] bg-gray-200 rounded-xl"></div>
        </div>
      </div>
    );
  }

  // ডেট ফরম্যাট করার হেল্পার
  const formatDate = (dateString?: string) => {
    if (!dateString) return "15 Jun 2026";
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // আইডি কপি করার ফাংশন (টাইপ সেফটি সহ)
  const handleCopyId = (id?: string | null) => {
    if (id) {
      navigator.clipboard.writeText(id);
      toast.info("Account ID copied to clipboard!");
    }
  };

  // ডেমো ইভেন্ট-থিমড ডিফল্ট ইমেজ
  const defaultEventImage =
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-4 sm:p-8 flex items-center justify-center selection:bg-purple-100">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        
        {/* ================= LEFT SIDE (Avatar & Meta) ================= */}
        <div className="md:col-span-4 space-y-6">
          
          {/* Profile Card with Demo Image */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden relative shadow-sm">
            <div className="h-64 w-full relative">
              <img
                src={user?.image || defaultEventImage}
                alt="EventHub User"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 space-y-0.5">
                <span className="text-xs font-semibold text-purple-300 uppercase tracking-wide">
                  {user?.role || "EVENT HUB MEMBER"}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {user?.name || session?.user?.name || "Valued Attendee"}
                </h3>
              </div>
            </div>
          </div>

          {/* Account Meta Status Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-4 shadow-sm text-sm">
            <div className="space-y-1.5">
              <span className="text-xs text-gray-500 font-medium block">
                Account ID
              </span>
              <div className="flex items-center justify-between bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg gap-2">
                <span className="text-gray-600 font-mono text-xs truncate select-all">
                  {user?._id || session?.user?.email || "EH-9837421"}
                </span>
                <button
                  type="button"
                  onClick={() => handleCopyId(user?._id ?? session?.user?.email)}
                  className="text-gray-400 hover:text-purple-600 transition-colors cursor-pointer"
                >
                  <Copy size={16} />
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-500 text-xs font-medium">Status</span>
              <span className="text-emerald-600 flex items-center gap-1.5 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {user?.status || "ACTIVE"}
              </span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-500 text-xs font-medium">Role</span>
              <span className="text-purple-600 text-xs font-semibold">
                {user?.role || "USER"}
              </span>
            </div>
          </div>

          {/* Quick Action Navigation for EventHub */}
          <div className="grid grid-cols-3 gap-3">
            <Link
              href="/user/my-tickets"
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 hover:text-purple-600 transition-all group cursor-pointer shadow-sm"
            >
              <Ticket size={18} className="mb-1 text-purple-600 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-medium">Tickets</span>
            </Link>
            <Link
              href="/user/booked-events"
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 hover:text-blue-600 transition-all group cursor-pointer shadow-sm"
            >
              <CalendarDays size={18} className="mb-1 text-blue-600 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-medium">Events</span>
            </Link>
            <Link
              href="/user/favorites"
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 hover:text-rose-600 transition-all group cursor-pointer shadow-sm"
            >
              <Heart size={18} className="mb-1 text-rose-600 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-medium">Saved</span>
            </Link>
          </div>
        </div>

        {/* ================= RIGHT SIDE (Details & Edit Form) ================= */}
        <div className="md:col-span-8 bg-white border border-gray-200 rounded-xl p-6 sm:p-8 relative shadow-sm min-h-[460px] flex flex-col justify-between transition-all duration-300">
          
          {isEditing ? (
            /* ================= EDIT FORM WINDOW ================= */
            <form
              onSubmit={handleSubmit(onUpdateProfile)}
              className="space-y-5 w-full flex-1 flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Edit Profile Details
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditing(false);
                      reset();
                    }}
                    className="p-2 bg-gray-100 border border-gray-200 text-gray-600 hover:text-gray-900 rounded-lg cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-gray-600">
                      Full Name
                    </label>
                    <div className="relative flex items-center">
                      <User size={16} className="absolute left-3 text-gray-400" />
                      <input
                        {...register("name", { required: "Name is required" })}
                        type="text"
                        className="w-full bg-gray-50 border border-gray-200 focus:border-purple-600 focus:bg-white rounded-lg py-2 pl-9 pr-3 text-sm outline-none text-gray-800 transition-colors"
                      />
                    </div>
                    {errors.name && (
                      <span className="text-rose-500 text-xs">{errors.name.message}</span>
                    )}
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-gray-600">
                      Phone Number
                    </label>
                    <div className="relative flex items-center">
                      <Phone size={16} className="absolute left-3 text-gray-400" />
                      <input
                        {...register("phone")}
                        type="text"
                        placeholder="e.g., +8801XXXXXXXXX"
                        className="w-full bg-gray-50 border border-gray-200 focus:border-purple-600 focus:bg-white rounded-lg py-2 pl-9 pr-3 text-sm outline-none text-gray-800 transition-colors"
                      />
                    </div>
                  </div>

                  {/* District Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-gray-600">
                      District
                    </label>
                    <div className="relative flex items-center">
                      <MapPin size={16} className="absolute left-3 text-gray-400" />
                      <input
                        {...register("district")}
                        type="text"
                        placeholder="e.g., Dhaka"
                        className="w-full bg-gray-50 border border-gray-200 focus:border-purple-600 focus:bg-white rounded-lg py-2 pl-9 pr-3 text-sm outline-none text-gray-800 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Division Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-gray-600">
                      Division
                    </label>
                    <div className="relative flex items-center">
                      <Globe size={16} className="absolute left-3 text-gray-400" />
                      <input
                        {...register("division")}
                        type="text"
                        placeholder="e.g., Dhaka Division"
                        className="w-full bg-gray-50 border border-gray-200 focus:border-purple-600 focus:bg-white rounded-lg py-2 pl-9 pr-3 text-sm outline-none text-gray-800 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Address Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-600">
                    Address
                  </label>
                  <div className="relative flex items-center">
                    <MapPin size={16} className="absolute left-3 text-gray-400" />
                    <input
                      {...register("address")}
                      type="text"
                      placeholder="Street address or area"
                      className="w-full bg-gray-50 border border-gray-200 focus:border-purple-600 focus:bg-white rounded-lg py-2 pl-9 pr-3 text-sm outline-none text-gray-800 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Form Buttons */}
              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100 mt-6">
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => {
                    setIsEditing(false);
                    reset();
                  }}
                  className="px-4 py-2 bg-gray-100 border border-gray-200 hover:bg-gray-200 rounded-lg text-xs font-medium text-gray-700 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
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
                className="absolute top-6 right-6 p-2 bg-gray-100 border border-gray-200 text-gray-600 hover:text-gray-900 rounded-lg transition-colors cursor-pointer hover:bg-gray-200"
              >
                <Edit2 size={16} />
              </button>

              <div className="space-y-6 flex-1">
                {/* Full Name */}
                <div className="space-y-1">
                  <span className="text-xs font-medium text-purple-600 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                    Full Name
                  </span>
                  <p className="text-xl font-bold text-gray-800">
                    {user?.name || session?.user?.name || "Attendee"}
                  </p>
                </div>

                {/* Email (Non-editable) */}
                <div className="space-y-1">
                  <span className="text-xs font-medium text-purple-600 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                    Email Address
                  </span>
                  <p className="text-sm font-medium text-gray-800">
                    {user?.email || session?.user?.email || "No Email Provided"}
                  </p>
                  <span className="text-[10px] text-gray-400 block font-normal">
                    Email cannot be changed for security reasons
                  </span>
                </div>

                {/* Grid Parameters */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 pt-2">
                  <div className="space-y-1">
                    <span className="text-xs font-medium text-gray-500 flex items-center gap-1.5">
                      <Phone size={14} className="text-gray-400" />
                      Phone
                    </span>
                    <p className="text-sm font-medium text-gray-700">
                      {user?.phone || "Not set"}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-medium text-gray-500 flex items-center gap-1.5">
                      <MapPin size={14} className="text-gray-400" />
                      Address
                    </span>
                    <p className="text-sm font-medium text-gray-700 truncate">
                      {user?.address || "Not set"}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-medium text-gray-500 flex items-center gap-1.5">
                      <MapPin size={14} className="text-gray-400" />
                      District
                    </span>
                    <p className="text-sm font-medium text-gray-700">
                      {user?.district || "Not set"}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-medium text-gray-500 flex items-center gap-1.5">
                      <Globe size={14} className="text-gray-400" />
                      Division
                    </span>
                    <p className="text-sm font-medium text-gray-700">
                      {user?.division || "Not set"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer Metadata */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100 text-xs mt-6">
                <div className="space-y-1">
                  <span className="text-xs font-medium text-gray-500 flex items-center gap-1.5">
                    <Calendar size={14} className="text-gray-400" />
                    Member Since
                  </span>
                  <p className="text-xs font-medium text-gray-600">
                    {formatDate(user?.createdAt)}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-medium text-gray-500 flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-gray-400" />
                    Last Updated
                  </span>
                  <p className="text-xs font-medium text-gray-600">
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