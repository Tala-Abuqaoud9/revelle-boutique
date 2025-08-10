"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Revelle Boutique
        </Link>
        <nav className="space-x-6">
          <Link href="/shop" className="text-gray-700 hover:text-gray-900 transition">
            Shop
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900 transition">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
