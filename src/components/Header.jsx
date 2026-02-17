"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Install with: npm install lucide-react
import NavLink from "./NavLink";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  if (pathname.startsWith("/dashboard")) return null;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="text-xl font-semibold text-gray-900 shrink-0">
            Dev<span className="text-blue-600">Story</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/tutorials">Tutorials</NavLink>
            <NavLink href="/login">Login</NavLink>
            <NavLink
              href="/register"
              className="px-5 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-sm active:scale-95"
            >
              Get Started
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-4 pt-2 font-medium text-gray-700">
            <NavLink href="/about" className="px-2 py-1">About</NavLink>
            <NavLink href="/tutorials" className="px-2 py-1">Tutorials</NavLink>
            <NavLink href="/login" className="px-2 py-1 border-t pt-4">Login</NavLink>
            <NavLink
              href="/register"
              className="w-full px-4 py-3 bg-blue-600 text-white rounded-xl text-center shadow-md active:scale-95 transition-transform"
            >
              Get Started
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;