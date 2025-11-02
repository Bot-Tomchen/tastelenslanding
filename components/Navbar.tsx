"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/pricing", label: "Pricing" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight">TasteLens</span>
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-8 text-sm font-medium">

          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition ${
                pathname === l.href
                  ? "text-black font-semibold"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {l.label}
            </Link>
          ))}

          {/* CTA Button */}
          <Link
            href="/upload"
            className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-900 transition"
          >
            Get Started Now
          </Link>
        </div>
      </nav>
    </header>
  );
}
