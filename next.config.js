const nextConfig = {
  images: {
    domains: ["s3.eu-central-1.amazonaws.com"],
  },
  reactStrictMode: true,
};
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "false",
});
module.exports = withBundleAnalyzer(nextConfig);
