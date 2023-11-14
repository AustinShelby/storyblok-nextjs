/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1504, 1920, 2048, 3840],
    loader: "custom",
    loaderFile: "./src/storyblokImageLoader.js",
  },
};

module.exports = nextConfig;
