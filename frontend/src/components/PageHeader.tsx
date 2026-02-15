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
    <section className="bg-gradient-to-br from-red-700 to-blue-600 px-4 py-16 text-center text-white sm:py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">{t(titleEn, titleZh)}</h1>
        <p className="mt-4 text-lg opacity-90 sm:text-xl">{t(subtitleEn, subtitleZh)}</p>
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
    <section className="bg-blue-600 px-4 py-16 text-center text-white">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold sm:text-3xl">{t(titleEn, titleZh)}</h2>
        <p className="mt-3 text-lg opacity-90">{t(subtitleEn, subtitleZh)}</p>
        <Link
          href={href}
          className="mt-6 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-red-700 shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl"
        >
          {t(buttonEn, buttonZh)}
        </Link>
      </div>
    </section>
  );
}
