"use client";

import { useLang } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-gray-800 py-8 text-center text-white">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-sm">
          {t(
            "© 2026 CanaQuest Consulting. All rights reserved.",
            "© 2026 CanaQuest 咨询。保留所有权利。"
          )}
        </p>
        <p className="mt-1 text-sm text-gray-400">
          {t(
            "Professional immigration consulting services",
            "专业移民咨询服务"
          )}
        </p>
      </div>
    </footer>
  );
}
