"use client";

import { useLang } from "@/context/LanguageContext";
import PageHeader, { CTASection } from "@/components/PageHeader";

const links = [
  {
    icon: "💼",
    titleEn: "Job Bank Canada",
    titleZh: "加拿大职位银行",
    descEn: "Canada's official job site — search for jobs, explore careers, and find labour market information.",
    descZh: "加拿大官方求职网站——搜索职位、探索职业并查找劳动力市场信息。",
    url: "https://www.jobbank.gc.ca/home",
    btnEn: "Visit Job Bank →",
    btnZh: "访问职位银行 →",
  },
  {
    icon: "📰",
    titleEn: "IRCC News & Updates",
    titleZh: "IRCC 新闻与更新",
    descEn: "Stay up to date with the latest news from Immigration, Refugees and Citizenship Canada (IRCC).",
    descZh: "了解加拿大移民、难民和公民部 (IRCC) 的最新消息。",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship/news.html",
    btnEn: "Visit IRCC News →",
    btnZh: "访问 IRCC 新闻 →",
  },
];

export default function LinksPage() {
  const { t } = useLang();

  return (
    <>
      <PageHeader
        titleEn="Useful Links"
        titleZh="实用链接"
        subtitleEn="Helpful resources for your Canadian immigration journey"
        subtitleZh="为您的加拿大移民之旅提供的实用资源"
      />

      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl space-y-6">
          {links.map((link) => (
            <div key={link.url} className="rounded-xl bg-white p-6 shadow-md sm:p-8">
              <div className="mb-3 text-4xl">{link.icon}</div>
              <h2 className="mb-2 text-2xl font-bold text-red-700">{t(link.titleEn, link.titleZh)}</h2>
              <p className="mb-4 text-gray-500">{t(link.descEn, link.descZh)}</p>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-red-700 px-6 py-2.5 font-semibold text-white transition-colors hover:bg-red-800"
              >
                {t(link.btnEn, link.btnZh)}
              </a>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        titleEn="Need Help Navigating Your Options?"
        titleZh="需要帮助了解您的选择？"
        subtitleEn="Our experts can guide you through every step of your immigration journey"
        subtitleZh="我们的专家可以指导您完成移民旅程的每一步"
        buttonEn="Contact Us"
        buttonZh="联系我们"
        href="/contact"
      />
    </>
  );
}
