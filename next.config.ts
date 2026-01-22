import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Required for GitHub Pages static hosting
  output: "export",

  // ✅ Next/Image optimizer needs a server; disable for static export
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
};

export default nextConfig;
