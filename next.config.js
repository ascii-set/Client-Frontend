/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's2.coinmarketcap.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'assets.coingecko.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'coin-images.coingecko.com',
        pathname: '**',
      },
    ],
  },
};
