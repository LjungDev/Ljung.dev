/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: !!process.env.UNOPTIMIZED_IMAGES,
    },
  },
};

module.exports = nextConfig;
