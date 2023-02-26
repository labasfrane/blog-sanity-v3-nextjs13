/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["freesvg.org", "cdn.sanity.io"],
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};
