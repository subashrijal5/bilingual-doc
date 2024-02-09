/**
 * @typedef {"en"} DefaultLocale
 * @typedef {DefaultLocale | "bn" | "es" | "fr" | "hn" | "ja" | "ko" | "ru"} Locale
 */

/** @type {Readonly<Record<Locale, string>>} */
export const languageMap = {
    en: "English",

    ja: "日本語",
};

/** @type {Readonly<Record<Locale, string>>} */
export const titleMap = {
    en: "Bilingual",
};

/** @type {Readonly<Record<Locale, {lightweight:string;realtime?:string;suspense?:string;pagination?:string;backendAgnostic?:string;renderingStrategies?:string;typescript?:string;remoteLocal?:string;}>>} */
export const featuresMap = {
    // "en": {
    //   lightweight: "Lightweight",
    //   realtime: "Realtime",
    //   suspense: "Suspense",
    //   pagination: "Pagination",
    //   backendAgnostic: "Backend Agnostic",
    //   renderingStrategies: "SSR / SSG Ready",
    //   typescript: "TypeScript Ready",
    //   remoteLocal: "Remote + Local",
    // },
    // "fr": {
    //   lightweight: "Léger",
    //   realtime: "Temps réel",
    //   backendAgnostic: "Indépendant du Backend",
    // },
};

/** @type {Readonly<Record<Locale, string>>} */
export const headDescriptionMap = {
    en: "Bilingual Docs",
};

/** @type {Readonly<Record<Locale, string>>} */
export const feedbackLinkMap = {
    en: "Question? Give us feedback →",
    ja: "ご質問は？ご意見をお聞かせください。",

};

/** @type {Readonly<Record<Locale, string>>} */
export const editTextMap = {
    en: "Edit this page on GitHub →",
    ja: "Github で編集する →",
};

/** @type {Readonly<Record<Locale, { utmSource: string; text: string; suffix?: string | undefined }>>} */
export const footerTextMap = {
    en: { utmSource: "lang_en", text: "Powered by" },
};

/** @type {Readonly<Record<Locale, string>>} */
export const tableOfContentsTitleMap = {
    en: "On This Page",
    ja: "このページについて",
};

/** @type {Readonly<Record<Locale, string>>} */
export const searchPlaceholderMap = {
    en: "Search documentation...",
    ja: "検索ドキュメント...",
};

/** @type {Readonly<Record<Locale, string>>} */
export const gitTimestampMap = {
    en: "Last updated on",
    ja: "最終更新日",
};
