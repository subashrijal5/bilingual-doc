// import React from 'react'
// import { DocsThemeConfig } from 'nextra-theme-docs'

// const config: DocsThemeConfig = {
//   logo: <span>Bilingual Docs</span>,
//   project: {
//     link: 'https://github.com/subashrijal5/langpro-doc',
//   },
//   chat: {
//     link: 'https://discord.com',
//   },
//   docsRepositoryBase: 'https://github.com/subashrijal5/langpro-doc',
//   footer: {
//     text: 'Bilingual Docs',
//   },

// }

// export default config

import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

// import Vercel from "./components/vercel";
import useLocalesMap from "./components/use-locales-map";
import {
    editTextMap,
    feedbackLinkMap,
    footerTextMap,
    gitTimestampMap,
    headDescriptionMap,
    languageMap,
    searchPlaceholderMap,
    tableOfContentsTitleMap,
    titleMap,
} from "./translations/text";

/** @type {import('nextra-theme-docs').DocsThemeConfig} */
const themeConfig = {
    project: {
        link: "https://github.com/vercel/swr",
    },
    docsRepositoryBase: "https://github.com/vercel/swr-site/blob/main",
    useNextSeoProps() {
        return {
            titleTemplate: "%s – Bilingual",
        };
    },
    toc: {
        float: true,
        title: () => useLocalesMap(tableOfContentsTitleMap),
    },
    search: {
        placeholder: () => useLocalesMap(searchPlaceholderMap),
    },
    editLink: {
        text: () => useLocalesMap(editTextMap),
    },
    feedback: {
        content: () => useLocalesMap(feedbackLinkMap),
    },
    logo: () => {
        const title = useLocalesMap(titleMap);
        return (
            <>
                <span
                    className="mx-2 font-extrabold hidden md:inline select-none"
                    title={`Bilingual: ${title}`}
                >
                    Bilingual Docs
                </span>
            </>
        );
    },
    head: () => {
        const { route, locales, locale } = useRouter();
        const { frontMatter, title } = useConfig();
        const titleSuffix = useLocalesMap(titleMap);
        const description = useLocalesMap(headDescriptionMap);

        const imageUrl = new URL("https://swr-card.vercel.app");

        if (!/\/index\.+/.test(route)) {
            imageUrl.searchParams.set("title", title || titleSuffix);
        }

        const ogTitle = title
            ? `${title} – Starter`
            : `Starter: ${titleSuffix}`;
        const ogDescription = frontMatter.description || description;

        return (
            <>
                <link rel="icon" type="image/png" href="/favicon.png" />
                <meta name="description" content={ogDescription} />
                <meta property="og:title" content={ogTitle} />
                <meta property="og:description" content={ogDescription} />
                <meta property="og:locale" content={locale} />
                {locales
                    .filter((l) => l !== locale)
                    .map((l) => (
                        <meta
                            property="og:locale:alternate"
                            content={l}
                            key={l}
                        />
                    ))}
                {/* <!-- Cloudflare Web Analytics --> */}
                <script
                    defer
                    src="https://static.cloudflareinsights.com/beacon.min.js"
                    data-cf-beacon='{"token": "e3c730b0a4b5489297a1db819db25ee7"}'
                ></script>
                {/* <!-- End Cloudflare Web Analytics --> */}
            </>
        );
    },
    footer: {
        text: () => {
            const { utmSource, text, suffix } = useLocalesMap(footerTextMap);

            return (
                <a
                    href={`https://vercel.com/?utm_source=${utmSource}`}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center no-underline text-current font-semibold"
                >
                    <span className="mr-2">{text}</span>
                    <span>dasdsd</span>
                    {suffix ? <span className="ml-2">{suffix}</span> : null}
                </a>
            );
        },
    },
    gitTimestamp({ timestamp }) {
        const { locale } = useRouter();
        const lastUpdatedOn = useLocalesMap(gitTimestampMap);

        return (
            <>
                {lastUpdatedOn}{" "}
                <time dateTime={timestamp.toISOString()}>
                    {timestamp.toLocaleDateString(locale, {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })}
                </time>
            </>
        );
    },
    i18n: Object.entries(languageMap).map(([locale, text]) => ({
        locale,
        text,
    })),
};

export default themeConfig;
