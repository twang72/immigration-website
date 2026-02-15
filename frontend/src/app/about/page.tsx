"use client";

import { useLang } from "@/context/LanguageContext";
import PageHeader, { CTASection } from "@/components/PageHeader";

const values = [
  { en: "Licensed Consultants", zh: "持牌顾问", descEn: "All immigration services handled by RCIC-certified professionals.", descZh: "所有移民服务均由RCIC认证专业人士处理。" },
  { en: "High Success Rate", zh: "高成功率", descEn: "Proven track record of successful applications across all programs.", descZh: "在所有项目中成功申请的良好记录。" },
  { en: "Personalized Service", zh: "个性化服务", descEn: "Tailored immigration strategies for your unique situation.", descZh: "为您的独特情况量身定制移民策略。" },
  { en: "Free Online Tools", zh: "免费工具", descEn: "Access to CRS calculators, eligibility checkers, and resources.", descZh: "使用CRS计算器、资格检查器和其他资源。" },
  { en: "Bilingual Support", zh: "双语支持", descEn: "Full service in English and Chinese for seamless communication.", descZh: "中英双语全程服务，沟通无障碍。" },
  { en: "Transparent Pricing", zh: "透明定价", descEn: "Clear fee structures with no hidden costs or surprises.", descZh: "透明的费用结构，无隐藏费用。" },
];

const servicesList = [
  { num: "01", en: "Express Entry Applications", zh: "快速通道申请" },
  { num: "02", en: "Provincial Nominee Programs (PNP)", zh: "省提名计划 (PNP)" },
  { num: "03", en: "Family Sponsorship", zh: "家庭担保" },
  { num: "04", en: "Study Permits", zh: "学习许可" },
  { num: "05", en: "Work Permits", zh: "工作许可" },
  { num: "06", en: "Permanent Residence Applications", zh: "永久居留申请" },
  { num: "07", en: "Citizenship Applications", zh: "公民身份申请" },
  { num: "08", en: "Immigration Appeals", zh: "移民上诉" },
];

export default function AboutPage() {
  const { t } = useLang();

  return (
    <>
      <PageHeader
        titleEn="About CanaQuest Consulting"
        titleZh="关于加拓移民"
        subtitleEn="Your trusted partner in Canadian immigration"
        subtitleZh="您值得信赖的加拿大移民伙伴"
      />

      {/* Who We Are + Mission */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
                {t("About Us", "关于我们")}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">{t("Who We Are", "关于我们")}</h2>
              <p className="mt-4 text-base leading-relaxed text-gray-500">
                {t(
                  "CanaQuest Consulting is a professional immigration consulting firm dedicated to helping individuals and families achieve their Canadian immigration goals. With years of experience and a deep understanding of Canadian immigration law, we provide personalized guidance and support throughout your immigration journey.",
                  "加拓移民是一家专业的移民咨询公司，致力于帮助个人和家庭实现加拿大移民目标。凭借多年的经验和对加拿大移民法的深刻理解，我们在您的移民旅程中提供个性化的指导和支持。"
                )}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
                {t("Philosophy", "理念")}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">{t("Our Mission", "我们的使命")}</h2>
              <p className="mt-4 text-base leading-relaxed text-gray-500">
                {t(
                  "Our mission is to make Canadian immigration accessible and understandable for everyone. We believe in empowering our clients with knowledge and tools while providing expert consultation to ensure the best possible outcomes.",
                  "我们的使命是让每个人都能轻松了解和获取加拿大移民信息。我们致力于通过知识和工具赋能客户，同时提供专业咨询以确保最佳结果。"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
            {t("Our Strengths", "我们的优势")}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">{t("Why Choose Us", "为什么选择我们")}</h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((item) => (
              <div
                key={item.en}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-red-200 hover:shadow-lg"
              >
                <h3 className="font-semibold text-gray-900 transition-colors group-hover:text-red-700">{t(item.en, item.zh)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{t(item.descEn, item.descZh)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
            {t("What We Do", "我们的业务")}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">{t("Our Services", "服务项目")}</h2>
          <p className="mt-4 max-w-2xl text-base text-gray-500">
            {t(
              "Our business covers the full range of Canadian immigration programs. From initial assessment to final approval, every step is handled by licensed immigration consultants.",
              "我们的业务涵盖加拿大各类移民项目。从初步评估到最终获批，每一步均由持牌移民顾问处理。"
            )}
          </p>

          <div className="mt-12 divide-y divide-gray-100">
            {servicesList.map((s) => (
              <div key={s.num} className="flex items-center gap-6 py-5">
                <span className="text-xs font-semibold tracking-widest text-gray-300">{s.num}</span>
                <span className="text-base font-medium text-gray-900">{t(s.en, s.zh)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        titleEn="Start Your Journey to Canada"
        titleZh="开始您的加拿大之旅"
        subtitleEn="Book a consultation with our licensed immigration consultants"
        subtitleZh="预约我们的持牌移民顾问咨询"
        buttonEn="Book Consultation"
        buttonZh="预约咨询"
        href="/contact"
      />
    </>
  );
}
