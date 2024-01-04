/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  trailingSlash: true,
}

// module.exports = nextConfig
module.exports = {
  ...nextConfig,
  images: {
    unoptimized: true,
  },
}
