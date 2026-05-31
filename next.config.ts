import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const REPO_NAME = "personal-portofolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "",
  assetPrefix: "",
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },
};

export default nextConfig;
