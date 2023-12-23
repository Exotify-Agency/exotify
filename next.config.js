/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    imageSizes: [400, 600, 800, 1000, 1200, 1400, 1600, 2000, 2400],
    deviceSizes: [400, 600, 800, 1000, 1200, 1400, 1600, 2000, 2400],
    minimumCacheTTL: 31536000,
    // formats: ["image/webp"],
  },
  optimizeFonts: true,
  compress: true,
};

module.exports = nextConfig;
