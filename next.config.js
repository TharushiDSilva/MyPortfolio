const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/MyPortfolio' : '',
  assetPrefix: isProd ? '/MyPortfolio/' : '',
  images: {
    unoptimized: true, // needed for static export
  },
};

module.exports = nextConfig;
