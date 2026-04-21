/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/events',
        permanent: true,
      },
      {
        source: '/blog/:id',
        destination: '/eventos/:id',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
