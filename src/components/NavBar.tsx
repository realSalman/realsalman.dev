"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center pt-12 pb-6 px-4 z-50 pointer-events-none md:absolute md:top-0 md:bottom-auto md:pt-10 md:pb-12 md:px-0 bg-gradient-to-t md:bg-gradient-to-b from-background via-background/90 to-transparent">
      <nav className="flex items-center gap-2 bg-[#1a1a1a] rounded-full p-1.5 border border-border pointer-events-auto shadow-[0_0_30px_rgba(0,0,0,0.8)]">
        <Link
          href="/"
          title="Profile"
          className={`p-3 rounded-full transition-all duration-200 ${pathname === "/"
            ? "bg-[#2a2a2a] text-textHeading"
            : "text-gray-400 hover:text-textBody hover:bg-[#222]"
            }`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </Link>
        <Link
          href="/uses"
          title="Uses"
          className={`p-3 rounded-full transition-all duration-200 ${pathname === "/uses"
            ? "bg-[#2a2a2a] text-textHeading"
            : "text-gray-400 hover:text-textBody hover:bg-[#222]"
            }`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </Link>
        <Link
          href="/now"
          title="Now"
          className={`p-3 rounded-full transition-all duration-200 ${pathname === "/now"
            ? "bg-[#2a2a2a] text-textHeading"
            : "text-gray-400 hover:text-textBody hover:bg-[#222]"
            }`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </Link>
        <Link
          href="/projects"
          title="Projects"
          className={`p-3 rounded-full transition-all duration-200 ${pathname === "/projects"
            ? "bg-[#2a2a2a] text-textHeading"
            : "text-gray-400 hover:text-textBody hover:bg-[#222]"
            }`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
        </Link>
        <Link
          href="/blogs"
          title="Blogs"
          className={`p-3 rounded-full transition-all duration-200 ${pathname === "/blogs"
            ? "bg-[#2a2a2a] text-textHeading"
            : "text-gray-400 hover:text-textBody hover:bg-[#222]"
            }`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </Link>
      </nav>
    </div>
  );
}
