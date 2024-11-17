import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  env: {
    API_HOST: process.env.API_HOST,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        port: '',
        pathname: '/image/**',
      },
    ],
  },
}

export default nextConfig
