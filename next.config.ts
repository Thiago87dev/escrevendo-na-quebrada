import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
   images: {
    unoptimized: true, // <- Adicione isso aqui
  },
};

export default nextConfig;
