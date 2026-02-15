"use client";

import { useLang } from "@/context/LanguageContext";
import Link from "next/link";

interface PageHeaderProps {
  titleEn: string;
  titleZh: string;
  subtitleEn: string;
  subtitleZh: string;
}

export default function PageHeader({ titleEn, titleZh, subtitleEn, subtitleZh }: PageHeaderProps) {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden bg-gray-950 px-6 pt-32 pb-20 text-white sm:pt-40 sm:pb-24 lg:px-8">
      {/* Subtle gradient orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-red-700/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 right-0 h-[300px] w-[400px] rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {t(titleEn, titleZh)}
        </h1>
        <p className="mt-4 text-lg text-gray-400 sm:text-xl">{t(subtitleEn, subtitleZh)}</p>
      </div>
    </section>
  );
}

interface CTASectionProps {
  titleEn: string;
  titleZh: string;
  subtitleEn: string;
  subtitleZh: string;
  buttonEn: string;
  buttonZh: string;
  href: string;
}

export function CTASection({ titleEn, titleZh, subtitleEn, subtitleZh, buttonEn, buttonZh, href }: CTASectionProps) {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden bg-gray-950 px-6 py-24 text-center text-white">
      <div className="pointer-events-none absolute -top-20 left-1/4 h-[400px] w-[600px] rounded-full bg-red-700/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 right-1/4 h-[300px] w-[500px] rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
          {t(titleEn, titleZh)}
        </h2>
        <p className="mt-4 text-lg text-gray-400">{t(subtitleEn, subtitleZh)}</p>
        <Link
          href={href}
          className="mt-8 inline-block rounded-lg bg-red-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-700/25 transition-all hover:bg-red-600 hover:shadow-xl hover:shadow-red-700/30"
        >
          {t(buttonEn, buttonZh)}
        </Link>
      </div>
    </section>
  );
}
