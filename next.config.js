/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_APP_RAPID_API_KEY:
      'c96cd132demshec7a32c834b53d8p174d79jsn9a1e1d165880',
  },
  images: {
    domains: ['i.ibb.co', 'dergipark.org.tr'],
  },
};

module.exports = nextConfig;
