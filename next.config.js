/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const withReactSvg = require("next-react-svg");
const withImages = require("next-images");

const path = require("path");
const nextConfig = {
   reactStrictMode: true,
};

module.exports = withPlugins(
   [
      withReactSvg({
         include: path.resolve(__dirname, "./public/images"),
         webpack(config, options) {
            return config;
         },
      }),
      withImages({}),
   ],
   nextConfig
);
