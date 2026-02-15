"use client";

import { useLang } from "@/context/LanguageContext";
import PageHeader, { CTASection } from "@/components/PageHeader";

const links = [
  {
    titleEn: "Job Bank Canada",
    titleZh: "加拿大职位银行",
    descEn: "Canada's official job site — search for jobs, explore careers, and find labour market information.",
    descZh: "加拿大官方求职网站——搜索职位、探索职业并查找劳动力市场信息。",
    url: "https://www.jobbank.gc.ca/home",
  },
  {
    titleEn: "IRCC News & Updates",
    titleZh: "IRCC 新闻与更新",
    descEn: "Stay up to date with the latest news from Immigration, Refugees and Citizenship Canada (IRCC).",
    descZh: "了解加拿大移民、难民和公民部 (IRCC) 的最新消息。",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship/news.html",
  },
  {
    titleEn: "Express Entry CRS Tool",
    titleZh: "快速通道 CRS 打分工具",
    descEn: "Official IRCC tool for calculating your Comprehensive Ranking System score.",
    descZh: "IRCC 官方综合排名系统打分工具。",
    url: "https://www.cic.gc.ca/english/immigrate/skilled/crs-tool.asp",
  },
  {
    titleEn: "Processing Times",
    titleZh: "申请处理时间",
    descEn: "Check current IRCC processing times for all immigration, citizenship, and temporary residence applications.",
    descZh: "查看 IRCC 当前所有移民、公民身份和临时居留申请的处理时间。",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html",
  },
  {
    titleEn: "NOC Code Lookup",
    titleZh: "NOC 岗位编码查询",
    descEn: "Find your National Occupation Classification code — essential for Express Entry and many immigration programs.",
    descZh: "查找您的国家职业分类编码——快速通道和许多移民项目的必备信息。",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/find-national-occupation-code.html",
  },
  {
    titleEn: "Express Entry Rounds",
    titleZh: "快速通道邀请轮次",
    descEn: "View the latest Express Entry invitation rounds, including minimum CRS scores and number of invitations.",
    descZh: "查看最新快速通道邀请轮次，包括最低CRS分数和邀请人数。",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-rounds.html",
  },
];

export default function LinksPage() {
  const { t } = useLang();

  return (
    <>
      <PageHeader
        titleEn="Useful Resources"
        titleZh="实用资源"
        subtitleEn="Official links and tools for your Canadian immigration journey"
        subtitleZh="您的加拿大移民之旅的官方链接和工具"
      />

      <section className="bg-gray-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-0 divide-y divide-gray-200">
            {links.map((link, i) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-6 py-8 transition-colors first:pt-0 last:pb-0"
              >
                <span className="mt-1 text-xs font-semibold tracking-widest text-gray-300 group-hover:text-red-700 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-red-700">
                    {t(link.titleEn, link.titleZh)}
                    <span className="ml-2 text-xs text-gray-300 group-hover:text-red-400 transition-colors">↗</span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {t(link.descEn, link.descZh)}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        titleEn="Need Help Navigating Your Options?"
        titleZh="需要帮助了解您的选择？"
        subtitleEn="Our licensed consultants can guide you through every step"
        subtitleZh="我们的持牌顾问可以指导您完成每一步"
        buttonEn="Book Consultation"
        buttonZh="预约咨询"
        href="/contact"
      />
    </>
  );
}
