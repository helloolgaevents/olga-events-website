import type { MetadataRoute } from "next";
import { SITE_URL, FURNITURE_CATEGORIES } from "./components/ui";

const ROUTES = [
  "",
  "/about-us",
  "/our-work",
  "/gallery",
  "/reviews",
  "/contact",
  "/wedding-planner-dubai",
  "/wedding-decoration-dubai",
  "/wedding-cost-dubai",
  "/wedding-packages-dubai",
  "/packages",
  "/corporate-events",
  "/private-events",
  "/seasonal-events",
  "/av-production",
  "/furniture",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const furniture = FURNITURE_CATEGORIES.map((c) => ({
    url: `${SITE_URL}/furniture/${c.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...pages, ...furniture];
}
