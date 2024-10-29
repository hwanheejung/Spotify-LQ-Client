import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  env: {
    API_HOST: process.env.API_HOST,
  },
  async rewrites() {
    return [
      {
        source: '/api/auth/spotify',
        destination: '/api/auth/spotify',
      },
    ]
  },
}

export default nextConfig
