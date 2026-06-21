import type { NextConfig } from "next";
import { readFileSync } from "node:fs";
import { join } from "node:path";

type OldRedirect = {
  source: string;
  destination: string;
  statusCode: 301;
};

// 301 redirects from the old olga.events (Shopify) URLs to the new routes,
// generated from the live sitemap/collections — see old-redirects.json.
function loadRedirects(): OldRedirect[] {
  try {
    const raw = readFileSync(join(process.cwd(), "old-redirects.json"), "utf8");
    return JSON.parse(raw) as OldRedirect[];
  } catch {
    return [];
  }
}

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
  async redirects() {
    return loadRedirects();
  },
};

export default nextConfig;
