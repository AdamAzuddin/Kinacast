import React, { forwardRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { navItems } from "../constants/NavItems";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu = forwardRef<HTMLDivElement, MobileMenuProps>(
  ({ isOpen, setIsOpen }, ref) => {
    return (
      <div
        ref={ref}
        className={`fixed inset-y-0 left-0 flex flex-col w-64 max-w-sm shadow-lg transform ease-in-out duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden bg-[#1F1F1F]`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-700 bg-[#1F1F1F]">
          <span className="text-xl font-bold text-white">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-md text-gray-400 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <nav className="flex-1 px-4 py-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-white hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    );
  }
);

MobileMenu.displayName = "MobileMenu";

export default MobileMenu;
