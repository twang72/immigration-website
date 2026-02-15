"use client";

import { useLang } from "@/context/LanguageContext";
import PageHeader, { CTASection } from "@/components/PageHeader";

const benefits = [
  { en: "Quality Education", zh: "优质教育", descEn: "Canadian nursing programs are globally recognized and accredited", descZh: "加拿大护理课程获得全球认可和认证" },
  { en: "High Demand", zh: "高需求", descEn: "Excellent job prospects with competitive salaries across Canada", descZh: "加拿大各地就业前景优越，薪资具有竞争力" },
  { en: "Clinical Experience", zh: "临床经验", descEn: "Hands-on training in state-of-the-art healthcare facilities", descZh: "在先进的医疗设施中进行实践培训" },
  { en: "Immigration Pathway", zh: "移民途径", descEn: "Direct route to permanent residence through Express Entry", descZh: "通过快速通道直接获得永久居留权" },
];

const programs = [
  { nameEn: "University of Toronto", nameZh: "多伦多大学", locationEn: "Toronto, Ontario", locationZh: "安大略省多伦多", degreeEn: "Bachelor of Science in Nursing (BScN)", degreeZh: "护理学学士 (BScN)", descEn: "One of Canada's top-ranked nursing programs, offering comprehensive education with exceptional clinical placements in Toronto's world-class hospitals.", descZh: "加拿大排名最高的护理课程之一，提供全面教育，并在多伦多世界一流的医院中进行出色的临床实习。", durationEn: "4 years (8 semesters)", durationZh: "4年（8个学期）", tuition: "~$58,000 - $60,000", intakeEn: "September", intakeZh: "9月", reqEn: "High school diploma, Biology, Chemistry, English (IELTS 6.5+)", reqZh: "高中毕业证，生物、化学、英语（雅思 6.5+）" },
  { nameEn: "University of British Columbia (UBC)", nameZh: "英属哥伦比亚大学 (UBC)", locationEn: "Vancouver, British Columbia", locationZh: "不列颠哥伦比亚省温哥华", degreeEn: "Bachelor of Science in Nursing", degreeZh: "护理学学士", descEn: "UBC's School of Nursing is renowned for its innovative curriculum and research opportunities, preparing nurses for leadership roles in healthcare.", descZh: "UBC 护理学院以创新课程和研究机会著称，培养护理领域的领导人才。", durationEn: "4 years", durationZh: "4年", tuition: "~$44,000 - $46,000", intakeEn: "September", intakeZh: "9月", reqEn: "High school diploma, Science prerequisites, English proficiency", reqZh: "高中毕业证，理科先修课程，英语水平证明" },
  { nameEn: "McMaster University", nameZh: "麦克马斯特大学", locationEn: "Hamilton, Ontario", locationZh: "安大略省汉密尔顿", degreeEn: "Bachelor of Science in Nursing (BScN)", degreeZh: "护理学学士 (BScN)", descEn: "McMaster's problem-based learning approach provides students with critical thinking and clinical skills highly valued by employers.", descZh: "麦克马斯特大学的问题导向学习方法为学生提供备受雇主重视的批判性思维和临床技能。", durationEn: "4 years", durationZh: "4年", tuition: "~$37,000 - $40,000", intakeEn: "September", intakeZh: "9月", reqEn: "High school diploma, Biology, Chemistry, Math, English (IELTS 6.5+)", reqZh: "高中毕业证，生物、化学、数学、英语（雅思 6.5+）" },
  { nameEn: "University of Alberta", nameZh: "阿尔伯塔大学", locationEn: "Edmonton, Alberta", locationZh: "阿尔伯塔省埃德蒙顿", degreeEn: "Bachelor of Science in Nursing (BScN)", degreeZh: "护理学学士 (BScN)", descEn: "Offers collaborative BScN programs with strong emphasis on community health and Indigenous health, with excellent clinical partnerships throughout Alberta.", descZh: "提供协作式护理课程，重点关注社区健康和原住民健康，并在阿尔伯塔省拥有出色的临床合作伙伴关系。", durationEn: "4 years", durationZh: "4年", tuition: "~$32,000 - $35,000", intakeEn: "September", intakeZh: "9月", reqEn: "High school diploma, Biology, Chemistry, Math, English proficiency", reqZh: "高中毕业证，生物、化学、数学、英语水平证明" },
  { nameEn: "Dalhousie University", nameZh: "达尔豪斯大学", locationEn: "Halifax, Nova Scotia", locationZh: "新斯科舍省哈利法克斯", degreeEn: "Bachelor of Science in Nursing (BScN)", degreeZh: "护理学学士 (BScN)", descEn: "Atlantic Canada's leading nursing program with strong clinical placements and opportunities for international health experiences.", descZh: "大西洋加拿大地区领先的护理课程，拥有强大的临床实习和国际卫生体验机会。", durationEn: "4 years", durationZh: "4年", tuition: "~$28,000 - $30,000", intakeEn: "September", intakeZh: "9月", reqEn: "High school diploma, Biology, Chemistry, English (IELTS 7.0+)", reqZh: "高中毕业证，生物、化学、英语（雅思 7.0+）" },
  { nameEn: "University of Calgary", nameZh: "卡尔加里大学", locationEn: "Calgary, Alberta", locationZh: "阿尔伯塔省卡尔加里", degreeEn: "Bachelor of Nursing (BN)", degreeZh: "护理学学士 (BN)", descEn: "Features innovative simulation labs and partnerships with Calgary's healthcare system, preparing students for diverse nursing careers.", descZh: "拥有创新的模拟实验室和与卡尔加里医疗系统的合作伙伴关系，为学生的多样化护理职业做好准备。", durationEn: "4 years", durationZh: "4年", tuition: "~$30,000 - $33,000", intakeEn: "September", intakeZh: "9月", reqEn: "High school diploma, Biology, Chemistry, Math, English (IELTS 7.0+)", reqZh: "高中毕业证，生物、化学、数学、英语（雅思 7.0+）" },
  { nameEn: "York University", nameZh: "约克大学", locationEn: "Toronto, Ontario", locationZh: "安大略省多伦多", degreeEn: "Bachelor of Science in Nursing (BScN)", degreeZh: "护理学学士 (BScN)", descEn: "Offers a collaborative program with emphasis on social justice and health equity, with diverse clinical placements in the Greater Toronto Area.", descZh: "提供注重社会公正和健康公平的协作课程，在大多伦多地区拥有多样化的临床实习。", durationEn: "4 years", durationZh: "4年", tuition: "~$35,000 - $38,000", intakeEn: "September", intakeZh: "9月", reqEn: "High school diploma, Biology, Chemistry, English (IELTS 7.0+)", reqZh: "高中毕业证，生物、化学、英语（雅思 7.0+）" },
  { nameEn: "Queen's University", nameZh: "女王大学", locationEn: "Kingston, Ontario", locationZh: "安大略省金斯顿", degreeEn: "Bachelor of Nursing Science (BNSc)", degreeZh: "护理科学学士 (BNSc)", descEn: "Prestigious program with small class sizes, personalized mentorship, and strong focus on evidence-based practice and research.", descZh: "享有盛誉的课程，班级规模小，提供个性化指导，注重循证实践和研究。", durationEn: "4 years", durationZh: "4年", tuition: "~$49,000 - $52,000", intakeEn: "September", intakeZh: "9月", reqEn: "High school diploma, Sciences, English (IELTS 7.0+)", reqZh: "高中毕业证，理科课程，英语（雅思 7.0+）" },
  { nameEn: "University of Manitoba", nameZh: "曼尼托巴大学", locationEn: "Winnipeg, Manitoba", locationZh: "曼尼托巴省温尼伯", degreeEn: "Bachelor of Nursing (BN)", degreeZh: "护理学学士 (BN)", descEn: "Affordable program with strong community partnerships and focus on Indigenous health, offering excellent opportunities in Manitoba's healthcare system.", descZh: "学费合理的课程，与社区建立了紧密的合作伙伴关系，注重原住民健康，在曼尼托巴省的医疗系统中提供出色的机会。", durationEn: "4 years", durationZh: "4年", tuition: "~$19,000 - $22,000", intakeEn: "September", intakeZh: "9月", reqEn: "High school diploma, Biology, Chemistry, Math, English (IELTS 6.5+)", reqZh: "高中毕业证，生物、化学、数学、英语（雅思 6.5+）" },
  { nameEn: "Toronto Metropolitan University", nameZh: "多伦多城市大学", locationEn: "Toronto, Ontario", locationZh: "安大略省多伦多", degreeEn: "Bachelor of Science in Nursing (BScN)", degreeZh: "护理学学士 (BScN)", descEn: "Urban-focused program in the heart of Toronto with extensive clinical experiences in diverse healthcare settings and strong employment outcomes.", descZh: "位于多伦多市中心的城市导向课程，在多样化的医疗环境中提供丰富的临床体验，就业成果优异。", durationEn: "4 years", durationZh: "4年", tuition: "~$35,000 - $38,000", intakeEn: "September", intakeZh: "9月", reqEn: "High school diploma, Biology, Chemistry, English (IELTS 6.5+)", reqZh: "高中毕业证，生物、化学、英语（雅思 6.5+）" },
];

