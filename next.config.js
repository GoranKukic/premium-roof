/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = nextConfig

module.exports = {
  i18n: {
    locales: ['en', 'sr'],
    defaultLocale: 'en',
  },
};
