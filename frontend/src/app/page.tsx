"use client";

import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import { CTASection } from "@/components/PageHeader";

const services = [
  {
    icon: "🎯",
    en: "Expert Consultation",
    zh: "专家咨询",
    descEn: "Personalized immigration guidance from experienced consultants",
    descZh: "资深顾问提供个性化移民指导",
  },
  {
    icon: "🛠️",
    en: "Immigration Tools",
    zh: "移民工具",
    descEn: "Free online calculators and assessment tools to plan your journey",
    descZh: "免费在线计算器和评估工具，助您规划移民之旅",
  },
  {
    icon: "📋",
    en: "Document Preparation",
    zh: "文件准备",
    descEn: "Comprehensive assistance with application documentation",
    descZh: "全面的申请文件协助服务",
  },
  {
    icon: "✅",
    en: "Application Support",
    zh: "申请支持",
    descEn: "End-to-end support throughout your immigration process",
    descZh: "全程支持您的移民申请流程",
  },
];

export default function HomePage() {
  const { t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-600 to-blue-600 px-4 py-24 text-center text-white sm:py-32 lg:py-40">
        <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-[30rem] w-[30rem] rounded-full bg-white/5" />

        <div className="relative mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {t("Welcome to CanaQuest Consulting", "欢迎来到 CanaQuest 咨询")}
          </h1>
          <p className="mt-4 text-xl font-medium opacity-95 sm:text-2xl">
            {t(
              "Your Trusted Partner in Canadian Immigration",
              "您值得信赖的加拿大移民伙伴"
            )}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base opacity-90 sm:text-lg">
            {t(
              "We provide expert immigration consulting services and powerful tools to help you navigate your journey to Canada with confidence.",
              "我们提供专业的移民咨询服务和强大的工具，帮助您自信地踏上移民加拿大的旅程。"
            )}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/tools"
              className="rounded-lg bg-white px-8 py-3 font-semibold text-red-700 shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl"
            >
              {t("Explore Tools", "探索工具")}
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-red-700"
            >
              {t("Get in Touch", "联系我们")}
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            {t("Our Services", "我们的服务")}
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.en}
                className="group rounded-xl bg-white p-8 text-center shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 text-5xl">{s.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-red-700">
                  {t(s.en, s.zh)}
                </h3>
                <p className="text-gray-500">{t(s.descEn, s.descZh)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        titleEn="Ready to Start Your Immigration Journey?"
        titleZh="准备好开始您的移民之旅了吗？"
        subtitleEn="Let us help you achieve your Canadian dream"
        subtitleZh="让我们帮助您实现加拿大梦想"
        buttonEn="Try Our Tools"
        buttonZh="试用我们的工具"
        href="/tools"
      />
    </>
  );
}
