/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // if using <Image />
  },
  basePath: "/Portfolio", // IMPORTANT: match your repo name
  assetPrefix: "/Portfolio"
};

module.exports = nextConfig;
