"use client";

import { useState, FormEvent } from "react";
import { useLang } from "@/context/LanguageContext";
import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  const { t, lang } = useLang();
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
        setStatus({
          type: "success",
          msg: t("Message sent successfully! We'll get back to you soon.", "消息发送成功！我们会尽快与您联系。"),
        });
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus({
          type: "error",
          msg: t("Failed to send message. Please try again.", "发送失败，请重试。"),
        });
      }
    } catch {
      setStatus({
        type: "error",
        msg: t(
          "Unable to connect to server. Please try again later or contact us directly.",
          "无法连接到服务器。请稍后重试或直接联系我们。"
        ),
      });
    } finally {
      setSubmitting(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  const inputCls =
    "w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-red-500 focus:ring-2 focus:ring-red-200 focus:outline-none";

  return (
    <>
      <PageHeader
        titleEn="Contact Us"
        titleZh="联系我们"
        subtitleEn="Get in touch with our immigration experts"
        subtitleZh="与我们的移民专家取得联系"
      />

      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="mb-4 text-2xl font-bold text-red-700">{t("Get In Touch", "联系方式")}</h2>
            <p className="mb-8 text-gray-500">
              {t(
                "Have questions about Canadian immigration? We're here to help. Contact us today for a consultation.",
                "对加拿大移民有疑问？我们随时为您提供帮助。立即联系我们进行咨询。"
              )}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl">📧</span>
                <div>
                  <h3 className="font-semibold">{t("Email", "电子邮件")}</h3>
                  <p className="text-gray-500">info@canaquestconsulting.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">📍</span>
                <div>
                  <h3 className="font-semibold">{t("Address", "地址")}</h3>
                  <p className="text-gray-500">329 Howe St</p>
                  <p className="text-gray-500">PMB 2145</p>
                  <p className="text-gray-500">Vancouver, BC V6C 3N2</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">🕐</span>
                <div>
                  <h3 className="font-semibold">{t("Business Hours", "营业时间")}</h3>
                  <p className="text-gray-500">{t("Monday - Friday: 9:00 AM - 6:00 PM PST", "周一至周五：上午 9:00 - 下午 6:00（太平洋时间）")}</p>
                  <p className="text-gray-500">{t("Saturday: 10:00 AM - 2:00 PM PST", "周六：上午 10:00 - 下午 2:00（太平洋时间）")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl bg-white p-6 shadow-md sm:p-8">
            <h2 className="mb-6 text-2xl font-bold text-red-700">{t("Send Us a Message", "给我们留言")}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium">{t("Full Name *", "姓名 *")}</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">{t("Email Address *", "电子邮箱 *")}</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">{t("Phone Number", "电话号码")}</label>
                <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">{t("Subject *", "主题 *")}</label>
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
              <div>
                <label className="mb-1 block text-sm font-medium">{t("Message *", "留言 *")}</label>
                <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputCls + " resize-vertical"} />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-lg bg-red-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-800 disabled:opacity-50"
              >
                {submitting ? t("Sending...", "发送中...") : t("Send Message", "发送消息")}
              </button>

              {status && (
                <div
                  className={`mt-2 rounded-lg p-3 text-center text-sm font-medium ${
                    status.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                  }`}
                >
                  {status.msg}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
