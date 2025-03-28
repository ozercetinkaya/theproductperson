// components/Navbar.js
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#F8F5F2] shadow-md h-[100px] sm:h-[120px]">
      <div className="max-w-screen-xl mx-auto h-full flex flex-col sm:flex-row items-center justify-between px-4">
        
        {/* Logo */}
        <Link href="/" className="block" aria-label="Go to homepage">
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

        {/* Menu */}
        <ul className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6 mt-2 sm:mt-0">
          
          <li>
            <Link href="/about" className="text-gray-800 hover:text-[#332E2E] font-bold">
              About me
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-gray-800 hover:text-[#332E2E] font-bold">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-gray-800 hover:text-[#332E2E] font-bold">
              Projects
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}
