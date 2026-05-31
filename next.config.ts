import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const REPO_NAME = "personal-portofolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${REPO_NAME}` : "",
  assetPrefix: isProd ? `/${REPO_NAME}/` : "",
  images: { unoptimized: true },
};

export default nextConfig;
