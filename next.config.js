/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,  // For static export
  },
  output: 'export',  // For static export
}

module.exports = nextConfig
