/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const withPWA = require('next-pwa')

const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/webp']
  }
}

module.exports = withPWA({
  ...nextConfig,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true
  }
})