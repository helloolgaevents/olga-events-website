import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "olga.events",
        pathname: "/cdn/shop/files/**",
      },
    ],
  },
};

export default nextConfig;
