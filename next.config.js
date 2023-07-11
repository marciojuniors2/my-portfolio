/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
  experimental: {
    scss: true,
  },
  reactStrictMode: true,
  env: {
    PRISMIC_API_ENDPOINT: process.env.PRISMIC_API_ENDPOINT,
  }
};