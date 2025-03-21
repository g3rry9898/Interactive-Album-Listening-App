"use strict";

/** @type {import('next').NextConfig} */
var nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com', 'i.scdn.co', 'images.unsplash.com']
  }
};
module.exports = nextConfig;