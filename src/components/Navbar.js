"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-[#F8F5F2] shadow-md z-50 relative">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" aria-label="Go to homepage">
          <div className="relative w-[140px] h-[60px] sm:w-[160px] sm:h-[70px]">
            <Image
              src="/tpplogo2.svg"
              alt="The Product Person Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Hamburger */}
        <button
          className="sm:hidden flex flex-col space-y-1"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>

        {/* Menu */}
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row absolute sm:static top-[100%] left-0 w-full sm:w-auto bg-[#F8F5F2] sm:bg-transparent items-center sm:space-x-6 px-4 py-4 sm:py-0 z-50`}
        >
          <li className="py-2 sm:py-0">
            <Link href="/about" className="text-gray-800 hover:text-[#332E2E] font-bold">
              About me
            </Link>
          </li>
          <li className="py-2 sm:py-0">
            <Link href="/blog" className="text-gray-800 hover:text-[#332E2E] font-bold">
              Blog
            </Link>
          </li>
          <li className="py-2 sm:py-0">
            <Link href="/projects" className="text-gray-800 hover:text-[#332E2E] font-bold">
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
