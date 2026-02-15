"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/context/LanguageContext";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", en: "Home", zh: "首页" },
  { href: "/tools", en: "Tools", zh: "工具" },
  { href: "/medical-education", en: "Medical Education", zh: "医学教育" },
  { href: "/links", en: "Resources", zh: "资源" },
  { href: "/about", en: "About", zh: "关于" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { lang, toggleLang, t } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-lg backdrop-blur-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Brand */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-700 text-sm font-bold text-white transition-transform group-hover:scale-105">
            CQ
          </div>
          <span className="text-lg font-semibold tracking-tight text-gray-900">
            {t("CanaQuest", "加拓移民")}
          </span>
        </Link>

        {/* Mobile burger */}
        <button
          className="inline-flex items-center rounded-lg p-2.5 text-gray-600 transition-colors hover:bg-gray-100 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            )}
          </svg>
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative rounded-lg px-4 py-2 text-[13px] font-medium tracking-wide transition-colors ${
                pathname === link.href
                  ? "text-red-700"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {t(link.en, link.zh)}
              {pathname === link.href && (
                <span className="absolute bottom-0.5 left-4 right-4 h-[2px] rounded-full bg-red-700" />
              )}
            </Link>
          ))}

          <div className="ml-4 flex items-center gap-3 border-l border-gray-200 pl-4">
            <button
              onClick={toggleLang}
              className="rounded-lg px-3 py-1.5 text-[13px] font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
            >
              {lang === "en" ? "中文" : "EN"}
            </button>
            <Link
              href="/contact"
              className="rounded-lg bg-red-700 px-5 py-2 text-[13px] font-semibold text-white shadow-sm transition-all hover:bg-red-800 hover:shadow-md"
            >
              {t("Book Consultation", "预约咨询")}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <div className="space-y-1 px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-red-50 text-red-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              {t(link.en, link.zh)}
            </Link>
          ))}
          <div className="flex items-center gap-3 border-t border-gray-100 pt-3">
            <button
              onClick={toggleLang}
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50"
            >
              {lang === "en" ? "中文" : "English"}
            </button>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex-1 rounded-lg bg-red-700 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-red-800"
            >
              {t("Book Consultation", "预约咨询")}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
