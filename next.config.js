/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const withPWA = require('next-pwa')
const withPlugins = require('next-compose-plugins')

const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/webp']
  }
}

const pwaConfig = {
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true
  }
}

module.exports = withPlugins(
  [[withPWA, pwaConfig]], 
  nextConfig
)