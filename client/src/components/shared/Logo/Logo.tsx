
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
function Logo() {
  return (
   <div>
    <Link href="/" className="flex items-center  no-underline">
          <div className="text-white">
            <Image width={70} height={70} src="/assets/eventhub.png" alt='logo'></Image>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-[18px] md:text-[22px] font-extrabold tracking-wider">EventHub</span>
            <span className="text-[#94a3b8] text-[9px] md:text-[10px] font-semibold tracking-wide">LIVING SOLUTIONS</span>
          </div>
        </Link>
   </div>
  )
}

export default Logo