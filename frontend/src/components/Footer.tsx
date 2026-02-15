"use client";

import Link from "next/link";
import { useLang } from "@/context/LanguageContext";

const services = [
  { en: "Express Entry", zh: "快速通道", href: "/tools" },
  { en: "Provincial Nominees", zh: "省提名", href: "/tools" },
  { en: "Family Sponsorship", zh: "家庭担保", href: "/tools" },
  { en: "Study Permits", zh: "学习许可", href: "/tools" },
  { en: "Work Permits", zh: "工作许可", href: "/tools" },
];

const navigation = [
  { en: "Home", zh: "首页", href: "/" },
  { en: "Immigration Tools", zh: "移民工具", href: "/tools" },
  { en: "Medical Education", zh: "医学教育", href: "/medical-education" },
  { en: "Resources", zh: "资源链接", href: "/links" },
  { en: "About Us", zh: "关于我们", href: "/about" },
  { en: "Contact", zh: "联系我们", href: "/contact" },
];

const externalLinks = [
  { label: "IRCC Official Website", href: "https://www.canada.ca/en/immigration-refugees-citizenship.html" },
  { label: "Express Entry CRS Tool", href: "https://www.cic.gc.ca/english/immigrate/skilled/crs-tool.asp" },
  { label: "Job Bank Canada", href: "https://www.jobbank.gc.ca/home" },
  { label: "Processing Times", href: "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html" },
];

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-gray-100 bg-gray-950 text-gray-400">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="group flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-700 text-xs font-bold text-white">
                CQ
              </div>
              <span className="text-base font-semibold text-white">{t("CanaQuest", "加拓移民")}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              {t(
                "Professional immigration consulting services. Licensed consultants guiding your journey to Canada.",
                "专业移民咨询服务。持牌顾问指引您的加拿大之旅。"
              )}
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-green-400" />
              <span className="text-xs text-green-400">
                {t("Accepting new clients", "接受新客户")}
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">
              {t("Services", "服务项目")}
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.en}>
                  <Link href={s.href} className="text-sm transition-colors hover:text-white">
                    {t(s.en, s.zh)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">
              {t("Navigation", "网站导航")}
            </h3>
            <ul className="space-y-2.5">
              {navigation.map((n) => (
                <li key={n.en}>
                  <Link href={n.href} className="text-sm transition-colors hover:text-white">
                    {t(n.en, n.zh)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">
              {t("External Links", "外部链接")}
            </h3>
            <ul className="space-y-2.5">
              {externalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                    <span className="ml-1 text-[10px] opacity-50">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs sm:flex-row lg:px-8">
          <p>
            {t(
              "© 2026 CanaQuest Consulting Inc. All rights reserved.",
              "© 2026 加拓移民。保留所有权利。"
            )}
          </p>
          <p className="text-gray-500">
            {t("Professional immigration consulting services", "专业移民咨询服务")}
          </p>
        </div>
      </div>
    </footer>
  );
}
