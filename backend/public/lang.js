// Language Switcher for CanaQuest Consulting
(function () {
    'use strict';

    const LANG_KEY = 'canaquest_lang';

    // Get saved language or default to English
    function getSavedLang() {
        return localStorage.getItem(LANG_KEY) || 'en';
    }

    // Save language preference
    function saveLang(lang) {
        localStorage.setItem(LANG_KEY, lang);
    }

    // Apply language to all elements with data-en / data-zh attributes
    function applyLang(lang) {
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-en]').forEach(function (el) {
            const text = el.getAttribute('data-' + lang);
            if (text !== null) {
                // For input placeholders
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = text;
                }
                // For <option> elements
                else if (el.tagName === 'OPTION') {
                    el.textContent = text;
                }
                // For elements that may contain child nodes we want to preserve (like links inside)
                else {
                    el.innerHTML = text;
                }
            }
        });

        // Update the toggle button text
        const toggleBtn = document.getElementById('langToggle');
        if (toggleBtn) {
            toggleBtn.textContent = lang === 'en' ? '中文' : 'English';
            toggleBtn.setAttribute('aria-label',
                lang === 'en' ? 'Switch to Chinese' : 'Switch to English');
        }
    }

    // Toggle between en and zh
    function toggleLang() {
        const current = getSavedLang();
        const next = current === 'en' ? 'zh' : 'en';
        saveLang(next);
        applyLang(next);
    }

    // Initialise on DOM ready
    document.addEventListener('DOMContentLoaded', function () {
        const lang = getSavedLang();
        applyLang(lang);

        var toggleBtn = document.getElementById('langToggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', toggleLang);
        }
    });
})();
