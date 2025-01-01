"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navItems } from "@/constants/NavItems";

interface HeaderProps {
  episodesRef: React.RefObject<HTMLDivElement | null>;
}

export default function Header({ episodesRef }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScrollToEpisodes = () => {
    if (episodesRef?.current) {
      episodesRef.current.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false); // Close mobile menu if open
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[#000000] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 justify-between">
          {/* Logo */}
          <div className="lg:flex items-center hidden">
            <Image
              src="/kinacast-logo.jpg"
              alt="Kinacast Logo"
              width={40}
              height={40}
            />
            <span className="ml-2 text-xl font-bold">Kinacast</span>
          </div>

          {/* Navigation items for large screens */}
          <nav className="hidden lg:flex lg:items-center lg:justify-center flex-1">
            {navItems.map((item) =>
              item.name === "Episodes" ? (
                <button
                  key={item.name}
                  onClick={handleScrollToEpisodes}
                  className="hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Hamburger menu for small screens */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed inset-y-0 left-0 flex flex-col w-64 max-w-sm bg-[#000000] shadow-lg transform ease-in-out duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-700">
          <span className="text-xl font-bold text-white">Menu</span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <nav className="flex-1 px-4 py-6">
          {navItems.map((item) =>
            item.name === "Episodes" ? (
              <button
                key={item.name}
                onClick={handleScrollToEpisodes}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-400"
              >
                {item.name}
              </button>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-400"
              >
                {item.name}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
