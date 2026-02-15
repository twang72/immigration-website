"use client";

import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import PageHeader, { CTASection } from "@/components/PageHeader";

/* ─── CRS Calculator ─── */
function CRSCalculator() {
  const { t, lang } = useLang();
  const [age, setAge] = useState("");
  const [education, setEducation] = useState("0");
  const [language, setLanguage] = useState("0");
  const [experience, setExperience] = useState("0");
  const [result, setResult] = useState<{ score: number; msg: string; color: string } | null>(null);

  const calculate = () => {
    const ageNum = parseInt(age) || 0;
    let agePoints = 0;
    if (ageNum >= 18 && ageNum <= 35) agePoints = 110;
    else if (ageNum >= 36 && ageNum <= 39) agePoints = 105 - (ageNum - 36) * 5;
    else if (ageNum >= 40 && ageNum <= 45) agePoints = 95 - (ageNum - 40) * 5;

    const total = agePoints + parseInt(education) + parseInt(language) + parseInt(experience);

    let msg: string;
    let color: string;
    if (total >= 470) {
      msg = t("Excellent! Your score is competitive for Express Entry.", "非常好！您的分数在快速通道中具有竞争力。");
      color = "text-green-600";
    } else if (total >= 400) {
      msg = t("Good score! You may be invited in future draws.", "不错！您可能会在未来的抽签中被邀请。");
      color = "text-yellow-600";
    } else {
      msg = t("Consider improving your score through education, language, or work experience.", "建议通过提升教育、语言或工作经验来提高分数。");
      color = "text-red-600";
    }
    setResult({ score: total, msg, color });
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-md sm:p-8">
      <h2 className="mb-1 text-2xl font-bold text-red-700">
        🎯 {t("Express Entry CRS Calculator", "快速通道 CRS 计算器")}
      </h2>
      <p className="mb-6 text-gray-500">
        {t("Calculate your Comprehensive Ranking System (CRS) score for Express Entry", "计算您的快速通道综合排名系统 (CRS) 分数")}
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-sm font-medium">{t("Age:", "年龄：")}</span>
          <input
            type="number"
            min={18}
            max={100}
            placeholder={t("Enter your age", "请输入您的年龄")}
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-red-500 focus:ring-2 focus:ring-red-200 focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium">{t("Level of Education:", "教育水平：")}</span>
          <select value={education} onChange={(e) => setEducation(e.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-red-500 focus:ring-2 focus:ring-red-200 focus:outline-none">
            <option value="0">{t("Select education level", "选择教育水平")}</option>
            <option value="120">{t("Doctoral degree (PhD)", "博士学位")}</option>
            <option value="112">{t("Master's degree", "硕士学位")}</option>
            <option value="98">{t("Two or more post-secondary credentials", "两个或以上高等教育文凭")}</option>
            <option value="90">{t("Bachelor's degree", "学士学位")}</option>
            <option value="30">{t("High school diploma", "高中毕业证")}</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium">{t("First Official Language (CLB):", "第一官方语言 (CLB)：")}</span>
          <select value={language} onChange={(e) => setLanguage(e.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-red-500 focus:ring-2 focus:ring-red-200 focus:outline-none">
            <option value="0">{t("Select language level", "选择语言水平")}</option>
            <option value="128">{t("CLB 10 or higher", "CLB 10 或更高")}</option>
            <option value="116">CLB 9</option>
            <option value="102">CLB 8</option>
            <option value="88">CLB 7</option>
            <option value="0">{t("Below CLB 7", "低于 CLB 7")}</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium">{t("Canadian Work Experience (years):", "加拿大工作经验（年）：")}</span>
          <select value={experience} onChange={(e) => setExperience(e.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-red-500 focus:ring-2 focus:ring-red-200 focus:outline-none">
            <option value="0">{t("None", "无")}</option>
            <option value="40">{t("1 year", "1 年")}</option>
            <option value="53">{t("2 years", "2 年")}</option>
            <option value="64">{t("3 years", "3 年")}</option>
            <option value="70">{t("4 years", "4 年")}</option>
            <option value="80">{t("5+ years", "5 年以上")}</option>
          </select>
        </label>
      </div>

      <button
        onClick={calculate}
        className="mt-6 rounded-lg bg-red-700 px-6 py-2.5 font-semibold text-white transition-colors hover:bg-red-800"
      >
        {t("Calculate CRS Score", "计算 CRS 分数")}
      </button>

      {result && (
        <div className="mt-6 rounded-lg bg-gray-50 p-6 text-center">
          <h3 className="text-lg font-semibold">{t("Your Estimated CRS Score:", "您的预估 CRS 分数：")}</h3>
          <div className="my-3 text-5xl font-bold text-red-700">{result.score}</div>
          <p className={`text-sm font-medium ${result.color}`}>{result.msg}</p>
        </div>
      )}
    </div>
  );
}

/* ─── Processing Time Estimator ─── */
function ProcessingTimeEstimator() {
  const { t, lang } = useLang();
  const [program, setProgram] = useState("");

  const times: Record<string, { en: string; zh: string }> = {
    express: { en: "6 months (complete application to PR)", zh: "6 个月（从完成申请到永久居留）" },
    pnp: { en: "15-19 months (including provincial nomination)", zh: "15-19 个月（包括省提名）" },
    family: { en: "12-14 months for spousal sponsorship", zh: "配偶担保 12-14 个月" },
    study: { en: "8-12 weeks (varies by country)", zh: "8-12 周（因国家而异）" },
    work: { en: "8-12 weeks (varies by work permit type)", zh: "8-12 周（因工作许可类型而异）" },
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-md sm:p-8">
      <h2 className="mb-1 text-2xl font-bold text-red-700">
        ⏱️ {t("Processing Time Estimator", "处理时间估算器")}
      </h2>
      <p className="mb-6 text-gray-500">
        {t("Get an estimate of processing times for different immigration programs", "获取不同移民项目的处理时间估算")}
      </p>

      <label className="block">
        <span className="mb-1 block text-sm font-medium">{t("Immigration Program:", "移民项目：")}</span>
        <select value={program} onChange={(e) => setProgram(e.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-red-500 focus:ring-2 focus:ring-red-200 focus:outline-none">
          <option value="">{t("Select a program", "选择一个项目")}</option>
          <option value="express">{t("Express Entry", "快速通道")}</option>
          <option value="pnp">{t("Provincial Nominee Program", "省提名计划")}</option>
          <option value="family">{t("Family Sponsorship", "家庭担保")}</option>
          <option value="study">{t("Study Permit", "学习许可")}</option>
          <option value="work">{t("Work Permit", "工作许可")}</option>
        </select>
      </label>

      {program && times[program] && (
        <div className="mt-6 rounded-lg bg-gray-50 p-6 text-center">
          <h3 className="text-lg font-semibold">{t("Estimated Processing Time:", "预计处理时间：")}</h3>
          <p className="mt-2 text-gray-600">{lang === "en" ? times[program].en : times[program].zh}</p>
        </div>
      )}
    </div>
  );
}

/* ─── Eligibility Check ─── */
function EligibilityCheck() {
  const { t, lang } = useLang();
  const [checks, setChecks] = useState([false, false, false, false]);
  const [result, setResult] = useState<{ msg: string; color: string } | null>(null);

  const toggle = (i: number) => {
    const next = [...checks];
    next[i] = !next[i];
    setChecks(next);
  };

  const checkItems = [
    { en: "I have at least 1 year of skilled work experience", zh: "我有至少1年的技术工作经验" },
    { en: "I meet the language requirements (CLB 7 or higher)", zh: "我满足语言要求（CLB 7 或更高）" },
    { en: "I have completed post-secondary education", zh: "我已完成高等教育" },
    { en: "I have sufficient funds to settle in Canada", zh: "我有足够的资金在加拿大定居" },
  ];

  const evaluate = () => {
    const count = checks.filter(Boolean).length;
    let msg: string;
    let color: string;
    if (count === 4) {
      msg = t(
        "✅ Congratulations! You appear to meet the basic eligibility criteria for Express Entry. Contact us for a detailed assessment.",
        "✅ 恭喜！您似乎满足快速通道的基本资格条件。请联系我们进行详细评估。"
      );
      color = "text-green-600";
    } else if (count >= 2) {
      msg = t(
        "⚠️ You meet some requirements but may need to improve in certain areas. We recommend a consultation to explore your options.",
        "⚠️ 您满足部分要求，但可能需要在某些方面进行提升。我们建议您进行咨询以探索您的选择。"
      );
      color = "text-yellow-600";
    } else {
      msg = t(
        "❌ You may not currently meet the basic eligibility requirements. Contact us to discuss alternative immigration pathways.",
        "❌ 您目前可能不满足基本资格要求。请联系我们讨论其他移民途径。"
      );
      color = "text-red-600";
    }
    setResult({ msg, color });
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-md sm:p-8">
      <h2 className="mb-1 text-2xl font-bold text-red-700">
        ✅ {t("Express Entry Eligibility Check", "快速通道资格检查")}
      </h2>
      <p className="mb-6 text-gray-500">
        {t("Quick assessment of your eligibility for Express Entry programs", "快速评估您的快速通道项目资格")}
      </p>

      <div className="space-y-3">
        {checkItems.map((item, i) => (
          <label key={i} className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 p-3 transition-colors hover:bg-gray-50">
            <input
              type="checkbox"
              checked={checks[i]}
              onChange={() => toggle(i)}
              className="h-5 w-5 rounded border-gray-300 text-red-600 focus:ring-red-500"
            />
            <span className="text-sm">{t(item.en, item.zh)}</span>
          </label>
        ))}
      </div>

      <button
        onClick={evaluate}
        className="mt-6 rounded-lg bg-red-700 px-6 py-2.5 font-semibold text-white transition-colors hover:bg-red-800"
      >
        {t("Check Eligibility", "检查资格")}
      </button>

      {result && (
        <div className="mt-6 rounded-lg bg-gray-50 p-6 text-center">
          <p className={`text-sm font-medium ${result.color}`}>{result.msg}</p>
        </div>
      )}
    </div>
  );
}

/* ─── Tools Page ─── */
export default function ToolsPage() {
  return (
    <>
      <PageHeader
        titleEn="Immigration Tools & Calculators"
        titleZh="移民工具和计算器"
        subtitleEn="Free tools to help you assess your immigration eligibility"
        subtitleZh="免费工具帮助您评估移民资格"
      />

      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl space-y-8">
          <CRSCalculator />
          <ProcessingTimeEstimator />
          <EligibilityCheck />
        </div>
      </section>

      <CTASection
        titleEn="Need Professional Guidance?"
        titleZh="需要专业指导？"
        subtitleEn="Our experts are here to help you with personalized advice"
        subtitleZh="我们的专家随时为您提供个性化建议"
        buttonEn="Contact Us"
        buttonZh="联系我们"
        href="/contact"
      />
    </>
  );
}
