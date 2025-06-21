const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    "https://www.google.com",
    "http://localhost:3000",
  ],
  productionBrowserSourceMaps: false,
  webpack: (config, { dev }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    };

    if (dev) {
      config.devtool = false;
    }
    return config;
  },
};

module.exports = nextConfig; 