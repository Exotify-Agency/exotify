/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    imageSizes: [200, 400, 600, 800, 1000, 1200, 1400, 1600, 2000, 2400, 3200],
    deviceSizes: [200, 400, 600, 800, 1000, 1200, 1400, 1600, 2000, 2400, 3200],
    minimumCacheTTL: 31536000,
    formats: ["image/webp"],
  },
  compress: true,
};

module.exports = nextConfig;
