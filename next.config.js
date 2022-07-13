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
  },
  webpack: (config, { dev, isServer }) => {
    // Note, preact is only enabled for production builds (`next build`)
    if (!dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "react/jsx-runtime.js": "preact/compat/jsx-runtime",
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      };
    }

    return config;
  },
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