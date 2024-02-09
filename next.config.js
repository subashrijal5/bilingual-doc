const withNextra = require("nextra")({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.tsx",
    staticImage: true,
    flexsearch: {
        codeblocks: false,
    },
    defaultShowCopyCode: true,
});

module.exports = {
    ...withNextra({
        i18n: {
            locales: ["en", "ja"],
            defaultLocale: "en",
        },
        redirects: () => {
            return [
                {
                    source: "/docs",
                    destination: "/docs/getting-started",
                    statusCode: 301,
                },
            ];
        },
        reactStrictMode: true,
    }),
    images: {
        unoptimized: true,
    },
};
