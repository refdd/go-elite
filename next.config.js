const nextConfig = {
  images: {
    domains: ["s3.eu-central-1.amazonaws.com"],
  },
  reactStrictMode: true,
};

const withVideos = require("next-videos");

module.exports = withVideos(nextConfig);
