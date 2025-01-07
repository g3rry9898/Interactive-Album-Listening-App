/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'i.scdn.co',
      'images.unsplash.com'
    ],
  }
};

module.exports = nextConfig;