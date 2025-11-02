"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="navbar flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
      <Link href="/" className="text-2xl font-bold text-gray-900">
        TasteLens
      </Link>

      <div className="flex gap-6 text-gray-600 font-medium items-center">
        <Link href="/#features" className="hover:text-orange-500 transition">
          Features
        </Link>
        <Link href="/#how-it-works" className="hover:text-orange-500 transition">
          How It Works
        </Link>
        <Link href="/#testimonials" className="hover:text-orange-500 transition">
          Testimonials
        </Link>

        {/* ✅ Pricing */}
        <Link href="/pricing" className="hover:text-orange-500 transition">
          Pricing
        </Link>

        {/* ✅ Upload */}
        <Link
          href="/upload"
          className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
        >
          Upload Menu
        </Link>
      </div>
    </nav>
  )
}
