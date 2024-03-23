/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export"
};

export default nextConfig;

// next.config.js
const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript({
  target: 'serverless',
  webpack: (config, options) => {
    config.plugins = config.plugins || []
    return config
  }
})