const pathwaySteps = [
  { num: "01", en: "Study Permit", zh: "学习许可", descEn: "Obtain your study permit to pursue nursing education in Canada", descZh: "获取学习许可，在加拿大攻读护理学位" },
  { num: "02", en: "Graduate & Get Licensed", zh: "毕业并获得执照", descEn: "Complete your nursing degree and pass NCLEX-RN licensing exam", descZh: "完成护理学位并通过 NCLEX-RN 执照考试" },
  { num: "03", en: "Post-Graduation Work Permit", zh: "毕业后工作许可", descEn: "Obtain 3-year work permit to gain Canadian nursing experience", descZh: "获得3年工作许可，积累加拿大护理工作经验" },
  { num: "04", en: "Apply for PR", zh: "申请永久居留", descEn: "Apply through Express Entry or Provincial Nominee Programs", descZh: "通过快速通道或省提名计划申请" },
];

export default function MedicalEducationPage() {
  const { t } = useLang();

  return (
    <>
      <PageHeader
        titleEn="Medical Education in Canada"
        titleZh="加拿大医学教育"
        subtitleEn="Your pathway to becoming a healthcare professional in Canada"
        subtitleZh="您成为加拿大医疗专业人士的途径"
      />

      {/* Intro */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
            {t("Why Canada", "为什么选择加拿大")}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {t("Why Study Nursing in Canada?", "为什么在加拿大学习护理？")}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-500">
            {t(
              "Canada offers world-class nursing education with excellent career prospects and immigration pathways. Nursing is one of the most in-demand professions in Canada, providing international students with opportunities for post-graduation work permits and permanent residence.",
              "加拿大提供世界一流的护理教育，拥有出色的职业前景和移民途径。护理是加拿大最紧缺的职业之一，为国际学生提供毕业后工作许可和永久居留权的机会。"
            )}
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.en} className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-red-200 hover:shadow-lg">
                <h3 className="font-semibold text-gray-900 transition-colors group-hover:text-red-700">{t(b.en, b.zh)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{t(b.descEn, b.descZh)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-gray-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
            {t("Programs", "课程")}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {t("Top Nursing Programs in Canada", "加拿大顶尖护理课程")}
          </h2>
          <p className="mt-4 text-base text-gray-500">
            {t("Explore these excellent nursing programs at leading Canadian universities", "探索加拿大顶尖大学的优秀护理课程")}
          </p>

          <div className="mt-12 space-y-4">
            {programs.map((p, i) => (
              <div key={p.nameEn} className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-md sm:p-8">
                <div className="flex flex-col justify-between gap-3 border-b border-gray-100 pb-4 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold tracking-widest text-gray-300">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-700 transition-colors">{t(p.nameEn, p.nameZh)}</h3>
                  </div>
                  <span className="text-sm text-gray-400">{t(p.locationEn, p.locationZh)}</span>
                </div>
                <h4 className="mt-3 text-sm font-semibold text-red-700">{t(p.degreeEn, p.degreeZh)}</h4>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{t(p.descEn, p.descZh)}</p>
                <div className="mt-4 grid gap-3 rounded-xl bg-gray-50 p-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
                  <div><span className="block text-[11px] font-medium uppercase tracking-wide text-gray-400">{t("Duration", "学制")}</span><span className="mt-0.5 block text-gray-700">{t(p.durationEn, p.durationZh)}</span></div>
                  <div><span className="block text-[11px] font-medium uppercase tracking-wide text-gray-400">{t("Tuition (Int'l)", "学费（国际生）")}</span><span className="mt-0.5 block text-gray-700">{p.tuition}/{t("year", "年")}</span></div>
                  <div><span className="block text-[11px] font-medium uppercase tracking-wide text-gray-400">{t("Intake", "入学时间")}</span><span className="mt-0.5 block text-gray-700">{t(p.intakeEn, p.intakeZh)}</span></div>
                  <div><span className="block text-[11px] font-medium uppercase tracking-wide text-gray-400">{t("Requirements", "入学要求")}</span><span className="mt-0.5 block text-gray-700">{t(p.reqEn, p.reqZh)}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pathway */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
            {t("Immigration Pathway", "移民途径")}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {t("From Nursing Student to Permanent Resident", "从护理学生到永久居民")}
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pathwaySteps.map((step) => (
              <div key={step.num} className="relative rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-red-200 hover:shadow-lg">
                <span className="text-xs font-semibold tracking-widest text-red-700">{step.num}</span>
                <h3 className="mt-3 font-semibold text-gray-900">{t(step.en, step.zh)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{t(step.descEn, step.descZh)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        titleEn="Ready to Start Your Medical Education Journey?"
        titleZh="准备好开始您的医学教育之旅了吗？"
        subtitleEn="Let us help you choose the right nursing program and navigate the application process"
        subtitleZh="让我们帮助您选择合适的护理课程并指导申请流程"
        buttonEn="Book Consultation"
        buttonZh="预约咨询"
        href="/contact"
      />
    </>
  );
}
