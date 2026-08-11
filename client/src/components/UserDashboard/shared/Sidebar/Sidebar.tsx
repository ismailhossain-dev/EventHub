'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Star, 
  CalendarCheck, 
  User, 
  LogOut 
} from 'lucide-react';
import Logo from '@/components/shared/Logo/Logo';
import { signOut } from 'next-auth/react';

const sidebarLinks = [
  {
    name: 'Overview',
    href: '/user',
    icon: <LayoutDashboard size={20} />,
  },
  {
    name: 'Reviews',
    href: '/user/my-reviews',
    icon: <Star size={20} />,
  },
  {
    name: 'Booking',
    href: '/user/my-booking',
    icon: <CalendarCheck size={20} />,
  },
  {
    name: 'Profile',
    href: '/user/my-profile',
    icon: <User size={20} />,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

 

  return (
    <aside className="w-64 bg-white text-gray-800 flex flex-col justify-between h-full p-6 font-sans">
      
      {/* Top Section: Logo & Navigation */}
      <div className="flex flex-col space-y-8">
        <div className="flex items-center ">
          <Logo />
        </div>

        <nav className="flex flex-col space-y-2">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-[#ff2e63] text-white shadow-md shadow-[#ff2e63]/20'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section: Logout Button */}
      <div className="pt-6 border-t border-gray-100">
        <button
          onClick={()=> signOut()}
          className="w-full flex items-center justify-center gap-2.5 bg-gray-900 text-white hover:bg-black font-semibold text-sm py-3 px-4 rounded-xl shadow-md transition-all duration-300 transform active:scale-95 cursor-pointer"
        >
          <LogOut size={18} className="text-[#ff2e63]" />
          <span>Logout</span>
        </button>
      </div>

    </aside>
  );
}