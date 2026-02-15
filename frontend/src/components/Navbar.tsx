"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/context/LanguageContext";
import { useState } from "react";

const navLinks = [
  { href: "/", en: "Home", zh: "首页" },
  { href: "/tools", en: "Immigration Tools", zh: "移民工具" },
  { href: "/medical-education", en: "Medical Education", zh: "医学教育" },
  { href: "/links", en: "Useful Links", zh: "实用链接" },
  { href: "/about", en: "About Us", zh: "关于我们" },
  { href: "/contact", en: "Contact", zh: "联系我们" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { lang, toggleLang, t } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="text-xl font-bold text-red-700 sm:text-2xl">
          CanaQuest Consulting
        </Link>

        {/* Mobile burger */}
        <button
          className="inline-flex items-center rounded-md p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-red-700 ${
                pathname === link.href ? "text-red-700" : "text-gray-700"
              }`}
            >
              {t(link.en, link.zh)}
            </Link>
          ))}
          <button
            onClick={toggleLang}
            className="rounded-full bg-red-700 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
          >
            {lang === "en" ? "中文" : "English"}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t bg-white px-4 pb-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 text-sm font-medium transition-colors hover:text-red-700 ${
                pathname === link.href ? "text-red-700" : "text-gray-700"
              }`}
            >
              {t(link.en, link.zh)}
            </Link>
          ))}
          <button
            onClick={toggleLang}
            className="mt-2 rounded-full bg-red-700 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
          >
            {lang === "en" ? "中文" : "English"}
          </button>
        </div>
      )}
    </nav>
  );
}
