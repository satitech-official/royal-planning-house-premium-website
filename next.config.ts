import type { NextConfig } from "next";

const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  output: isStaticExport ? "export" : undefined,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: isStaticExport,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

