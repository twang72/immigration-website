"use client";

import { useLang } from "@/context/LanguageContext";
import PageHeader, { CTASection } from "@/components/PageHeader";

const whyChooseUs = [
  { icon: "👨‍💼", en: "Expert Team", zh: "专家团队", descEn: "Licensed and experienced immigration consultants", descZh: "持牌且经验丰富的移民顾问" },
  { icon: "💯", en: "High Success Rate", zh: "高成功率", descEn: "Proven track record of successful applications", descZh: "成功申请的良好记录" },
  { icon: "🤝", en: "Personalized Service", zh: "个性化服务", descEn: "Tailored solutions for your unique situation", descZh: "为您的独特情况量身定制解决方案" },
  { icon: "🌐", en: "Free Tools", zh: "免费工具", descEn: "Access to helpful immigration calculators and resources", descZh: "使用实用的移民计算器和资源" },
];

const servicesList = [
  { en: "Express Entry Applications", zh: "快速通道申请" },
  { en: "Provincial Nominee Programs (PNP)", zh: "省提名计划 (PNP)" },
  { en: "Family Sponsorship", zh: "家庭担保" },
  { en: "Study Permits", zh: "学习许可" },
  { en: "Work Permits", zh: "工作许可" },
  { en: "Permanent Residence Applications", zh: "永久居留申请" },
  { en: "Citizenship Applications", zh: "公民身份申请" },
  { en: "Immigration Appeals", zh: "移民上诉" },
];

export default function AboutPage() {
  const { t } = useLang();

  return (
    <>
      <PageHeader
        titleEn="About CanaQuest Consulting"
        titleZh="关于 CanaQuest 咨询"
        subtitleEn="Your trusted partner in Canadian immigration"
        subtitleZh="您值得信赖的加拿大移民伙伴"
      />

      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl space-y-12">
          {/* Who We Are */}
          <div>
            <h2 className="mb-4 text-2xl font-bold text-red-700">{t("Who We Are", "关于我们")}</h2>
            <p className="text-lg leading-relaxed text-gray-500">
              {t(
                "CanaQuest Consulting is a leading immigration consulting firm dedicated to helping individuals and families achieve their Canadian immigration goals. With years of experience and a deep understanding of Canadian immigration law, we provide personalized guidance and support throughout your immigration journey.",
                "CanaQuest 咨询是一家领先的移民咨询公司，致力于帮助个人和家庭实现加拿大移民目标。凭借多年的经验和对加拿大移民法的深刻理解，我们在您的移民旅程中提供个性化的指导和支持。"
              )}
            </p>
          </div>

          {/* Our Mission */}
          <div>
            <h2 className="mb-4 text-2xl font-bold text-red-700">{t("Our Mission", "我们的使命")}</h2>
            <p className="text-lg leading-relaxed text-gray-500">
              {t(
                "Our mission is to make Canadian immigration accessible and understandable for everyone. We believe in empowering our clients with knowledge and tools while providing expert consultation to ensure the best possible outcomes.",
                "我们的使命是让每个人都能轻松了解和获取加拿大移民信息。我们致力于通过知识和工具赋能客户，同时提供专业咨询以确保最佳结果。"
              )}
            </p>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-red-700">{t("Why Choose Us", "为什么选择我们")}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {whyChooseUs.map((item) => (
                <div key={item.en} className="rounded-xl bg-white p-6 text-center shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-3 text-4xl">{item.icon}</div>
                  <h3 className="mb-2 font-semibold text-red-700">{t(item.en, item.zh)}</h3>
                  <p className="text-sm text-gray-500">{t(item.descEn, item.descZh)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-red-700">{t("Our Services", "我们的服务")}</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {servicesList.map((s) => (
                <div key={s.en} className="rounded-lg border-l-4 border-red-700 bg-gray-50 px-4 py-3 text-sm font-medium">
                  {t(s.en, s.zh)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        titleEn="Ready to Start Your Immigration Journey?"
        titleZh="准备好开始您的移民之旅了吗？"
        subtitleEn="Contact us today for a consultation"
        subtitleZh="立即联系我们进行咨询"
        buttonEn="Get in Touch"
        buttonZh="联系我们"
        href="/contact"
      />
    </>
  );
}
