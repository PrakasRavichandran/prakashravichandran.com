/* eslint-disable @typescript-eslint/no-var-requires */
// NOTE
// Do not change this file to .mjs
// https://github.com/contentlayerdev/contentlayer/issues/313#issuecomment-1305424923
const path = require('path');

const bundleAnalyzer = require('@next/bundle-analyzer');
const million = require('million/compiler');

const appHeaders = require('./config/next/headers');
const redirects = require('./config/next/redirects');

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
});

const defaultNextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  compress: true,
  crossOrigin: 'anonymous',
  experimental: {
    ppr: true,
    // useLightningcss: true,
    optimizePackageImports: ['react-tweet'],
  },
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  images: {
    remotePatterns: [
      { hostname: 'i.scdn.co' },
      { hostname: 'spotify.com' },
      { hostname: 'prakashravichandran.com' },
      { hostname: 'unavatar.io' },
      { hostname: 'source.boringavatars.com' },
      { hostname: 'raw.githubusercontent.com' },
      { hostname: 'avatars.githubusercontent.com' },
      { hostname: 'assets.literal.club' },
      { hostname: 'books.google.com' },
      { hostname: 's3-img.pixpa.com' }, // Added the hostname here
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ['image/avif', 'image/webp'],
  },
  headers: () => appHeaders,
  redirects: () => redirects,
};

const millionConfig = {
  mute: true,
  auto: { rsc: true },
  rsc: true,
};

const config = withBundleAnalyzer(
  million.next(defaultNextConfig, millionConfig),
);
module.exports = config;
