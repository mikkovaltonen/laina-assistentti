/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fonts.gstatic.com',
      },
    ],
  },
  eslint: {
    // Don't run ESLint during production builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Don't run type checking during production builds
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig 