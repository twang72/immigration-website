"use client";

import { useState, FormEvent } from "react";
import { useLang } from "@/context/LanguageContext";
import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();

      if (result.success) {
        setStatus({ type: "success", msg: t("Message sent successfully! We'll get back to you soon.", "消息发送成功！我们会尽快与您联系。") });
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", msg: t("Failed to send message. Please try again.", "发送失败，请重试。") });
      }
    } catch {
      setStatus({ type: "error", msg: t("Unable to connect to server. Please try again later or contact us directly.", "无法连接到服务器。请稍后重试或直接联系我们。") });
    } finally {
      setSubmitting(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  const inputCls =
    "w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100 focus:outline-none transition-colors";

  const contactInfo = [
    {
      labelEn: "Email",
      labelZh: "电子邮件",
      lines: ["info@canaquestconsulting.com"],
    },
    {
      labelEn: "Address",
      labelZh: "地址",
      lines: ["329 Howe St", "PMB 2145", "Vancouver, BC V6C 3N2"],
    },
    {
      labelEn: "Business Hours",
      labelZh: "营业时间",
      lines: [
        t("Monday - Friday: 9:00 AM - 6:00 PM PST", "周一至周五：上午 9:00 - 下午 6:00（太平洋时间）"),
        t("Saturday: 10:00 AM - 2:00 PM PST", "周六：上午 10:00 - 下午 2:00（太平洋时间）"),
      ],
    },
  ];

  return (
    <>
      <PageHeader
        titleEn="Contact Us"
        titleZh="联系我们"
        subtitleEn="Get in touch with our licensed immigration consultants"
        subtitleZh="与我们的持牌移民顾问取得联系"
      />

      <section className="bg-gray-50 px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
              {t("Get In Touch", "联系方式")}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">
              {t("We're here to help", "我们随时为您服务")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              {t(
                "Have questions about Canadian immigration? Our licensed consultants provide honest assessment and professional guidance.",
                "对加拿大移民有疑问？我们的持牌顾问提供诚实评估和专业指导。"
              )}
            </p>

            <div className="mt-10 space-y-8">
              {contactInfo.map((item) => (
                <div key={item.labelEn}>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    {t(item.labelEn, item.labelZh)}
                  </h3>
                  {item.lines.map((line, i) => (
                    <p key={i} className="mt-1 text-sm text-gray-700">{line}</p>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-green-400" />
              <span className="text-xs text-green-600">
                {t("Accepting new clients", "接受新客户")}
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
              <h2 className="mb-8 text-xl font-bold tracking-tight">
                {t("Send Us a Message", "给我们留言")}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-gray-500">{t("Full Name", "姓名")} *</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-gray-500">{t("Email", "邮箱")} *</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-gray-500">{t("Phone", "电话")}</label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-gray-500">{t("Subject", "主题")} *</label>
                    <select required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={inputCls}>
                      <option value="">{t("Select a subject", "选择主题")}</option>
                      <option value="express-entry">{t("Express Entry", "快速通道")}</option>
                      <option value="pnp">{t("Provincial Nominee Program", "省提名计划")}</option>
                      <option value="family">{t("Family Sponsorship", "家庭担保")}</option>
                      <option value="study">{t("Study Permit", "学习许可")}</option>
                      <option value="work">{t("Work Permit", "工作许可")}</option>
                      <option value="other">{t("Other Inquiry", "其他咨询")}</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-gray-500">{t("Message", "留言")} *</label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputCls + " resize-vertical"} />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-lg bg-red-700 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-md disabled:opacity-50"
                >
                  {submitting ? t("Sending...", "发送中...") : t("Send Message", "发送消息")}
                </button>

                {status && (
                  <div className={`rounded-lg p-4 text-center text-sm font-medium ${status.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                    {status.msg}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
