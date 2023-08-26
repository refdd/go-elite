const nextConfig = {
  images: {
    domains: ["s3.eu-central-1.amazonaws.com", "res.cloudinary.com"],
  },
  reactStrictMode: true,
};
const withVideos = require("next-videos");

module.exports = withVideos(nextConfig);
