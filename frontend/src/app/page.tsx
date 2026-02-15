"use client";

import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import { CTASection } from "@/components/PageHeader";

const services = [
  {
    num: "01",
    en: "Expert Consultation",
    zh: "专家咨询",
    descEn: "Personalized immigration guidance from licensed, experienced consultants who understand Canadian immigration law inside and out.",
    descZh: "持牌资深顾问提供个性化移民指导，深入了解加拿大移民法律。",
    href: "/contact",
  },
  {
    num: "02",
    en: "Immigration Tools",
    zh: "移民工具",
    descEn: "Free CRS calculator, processing time estimator, and eligibility assessment tools to help you plan your immigration journey.",
    descZh: "免费CRS计算器、处理时间估算器和资格评估工具，助您规划移民之旅。",
    href: "/tools",
  },
  {
    num: "03",
    en: "Document Preparation",
    zh: "文件准备",
    descEn: "Comprehensive assistance with application documentation, ensuring every detail meets IRCC requirements for the highest chance of approval.",
    descZh: "全面的申请文件协助服务，确保每个细节符合IRCC要求，最大程度提高获批几率。",
    href: "/contact",
  },
  {
    num: "04",
    en: "Application Support",
    zh: "申请支持",
    descEn: "End-to-end support from initial assessment through to final approval, with regular updates and transparent communication throughout.",
    descZh: "从初步评估到最终获批的全程支持，定期更新和透明沟通。",
    href: "/contact",
  },
  {
    num: "05",
    en: "Medical Education Pathway",
    zh: "医学教育途径",
    descEn: "Specialized guidance for students pursuing nursing and healthcare programs in Canada, including university selection and post-graduation immigration.",
    descZh: "为在加拿大攻读护理和医疗保健课程的学生提供专业指导，包括大学选择和毕业后移民。",
    href: "/medical-education",
  },
];

const stats = [
  { value: "500+", en: "Clients Served", zh: "服务客户" },
  { value: "95%", en: "Success Rate", zh: "成功率" },
  { value: "10+", en: "Years Experience", zh: "年经验" },
  { value: "6", en: "Immigration Programs", zh: "移民项目" },
];

export default function HomePage() {
  const { t } = useLang();

  return (
    <>
      {/* Hero — full viewport, dark, elegant */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-gray-950 px-6 lg:px-8">
        {/* Background accents */}
        <div className="pointer-events-none absolute -top-40 left-1/3 h-[600px] w-[800px] rounded-full bg-red-700/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 right-0 h-[500px] w-[600px] rounded-full bg-blue-600/10 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 right-1/4 h-64 w-64 rounded-full bg-red-500/5 blur-2xl" />

        <div className="relative mx-auto max-w-5xl py-32">
          <div className="animate-fade-in-up opacity-0">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
              {t("CanaQuest Consulting Inc.", "加拓移民")}
            </p>
          </div>

          <h1 className="animate-fade-in-up max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white opacity-0 animate-delay-100 sm:text-5xl lg:text-6xl">
            {t(
              "Professional Canadian Immigration Consulting Services",
              "专业加拿大移民顾问服务"
            )}
          </h1>

          <p className="animate-fade-in-up mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 opacity-0 animate-delay-200 sm:text-xl">
            {t(
              "Licensed immigration consultants helping you navigate Express Entry, Provincial Nominees, study permits, and all pathways to Canadian permanent residence.",
              "持牌移民顾问帮助您导航快速通道、省提名、学习许可以及所有通往加拿大永久居留权的途径。"
            )}
          </p>

          <div className="animate-fade-in-up mt-10 flex flex-col gap-4 opacity-0 animate-delay-300 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-red-700 px-8 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-red-700/25 transition-all hover:bg-red-600 hover:shadow-xl"
            >
              {t("Book Consultation", "预约咨询")}
            </Link>
            <Link
              href="/tools"
              className="rounded-lg border border-gray-700 px-8 py-3.5 text-center text-sm font-semibold text-gray-300 transition-all hover:border-gray-500 hover:text-white"
            >
              {t("Explore Tools", "探索工具")}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-gray-100 bg-white px-6 py-12 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.en} className="text-center">
              <div className="text-3xl font-bold text-red-700 sm:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm text-gray-500">{t(stat.en, stat.zh)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services — numbered cards like Cedar Hill */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
            {t("What We Offer", "我们的服务")}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {t("Our Services", "服务项目")}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-500">
            {t(
              "Our services cover the full range of Canadian immigration programs. From initial assessment to final approval, we provide professional, personalized guidance every step of the way.",
              "我们的服务涵盖加拿大各类移民项目。从初步评估到最终获批，我们在每一步都提供专业、个性化的指导。"
            )}
          </p>

          <div className="mt-16 space-y-0 divide-y divide-gray-100">
            {services.map((s) => (
              <Link
                key={s.num}
                href={s.href}
                className="group flex flex-col gap-4 py-8 transition-colors first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:gap-8"
              >
                <span className="text-xs font-semibold tracking-widest text-gray-300 group-hover:text-red-700 transition-colors">
                  {s.num}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 transition-colors group-hover:text-red-700">
                    {t(s.en, s.zh)}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-500">
                    {t(s.descEn, s.descZh)}
                  </p>
                </div>
                <span className="hidden text-gray-300 transition-transform group-hover:translate-x-1 group-hover:text-red-700 sm:block">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us — minimal grid */}
      <section className="bg-gray-50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
            {t("Why CanaQuest", "为什么选择加拓移民")}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {t("Your Trusted Immigration Partner", "您值得信赖的移民伙伴")}
          </h2>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                en: "Licensed Consultants",
                zh: "持牌顾问",
                descEn: "All immigration services handled by RCIC-licensed professionals with proven expertise.",
                descZh: "所有移民服务均由RCIC持牌专业人士处理。",
              },
              {
                en: "Transparent Process",
                zh: "透明流程",
                descEn: "Clear pricing, regular updates, and honest assessments — no hidden costs or surprises.",
                descZh: "透明定价、定期更新和诚实评估——没有隐藏费用。",
              },
              {
                en: "Bilingual Service",
                zh: "双语服务",
                descEn: "Full service available in both English and Chinese for seamless communication.",
                descZh: "提供中英文双语服务，沟通无障碍。",
              },
              {
                en: "End-to-End Support",
                zh: "全程支持",
                descEn: "From assessment through to landing — we're with you at every stage of the process.",
                descZh: "从评估到登陆——我们在流程的每个阶段都与您同在。",
              },
              {
                en: "Proven Track Record",
                zh: "良好记录",
                descEn: "High approval rates across Express Entry, PNP, family sponsorship, and study permits.",
                descZh: "在快速通道、省提名、家庭担保和学签方面拥有高获批率。",
              },
              {
                en: "Free Online Tools",
                zh: "免费在线工具",
                descEn: "CRS calculator, eligibility checker, and processing time estimator — free to use anytime.",
                descZh: "CRS计算器、资格检查器和处理时间估算器——随时免费使用。",
              },
            ].map((item) => (
              <div
                key={item.en}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-red-200 hover:shadow-lg"
              >
                <h3 className="text-base font-semibold text-gray-900 group-hover:text-red-700 transition-colors">
                  {t(item.en, item.zh)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {t(item.descEn, item.descZh)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        titleEn="Start Your Journey to Canada"
        titleZh="开始您的加拿大之旅"
        subtitleEn="Book a consultation with our licensed immigration consultants today"
        subtitleZh="立即预约我们的持牌移民顾问咨询"
        buttonEn="Book Consultation"
        buttonZh="预约咨询"
        href="/contact"
      />
    </>
  );
}
