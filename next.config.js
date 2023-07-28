/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  compiler: {
    styledComponents: true,
  },
  trailingSlash: true,
  compress: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
